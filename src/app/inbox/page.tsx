
import Link from 'next/link';

const emails = [
  { id: '1', subject: 'Hello from Next.js', preview: 'Check out routing features...' },
  { id: '2', subject: 'App Router Tips', preview: 'Did you know about intercepting routes?' },
];

export default function InboxPage() {
  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            <Link href={`/inbox/${email.id}`}>{email.subject}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
