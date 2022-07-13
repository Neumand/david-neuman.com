import Link from 'next/link';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/solid';

import { formatDate, formatReadingTime } from 'util/formatter';
import { Tags } from './tags.component';

export default function Posts({ posts }) {
  return (
    <div className="px-5 max-w-4xl mx-auto sm:grid sm:grid-cols-2 xl:grid-cols-3 md:gap-8 xl:gap-10 xl:max-w-6xl">
      {posts.map(
        ({
          id,
          title,
          excerpt,
          featureImage,
          slug,
          tags,
          readingTime,
          datePublished,
        }) => (
          <div
            key={id}
            className="mx-auto w-full overflow-hidden rounded-lg m-8 transition-all transform ease-in-out xl:max-h-xl md:hover:shadow-blue md:hover:scale-105 dark:hover:bg-gray-800 md:dark:hover:shadow-none"
          >
            <Link href={`/blog/${slug}`}>
              <a>
                <Image
                  className="cursor-pointer"
                  src={featureImage}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  placeholder="blur"
                  blurDataURL={featureImage}
                  alt="Featured image"
                />

                <div className="px-6 py-3 space-y-2">
                  <h3 className="text-lg font-semibold md:text-2xl">{title}</h3>
                  <div className="flex space-x-2 items-center">
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                      {formatDate(datePublished)}
                    </div>
                    <div className="flex space-x-1 items-center">
                      <ClockIcon className="w-4 h-4 text-gray-700 dark:text-gray-400" />
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        {formatReadingTime(readingTime)}
                      </p>
                    </div>
                  </div>
                  <div>{excerpt}</div>
                </div>
              </a>
            </Link>
            <div className="px-6 py-3">
              <Tags tags={tags} />
            </div>
          </div>
        )
      )}
    </div>
  );
}
