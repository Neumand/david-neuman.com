import { useTheme } from 'next-themes';
import Image from 'next/image';

import Header from 'components/Header';
import Layout from 'layouts/Layout';
import LighthouseDay from 'public/static/images/lighthouse-sunset.png';
import LighthouseNight from 'public/static/images/lighthouse-night.png';

export default function About() {
  const { theme } = useTheme();

  return (
    <Layout>
      <Header>
        <h1 className="text-6xl font-bold lead">About Me</h1>
      </Header>
      <main className="flex flex-col max-w-4xl mx-auto space-y-4">
        <Image
          className="max-w-full"
          src={theme === 'light' ? LighthouseDay : LighthouseNight}
          alt="Lighthouse"
        />
        <h2 className="text-4xl text-center">Hey there! I'm Dave</h2>
        <p className="text-left">
          I've been a software developer since graduating from Lighthouse Labs'
          Web Development Bootcamp in 2019. I left finance to pursue . While I
          have experience as a full-stack developer, my passion lies in creating
          beautiful user interfaces. I work at Stingray on the web team.
        </p>
        <p className="text-left">
          I believe that teaching is the best way to learn.
        </p>
        <p className="text-left">
          I used to write music in a metalcore band called Amongst Heroes. You
          can find us on Spotify{' '}
          <a
            className="underline"
            target="_blank"
            href="https://open.spotify.com/artist/24gvdVsLGJ4Uwtiq3eSRzi?si=UNgBezCDT0inaAZjcY6XyA&dl_branch=1"
          >
            here
          </a>
          . I'm a big fan of both fiction (fantasy and sci-fi novels) and
          non-fiction. I've
        </p>
      </main>
    </Layout>
  );
}
