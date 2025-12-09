import nodemailer from 'nodemailer'

// Créer un transporteur SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail(options: EmailOptions) {
  try {
    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@momomindset.com',
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    })
    console.log('Email sent:', result.messageId)
    return result
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

// Template pour la newsletter
export function getNewsletterTemplate(email: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4AF37 0%, #f5f5f5 100%); padding: 20px; text-align: center; border-radius: 8px; }
          .content { padding: 20px; background-color: #2a2a2a; margin: 20px 0; border-radius: 8px; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Bienvenue à MomoMindset</h1>
          </div>
          <div class="content">
            <h2>Réveille ta force intérieure</h2>
            <p>Merci de vous être abonné à notre newsletter ! Vous recevrez désormais nos contenus exclusifs, motivations quotidiennes et conseils pour votre transformation personnelle.</p>
            <p>Restez connecté et suivez votre évolution avec la communauté MomoMindset.</p>
          </div>
          <div class="footer">
            <p>© 2024 MomoMindset. Tous droits réservés.</p>
            <p><a href="https://moudby62.github.io/momomindset-website/">Visiter le site</a></p>
          </div>
        </div>
      </body>
    </html>
  `
}

// Template pour les messages de contact
export function getContactTemplate(name: string, email: string, subject: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4AF37 0%, #f5f5f5 100%); padding: 20px; text-align: center; border-radius: 8px; }
          .content { padding: 20px; background-color: #2a2a2a; margin: 20px 0; border-radius: 8px; }
          .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nouveau message de contact</h1>
          </div>
          <div class="content">
            <p><strong>De:</strong> ${name} (${email})</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <hr>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <div class="footer">
            <p>© 2024 MomoMindset. Tous droits réservés.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
