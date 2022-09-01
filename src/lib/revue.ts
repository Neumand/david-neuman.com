export interface Issue {
  id: number;
  title: string;
  html: string;
  sent_at: string;
  description: string;
  url: string;
  active: boolean;
}

export const getAllIssues = async () => {
  try {
    const responseData = await fetch('https://www.getrevue.co/api/v2/issues', {
      headers: {
        Authorization: `Token ${import.meta.env.REVUE_API_KEY}`,
      },
    });

    const issues: Issue[] = await responseData.json();
    if (!responseData.ok) {
      console.error('Error fetching all issues:', responseData.error);
      return [];
    }
    return issues;
  } catch (error) {
    console.error('An error occurred while fetching issues:', error);
    return [];
  }
};
