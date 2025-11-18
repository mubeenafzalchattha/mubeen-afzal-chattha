import Card from "./Card";

export default function Contact() {
  return (
    <footer id="contact" className="mt-10">
      <Card>
        <h2 className="section-title">Get in touch</h2>
        <p className="text-sm text-gray-600">I'm open to collaborations, projects and coffee chats in Dubai.</p>
        <div className="mt-3 flex gap-3">
          <a className="btn" href="mailto:you@example.com">
            Email me
          </a>
          <a className="btn ghost" href="#">
            Book a call
          </a>
        </div>
      </Card>
    </footer>
  );
}
