import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import Header from 'components/Header';
import Layout from 'layouts/Layout';
import LighthouseDay from 'public/static/images/lighthouse-sunset.png';
import LighthouseNight from 'public/static/images/lighthouse-night.png';

export default function About() {
  const { theme } = useTheme();

  return (
    <Layout>
      <div className="mx-auto max-w-sm mt-4 sm:max-w-md md:mt-8 md:max-w-3xl">
        <Image
          placeholder="blur"
          src={theme === 'light' ? LighthouseDay : LighthouseNight}
          alt="Lighthouse"
        />
      </div>
      <main className="flex flex-col max-w-2xl mx-auto space-y-4 px-8 md:space-y-8">
        <Header>
          <h1>About Me</h1>
        </Header>
        <p>
          I'm a software developer and Lighthouse Labs alumni, where I completed
          a Web Development Bootcamp in 2019. I work at Stingray on the web
          team.
        </p>
        <p>
          I'm a creative at heart, so naturally I like to{' '}
          <a
            className="link"
            target="_blank"
            href="https://austinkleon.com/steal/"
          >
            steal ideas
          </a>
          . In fact, I'm doing that right now for my own About page. It's a
          learned behavior from my time writing music. You can find my old band{' '}
          <a
            className="link"
            target="_blank"
            href="https://open.spotify.com/artist/24gvdVsLGJ4Uwtiq3eSRzi?si=UNgBezCDT0inaAZjcY6XyA&dl_branch=1"
          >
            here
          </a>
          . At the same time, I haven't totally gotten over the fear of putting
          my work out into the world.
        </p>
        <p>
          I feel the most energized when I'm alone or with the most important
          people in my life, so I guess that makes me an introvert. But I'm
          pretty good at making that nonobvious. It's no surprise that I love to
          work out, read mostly self-development and fantasy/sci-fi --- check
          out my{' '}
          <Link href="/books">
            <a className="link">book list</a>
          </Link>{' '}
          for some of my favourites ---
        </p>
        <p>Here are some of the that I'm interesting in:</p>
        <h2>Productivity and Mindfulness</h2>
        <p>
          I love optimizing my time and trying to get more things done. At the
          same time, I'm aware that we live in a distracted world. It's easy to
          get lost in the busyness of modern life. I try to live purposefully
          and in the moment, staying engaged and present with whatever I'm doing
          or working on. I tend to stay off social media and I no longer play
          video games unless it's with friends, since I'm prone to getting
          addicted to quick dopamine hits.
        </p>
        <h2>Writing of All Kinds</h2>
        <h2>Topic #3</h2>
      </main>
    </Layout>
  );
}
