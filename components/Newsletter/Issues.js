import Link from 'next/link';
import { formatDate } from 'util/formatter';

export default function Issues({ issues }) {
  return issues.map((issue, idx) => (
    <div className="divide-y-2 divide-solid divide-cool-gray-900" key={issue.id}>
      <Link href={`/newsletter/${issues.length - idx}`}>
        <a className="flex flex-col gap-2">
          <h3>{issue.title}</h3>
          <p className="text-gray-700 dark:text-gray-200">
            {formatDate(issue.sent_at)}
          </p>
        </a>
      </Link>
    </div>
  ));
}
