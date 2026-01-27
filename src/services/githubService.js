import axios from 'axios';

const GITHUB_USERNAME = 'swaroopms658';
const BASE_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Basic In-Memory Cache
const cache = {
  projects: null,
  timestamp: null
};
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

const summarizeReadme = (markdown) => {
  if (!markdown) return '';

  // Remove markdown formatting
  let text = markdown
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/#{1,6}\s+(.*)/g, '') // Remove headers
    .replace(/`{3,}[\s\S]*?`{3,}/g, '') // Remove code blocks
    .replace(/`.*?`/g, '') // Remove inline code
    .replace(/>\s*(.*)/g, '$1') // Remove blockquotes
    .replace(/[*_~]{1,2}/g, '') // Remove bold/italic/strikethrough
    .replace(/-{3,}/g, '') // Remove horizontal rules
    .trim();

  // Split into paragraphs and find the first meaningful one
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 20);

  if (paragraphs.length === 0) return '';

  const summary = paragraphs[0].trim();
  return summary.length > 250 ? summary.substring(0, 247) + '...' : summary;
};

export const fetchGithubProjects = async () => {
  // Check cache
  if (cache.projects && cache.timestamp && (Date.now() - cache.timestamp < CACHE_DURATION)) {
    return cache.projects;
  }

  try {
    const response = await axios.get(`${BASE_URL}?sort=updated&per_page=12`);
    const repos = response.data.filter(repo => !repo.fork && repo.name !== GITHUB_USERNAME);

    const projectPromises = repos.map(async (repo) => {
      let enhancedDescription = repo.description;

      try {
        // Fetch README
        const readmeResponse = await axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`);
        const decodedContent = atob(readmeResponse.data.content.replace(/\n/g, ''));
        const summary = summarizeReadme(decodedContent);

        if (summary) {
          enhancedDescription = summary;
        }
      } catch (e) {
        // If readme doesn't exist or error, keep original description
      }

      return {
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: enhancedDescription || 'A project developed by Swaroop MS.',
        githubUrl: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language,
        updatedAt: repo.updated_at
      };
    });

    const projects = await Promise.all(projectPromises);

    // Update cache
    cache.projects = projects;
    cache.timestamp = Date.now();

    return projects;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};
