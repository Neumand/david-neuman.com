import Link from 'next/link';
import Image from 'next/image';

import Tags from './Tags';

export default function Posts({ posts }) {
  return (
    <div className="p-5 my-10 max-w-4xl mx-auto sm:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-8 xl:max-w-6xl">
      {posts.map(({ id, title, excerpt, feature_image, slug, tags }) => (
        <div key={id} className="max-w-2xl mx-auto w-full overflow-hidden bg-white rounded-lg shadow-md m-8 xl:max-h-xl">
          <Image src={feature_image} layout="responsive" width={1920} height={1080} />
          <div className="p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{excerpt}</p>
            <Tags tags={tags} />
          </div>
        </div>
      ))}
    </div>
    // <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
    //   {posts.map(({ id, title, excerpt, feature_image, slug, tags }) => (
    //     <div key={id} className="flex justify-items-center items-center m-8">
    //       <Card className="flex h-48">
    //         <Link href={`/blog/${slug}`}>
    //           <img
    //             className="object-cover w-1/3 cursor-pointer"
    //             src={feature_image}
    //           />
    //         </Link>
    //         <CardBody>
    //           <Link href={`/blog/${slug}`}>
    //             <h2 className="mb-4 font-semibold cursor-pointer">{title}</h2>
    //           </Link>
    //           <p>{excerpt}</p>
    //           {tags.length > 0 && <Tags tags={tags} />}
    //         </CardBody>
    //       </Card>
    //     </div>
    //   ))}
    // </div>
  );
}
