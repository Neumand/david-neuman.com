import Navigation from 'components/Navigation/Navigation';
import SocialIcon from 'components/SocialIcon';

import Twitter from 'public/static/twitter.svg';
import LinkedIn from 'public/static/linkedin.svg';
import GitHub from 'public/static/github.svg';
import HackerNews from 'public/static/hacker-news.svg';
import Mail from 'public/static/mail.svg';

export default function Layout({ children, header, subHeader }) {
  return (
    <div>
      <Navigation />
      <main className="m-auto max-w-7xl p-8">
        <section className="mb-12 space-y-2">
          <h1 className="text-6xl font-bold">{header}</h1>
          <h2 className="text-3xl">{subHeader}</h2>
        </section>
        {children}
      </main>
      <footer className="flex justify-between p-8">
        <span>{`David Neuman © ${new Date().getFullYear()}`}</span>
        <div className="flex justify-center space-x-1">
          <SocialIcon url="https://twitter.com/DavidMNeuman">
            <Twitter />
          </SocialIcon>
          <SocialIcon url="https://linkedin.com/in/Neumand">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon url="https://github.com/Neumand">
            <GitHub />
          </SocialIcon>
          <SocialIcon url="https://news.ycombinator.com/user?id=dneuman">
            <HackerNews />
          </SocialIcon>
          <SocialIcon url="mailto:david.m.neuman@gmail.com">
            <Mail />
          </SocialIcon>
        </div>
      </footer>
    </div>
  );
}
