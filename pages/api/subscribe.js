const FormData = require('form-data');
const { revueApiUrl } = require('../../constants');

export default async function (req, res) {
  try {
    const { email, name } = JSON.parse(req.body);
    if (!email) return res.status(400).json({ error: 'Please enter an email' });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    const response = await fetch(`${revueApiUrl}/v2/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.REVUE_API_KEY}`,
      },
      body: formData,
    });

    const responseData = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: responseData.error.email[0] });
    }

    return res.status(201).json({ responseData });
  } catch (error) {
    console.error('An error occurred while attempting to subscribe:', error);
    res.status(500).json({ error: 'Oops! Something went wrong trying to subscribe.' });
  }
}
