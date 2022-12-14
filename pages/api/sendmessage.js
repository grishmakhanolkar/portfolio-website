export default function handler(req, res) {
  const formFields = req.body;
  fetch(`${process.env.SHEET_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formFields),
  });
  return res;
}
