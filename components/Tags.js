import Link from 'next/link';

export default function Tags({ tags }) {
  return (
    <div className="flex mt-2 space-x-2">
      {tags.map((tag) => (
        <div
          key={tag.id}
          className="w-max text-xs rounded-full bg-blue-100 px-3 py-1 uppercase font-semibold transition-all transform ease-in-out hover:bg-blue-300"
        >
          <Link href={`/tags/${tag.slug}`}>
            <a>{`${tag.name}`}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
