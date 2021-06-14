import Link from 'next/link';

export default function Tags({ tags }) {
  return (
    <div className="flex mt-2">
      {tags.map((tag) => (
        <Link key={tag.id} href="/blog">
          <a className="pt-2 mr-2">{`#${tag.name}`}</a>
        </Link>
      ))}
    </div>
  );
}
