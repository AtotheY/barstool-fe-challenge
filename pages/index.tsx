import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from 'components/Feed/index';
import { fetchFeed } from 'api/feed';
import Story from 'interfaces/story';
import useFeed from 'hooks/feed';

export default function Home({ initialFeed }: { initialFeed: Story[] }) {
  const [feed, loadMore, loading] = useFeed(initialFeed);

  const loadingButtonColor = loading ? 'bg-gray-500' : 'bg-red-700';
  const loadingText = loading ? 'Loading....' : 'Load More';

  return (
    <div className="max-w-xl mx-auto py-4">
      <Head>
        <title>Barstool Sports</title>
      </Head>
      <header className="px-4 flex justify-center">
        <Image src="/logo.png" alt="Barstool Sports" width="200" height="64" />
      </header>
      <main>
        <Feed feed={feed} />
        <button
          className={`${loadingButtonColor} w-full p-3 text-white`}
          onClick={loadMore}
          disabled={loading}
        >
          {loadingText}
        </button>
      </main>
      <footer className="flex justify-center items-center w-full py-5 mt-10 border-t border-[#eaeaea]">
        &copy; Barstool Sports
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialFeed = await fetchFeed();
  return {
    props: { initialFeed }
  };
};
