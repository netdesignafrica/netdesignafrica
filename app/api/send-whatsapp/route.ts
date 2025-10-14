import { NextResponse } from 'next/server'

type Body = {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json()

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const whatsappApiUrl = process.env.WHATSAPP_API_URL // e.g., https://graph.facebook.com/v17.0
    const whatsappToken = process.env.WHATSAPP_TOKEN
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_ID // the phone number ID for Cloud API
    const recipientPhone = process.env.WHATSAPP_RECIPIENT_PHONE // number in international format, e.g. 2547XXXXXXXX

    const text = `New contact form submission:%0AName: ${body.name}%0AEmail: ${body.email}%0APhone: ${body.phone || 'N/A'}%0ACompany: ${body.company || 'N/A'}%0AService: ${body.service || 'N/A'}%0AMessage: ${body.message}`

    // If WhatsApp Cloud API is configured, send the message server-side
    if (whatsappApiUrl && whatsappToken && whatsappPhoneId && recipientPhone) {
      const url = `${whatsappApiUrl}/${whatsappPhoneId}/messages`

      const payload = {
        messaging_product: 'whatsapp',
        to: recipientPhone,
        type: 'text',
        text: { body: `New contact form submission:\nName: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone || 'N/A'}\nCompany: ${body.company || 'N/A'}\nService: ${body.service || 'N/A'}\nMessage: ${body.message}` },
      }

      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${whatsappToken}`,
        },
        body: JSON.stringify(payload),
      })

      if (!resp.ok) {
        const text = await resp.text()
        return NextResponse.json({ success: false, error: 'WhatsApp API error', details: text }, { status: 502 })
      }

  return NextResponse.json({ success: true, recipientPhone })
    }

    // Otherwise simulate success (or log the message for developers)
    // In production you should set WHATSAPP_API_URL, WHATSAPP_TOKEN, WHATSAPP_PHONE_ID, and WHATSAPP_RECIPIENT_PHONE
    // Here we just return success so the client can proceed to open WhatsApp with the user's message
  console.log('WhatsApp not configured — simulated send:', text)
  return NextResponse.json({ success: true, simulated: true, recipientPhone: recipientPhone || null })
  } catch (err) {
    console.error('Error in send-whatsapp route', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
