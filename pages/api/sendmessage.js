import {google} from "googleapis"

export default async function handler(req, res) {
  const formFields = req.body;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      "type": process.env.TYPE,
      "project_id": process.env.PROJECT_ID,
      "private_key_id": process.env.PRIVATE_KEY_ID,
      "private_key": process.env.PRIVATE_KEY.split(String.raw`\n`).join('\n'),
      "client_email": process.env.CLIENT_EMAIL,
      "client_id": process.env.CLIENT_ID,
      "auth_uri": process.env.AUTH_URI,
      "token_uri": process.env.TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER,
      "client_x509_cert_url": process.env.CLIENT_URL,
      "universe_domain": process.env.UNIVERSE_DOMAIN
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

const sheets = google.sheets({
  auth,
  version: 'v4',
});

const response = await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.SPREADSHEET_ID,
  range: 'feedBack',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [[formFields.userName, formFields.email, formFields.message]],
  },
});
res.status(201).json({response, result: "Feedback posted to spreadsheet!"})

  // try {
  //   const response = await fetch(`${process.env.SHEET_URL}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formFields),
  //   });
  //   res.status(200).json({ response });
  // } catch (error) {
  //   res.status(500).json({ error: 'Failed to send data' });
  // }
}
