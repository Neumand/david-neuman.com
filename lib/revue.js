import fetch from 'node-fetch';

const { revueApiUrl } = require('../constants');

export const getAllIssues = async () => {
  try {
    const responseData = await fetch(`${revueApiUrl}/v2/issues`, {
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`,
      },
    });

    const issues = await responseData.json();
    if (!responseData.ok) {
      console.error('Error fetching all issues:', responseData.error);
      return;
    }
    return issues;
  } catch (error) {
    console.error('An error occurred while fetching issues:', error);
    return [];
  }
};
