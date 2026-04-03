const RECIPIENTS = ['zaynixcs@gmail.com', 'VKP.ALLIANZ@GMAIL.COM'];

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildEmailHtml = ({ name, email, company, message }) => `
  <div style="margin:0;padding:32px;background:#111111;font-family:Arial,sans-serif;color:#1a1a1a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:720px;margin:0 auto;background:#d4a91f;border-collapse:collapse;">
      <tr>
        <td style="padding:32px 36px 20px 36px;">
          <div style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#3a2b00;margin-bottom:12px;">Alliance Group</div>
          <h1 style="margin:0;font-size:30px;line-height:1.2;color:#111111;">New Request a Quote submission</h1>
          <p style="margin:12px 0 0 0;font-size:16px;line-height:1.6;color:#3b320d;">
            A new lead has been submitted through the website contact form.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0 36px 36px 36px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#171717;border-collapse:collapse;">
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 16px 0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#bfa76a;">Contact Details</p>
                <p style="margin:0 0 10px 0;font-size:16px;line-height:1.6;color:#ffffff;"><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p style="margin:0 0 10px 0;font-size:16px;line-height:1.6;color:#ffffff;"><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p style="margin:0 0 10px 0;font-size:16px;line-height:1.6;color:#ffffff;"><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
                <p style="margin:20px 0 8px 0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#bfa76a;">Request</p>
                <div style="font-size:16px;line-height:1.7;color:#ffffff;white-space:pre-wrap;">${escapeHtml(message)}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'RESEND_API_KEY is not configured.' });
  }

  if (!process.env.CONTACT_FROM_EMAIL) {
    return res.status(500).json({ error: 'CONTACT_FROM_EMAIL is not configured.' });
  }

  const subject = `Alliance Group quote request from ${name}`;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: RECIPIENTS,
      reply_to: email,
      subject,
      html: buildEmailHtml({ name, email, company, message }),
      text: [
        'New Request a Quote submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        '',
        'Request:',
        message,
      ].join('\n'),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return res.status(500).json({ error: `Email provider error: ${errorText}` });
  }

  return res.status(200).json({ ok: true });
}
