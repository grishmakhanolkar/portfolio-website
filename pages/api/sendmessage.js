// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const formFields = req.body;
  console.log(formFields);
  // const SHEET_URL = process.env.SHEET_URL;
  console.log(process.env.SHEET_URL);
  fetch(`${process.env.SHEET_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formFields),
  });
  return res;
}
