import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order')({
  component: OrderPage,
})

function OrderPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '700px' }}>
        <div className="eyebrow">Custom Orders</div>

        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '16px',
          }}
        >
          Request a Custom Cake
        </h1>

        <p
          style={{
            color: 'var(--text-light)',
            marginBottom: '32px',
          }}
        >
          Tell us about your event and we'll get back to you with pricing,
          availability, and design options.
        </p>

        <form
          style={{
            display: 'grid',
            gap: '16px',
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: '12px' }}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={{ padding: '12px' }}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            style={{ padding: '12px' }}
          />

          <input
            type="date"
            style={{ padding: '12px' }}
          />

          <textarea
            placeholder="Describe the cake you want..."
            rows={6}
            style={{ padding: '12px' }}
          />

          <button
            type="submit"
            className="btn btn--primary"
          >
            Submit Request
          </button>
        </form>

        <div style={{ marginTop: '32px' }}>
          <p>
            <strong>Phone:</strong> (503) 810-9369
          </p>

          <p>
            <strong>Email:</strong> goodcakebakery@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
