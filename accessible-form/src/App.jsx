import { useState } from "react";

function App() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("All fields are required. Please check your inputs.");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      // Simulate form submission
      console.log("Form submitted successfully!");
    }
  };

  return (
    <main>
      <h1>Contact Form</h1>

      {success ? (
        <section role="status" aria-live="polite" className="success-message">
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#10b981' }}>
            Thank you! Your message has been sent successfully.
          </p>
          <button onClick={() => setSuccess(false)} style={{ display: 'block', margin: '2rem auto 0' }}>
            Send another message
          </button>
        </section>
      ) : (
        <form onSubmit={handleSubmit} noValidate={false}>
          {error && (
            <div 
              role="alert" 
              aria-live="assertive"
            >
              <strong>Error:</strong> {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              id="name" 
              name="name"
              type="text" 
              required 
              placeholder="e.g., John Doe"
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-describedby="email-info"
              placeholder="e.g., john@example.com"
              autoComplete="email"
            />
            <small id="email-info">
              We will never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message"
              rows="4" 
              required
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button type="submit">Submit Message</button>
        </form>
      )}
    </main>
  );
}

export default App;
