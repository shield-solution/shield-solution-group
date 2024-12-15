import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, budget } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL_USER,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Quote Request',
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Budget: ${budget}
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
