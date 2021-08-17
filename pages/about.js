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
      <Header>
        <h1 className="text-4xl font-bold md:text-6xl">About Me</h1>
      </Header>
      <main className="flex flex-col max-w-2xl mx-auto space-y-4 leading-7 p-8">
        <Image
          className="max-w-full"
          placeholder="blur"
          src={theme === 'light' ? LighthouseDay : LighthouseNight}
          alt="Lighthouse"
        />
        <h2 className="text-2xl text-center md:text-4xl">
          Hey there! I'm Dave.
        </h2>
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
        <p>I've got an addictive personality. Thankfully, my addictive</p>
      </main>
    </Layout>
  );
}
