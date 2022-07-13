import Link from 'next/link';
import { toKebabCase } from 'util/kebab-case';
import Pill from './Pill/Pill';

export const Tags = ({ tags }) => {
  return (
    <div className="flex mt-2 space-x-2">
      {tags.map((tag, idx) => {
        const slug = toKebabCase(tag);
        return (
          <Pill key={idx}>
            <Link href={`/tags/${slug}`}>
              <a>{`${tag}`}</a>
            </Link>
          </Pill>
        );
      })}
    </div>
  );
};
