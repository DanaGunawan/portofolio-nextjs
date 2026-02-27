import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_ENCRYPTION === 'ssl', // true for port 465
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    })

    // Email to YOU (inbox notification)
    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_USERNAME,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f9f8ff;padding:32px;border-radius:16px;border:1px solid #e8e0ff">
          <h2 style="color:#7c3aed;margin-bottom:4px;font-size:20px">📬 New Message from Portfolio</h2>
          <p style="color:#888;font-size:13px;margin-bottom:24px;font-family:monospace">gunawanDev Portfolio Contact Form</p>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8e0ff;color:#555;font-size:13px;width:120px;font-weight:600">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e8e0ff;color:#1a1a2e;font-size:14px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8e0ff;color:#555;font-size:13px;font-weight:600">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e8e0ff;color:#1a1a2e;font-size:14px"><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e8e0ff;color:#555;font-size:13px;font-weight:600">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #e8e0ff;color:#1a1a2e;font-size:14px">${subject}</td>
            </tr>
          </table>
          <div style="margin-top:20px">
            <p style="color:#555;font-size:13px;font-weight:600;margin-bottom:8px">Message</p>
            <div style="background:#fff;border:1px solid #e8e0ff;border-radius:10px;padding:16px;color:#1a1a2e;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</div>
          </div>
          <p style="margin-top:24px;color:#aaa;font-size:11px">Sent from gunawanDev portfolio · danagunawan-portofolio.vercel.app</p>
        </div>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"gunawanDev" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: `Re: ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f9f8ff;padding:32px;border-radius:16px;border:1px solid #e8e0ff">
          <h2 style="color:#7c3aed;margin-bottom:4px;font-size:20px">👋 Thanks for reaching out, ${name}!</h2>
          <p style="color:#555;font-size:14px;line-height:1.7;margin:16px 0">
            I've received your message about "<strong>${subject}</strong>" and will get back to you as soon as possible.
          </p>
          <div style="background:#fff;border:1px solid #e8e0ff;border-radius:10px;padding:16px;color:#666;font-size:13px;line-height:1.6">
            <p style="margin:0;font-weight:600;color:#555;margin-bottom:6px">Your message:</p>
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
          <hr style="border:none;border-top:1px solid #e8e0ff;margin:24px 0"/>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;background:linear-gradient(135deg,#7c3aed,#4f46e5);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px">💻</div>
            <div>
              <p style="margin:0;font-weight:800;color:#1a1a2e">gunawanDev</p>
              <p style="margin:0;color:#7c3aed;font-size:12px">I Dewa Kadek Dana Gunawan · Bali, Indonesia</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API Error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}