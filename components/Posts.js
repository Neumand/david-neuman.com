import Link from 'next/link';
import Image from 'next/image';

import Tags from './Tags';

export default function Posts({ posts }) {
  return (
    <div className="px-5 max-w-4xl mx-auto sm:grid md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-8 xl:max-w-6xl">
      {posts.map(({ id, title, excerpt, feature_image, slug, tags }) => (
        <div
          key={id}
          className="max-w-2xl mx-auto w-full overflow-hidden bg-white rounded-lg shadow-md m-8 transition-all transform ease-in-out xl:max-h-xl md:hover:scale-105 md:hover:shadow-xl md:active:scale-105 md:active:shadow-xl dark:bg-cool-gray-900"
        >
          <Link href={`/blog/${slug}`}>
            <a>
              <Image
                className="cursor-pointer"
                src={feature_image}
                layout="responsive"
                width={1920}
                height={1080}
              />
              <div className="px-6 py-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm">{excerpt}</p>
              </div>
            </a>
          </Link>
          <div className="px-6 py-3">
            <Tags tags={tags} />
          </div>
        </div>
      ))}
    </div>
  );
}
