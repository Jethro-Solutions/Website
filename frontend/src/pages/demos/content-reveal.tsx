import { NextPage } from 'next';
import Head from 'next/head';
import ContentRevealDemo from '@/components/demos/ContentRevealDemo';

const ContentRevealPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Content Reveal Animations | Jethro Solutions</title>
        <meta name="description" content="Demonstration of various content reveal animations for sections" />
      </Head>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-serif font-bold text-center mb-8">
            Content Reveal Animations
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-16 opacity-80">
            Scroll down to see various reveal animations that can be applied to content sections.
            These animations help create dynamic and engaging user experiences.
          </p>
        </div>

        <ContentRevealDemo />
      </main>
    </>
  );
};

export default ContentRevealPage; 