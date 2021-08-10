import Navigation from 'components/Navigation/Navigation';
import SocialIcon from 'components/SocialIcon';

import Twitter from 'public/static/svg/twitter.svg';
import LinkedIn from 'public/static/svg/linkedin.svg';
import GitHub from 'public/static/svg/github.svg';
import HackerNews from 'public/static/svg/hacker-news.svg';
import Mail from 'public/static/svg/mail.svg';

export default function Layout({ children }) {
  return (
    <div className="bg-white transition-all transform ease-linear dark:bg-gray-900 dark:text-gray-100">
      <Navigation />
      {children}
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
