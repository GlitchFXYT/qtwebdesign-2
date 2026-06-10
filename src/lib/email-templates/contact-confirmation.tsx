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
  subject?: string
  message?: string
}

const Email = ({ name, subject, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out — we'll be in touch shortly</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerBar} />
        <Section style={card}>
          <Heading style={h1}>Thanks{name ? `, ${name}` : ''}!</Heading>
          <Text style={lead}>
            We received your message and will get back to you within one business day.
          </Text>

          {subject || message ? <Hr style={hr} /> : null}

          {subject ? (
            <Section style={{ marginBottom: '12px' }}>
              <Text style={fieldLabel}>Subject</Text>
              <Text style={fieldValue}>{subject}</Text>
            </Section>
          ) : null}

          {message ? (
            <>
              <Text style={fieldLabel}>Your message</Text>
              <Text style={messageBox}>{message}</Text>
            </>
          ) : null}

          <Hr style={hr} />
          <Text style={signoff}>— The qtwebdesign team</Text>
        </Section>

        <Text style={footer}>
          qtwebdesign.org · Charlotte, NC
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We received your message',
  displayName: 'Contact form confirmation (to visitor)',
  previewData: {
    name: 'Jane',
    subject: 'Website redesign',
    message: 'Hi! I run a small bakery and would love a new site.',
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
const h1 = { fontSize: '24px', fontWeight: 700, color: '#1a1530', margin: '0 0 8px' }
const lead = { fontSize: '15px', color: '#5e5876', margin: '0 0 8px', lineHeight: '22px' }
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
const signoff = { fontSize: '15px', color: '#1a1530', margin: 0 }
const footer = {
  fontSize: '12px',
  color: '#8a83a3',
  textAlign: 'center' as const,
  margin: '20px 0 0',
}
