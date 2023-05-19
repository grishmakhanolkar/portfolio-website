export default async function handler(req, res) {
  const formFields = req.body;
  try {
    const response = await fetch(`${process.env.SHEET_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFields),
    });
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send data' });
  }
}
