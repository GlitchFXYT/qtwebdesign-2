import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  phone?: string
  subject?: string
  preferredDate?: string
  message?: string
}

const Email = ({
  name = 'A visitor',
  email = 'unknown@unknown.com',
  phone,
  subject,
  preferredDate,
  message = '(no message provided)',
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerBar} />
        <Section style={card}>
          <Heading style={h1}>New contact submission</Heading>
          <Text style={lead}>
            Someone just reached out through the qtwebdesign.org contact form.
          </Text>

          <Hr style={hr} />

          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          {phone ? <Row label="Phone" value={phone} /> : null}
          {subject ? <Row label="Subject" value={subject} /> : null}
          {preferredDate ? <Row label="Preferred date" value={preferredDate} /> : null}

          <Hr style={hr} />

          <Text style={fieldLabel}>Message</Text>
          <Text style={messageBox}>{message}</Text>
        </Section>

        <Text style={footer}>
          Sent automatically by qtwebdesign.org
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value: string }) => (
  <Section style={{ marginBottom: '12px' }}>
    <Text style={fieldLabel}>{label}</Text>
    <Text style={fieldValue}>{value}</Text>
  </Section>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New contact form submission from ${data.name || 'a visitor'}`,
  displayName: 'Contact form notification (to site owner)',
  to: 'qtwebsitedesign@gmail.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '(555) 123-4567',
    subject: 'Website redesign',
    preferredDate: 'June 20, 2026',
    message: 'Hi! I run a small bakery and would love a new site. Can we chat next week?',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
}
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 16px' }
const headerBar = {
  height: '6px',
  borderRadius: '6px',
  background: 'linear-gradient(90deg, #2A7BE5 0%, #6E4AE5 50%, #B043E5 100%)',
  marginBottom: '24px',
}
const card = {
  border: '1px solid #e9e7f1',
  borderRadius: '16px',
  padding: '28px',
  backgroundColor: '#ffffff',
}
const h1 = { fontSize: '22px', fontWeight: 700, color: '#1a1530', margin: '0 0 8px' }
const lead = { fontSize: '14px', color: '#5e5876', margin: '0 0 8px', lineHeight: '20px' }
const hr = { border: 'none', borderTop: '1px solid #e9e7f1', margin: '20px 0' }
const fieldLabel = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  fontWeight: 600,
  color: '#8a83a3',
  margin: '0 0 4px',
}
const fieldValue = { fontSize: '15px', color: '#1a1530', margin: 0, fontWeight: 600 }
const messageBox = {
  fontSize: '15px',
  color: '#1a1530',
  lineHeight: '22px',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f7f5fb',
  borderRadius: '10px',
  padding: '14px 16px',
  margin: '4px 0 0',
}
const footer = {
  fontSize: '12px',
  color: '#8a83a3',
  textAlign: 'center' as const,
  margin: '20px 0 0',
}
