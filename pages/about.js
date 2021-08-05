import Header from 'components/Header';
import Layout from 'layouts/Layout';

export default function About() {
  return (
    <Layout>
      <Header>
        <h1 className="text-6xl font-bold">About Me</h1>
      </Header>
      <h2 className="text-4xl">
        My name is David Neuman, but most people call me Dave.
      </h2>
      <p>Here's some quick facts about me:</p>
      <ul>
        <li>I'm Canadian, born and raised in Montreal, QC</li>
        <li>
          Decided finance wasn't for me after obtaining a Bachelor's of Commerce
          and passing all three levels of the CFA program (yikes!)
        </li>
        <li>
          Completed Lighthouse Labs' full stack web development bootcamp in
          mid-2019
        </li>
        <li>
          Wrote frequently for a while at 200 Words a Day, then got inspired to
          start a blog
        </li>
        <li>Currently working as a software developer at Stingray</li>
      </ul>
    </Layout>
  );
}
