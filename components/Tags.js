import Link from 'next/link';
import Pill from './Pill/Pill';

export default function Tags({ tags }) {
  return (
    <div className="flex mt-2 space-x-2">
      {tags.map((tag) => (
        <Pill key={tag.id}>
          <Link href={`/tags/${tag.slug}`}>
            <a>{`${tag.name}`}</a>
          </Link>
        </Pill>
      ))}
    </div>
  );
}
