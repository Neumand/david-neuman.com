import Layout from 'layouts/Layout';
import { getAllIssues } from 'lib/revue';

const NewsletterArchive = ({ issue }) => {
  return (
    <Layout>
      <article className="flex flex-col justify-center max-w-2xl mx-auto w-full mt-8 px-8 md:px-0">
      <h1 className="text-3xl font-bold mb-2 text-center md:text-5xl">
        {issue.title}
      </h1>
        <main className="prose md:prose-lg lg:prose-xl dark:prose-dark md:dark:prose-dark lg:dark:prose-dark">
          <div dangerouslySetInnerHTML={{ __html: issue.html }}></div>
        </main>
      </article>
    </Layout>
  );
};

export async function getStaticPaths() {
  const issues = await getAllIssues();
  const paths = issues.map((_, idx) => ({
    params: { id: (idx + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const issues = await getAllIssues();
  const index = context.params.id - 1;
  const issue = issues[index];

  if (!issue) {
    return {
      notFound: true,
    };
  }

  return {
    props: { issue },
    revalidate: 1,
  };
}

export default NewsletterArchive;
