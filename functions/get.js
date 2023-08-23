// commands/get.js
const axios = require('axios');

async function getRepositoryInfo(repositoryName) {
  try {
    const response = await axios.get(`https://api.github.com/repos/${repositoryName}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching repository information');
  }
}

module.exports = getRepositoryInfo;
