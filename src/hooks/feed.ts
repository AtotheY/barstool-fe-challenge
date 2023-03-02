import { fetchFeed } from 'api/feed';
import Story from 'interfaces/story';
import { useState } from 'react';
import { useInterval } from 'hooks/interval';

export default function useFeed(
  initialFeed: Story[]
): [Story[], () => Promise<void>, boolean] {
  const [feed, setFeed] = useState(initialFeed);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Note that there's an edge case where if the polling adds a new story,
  // the call to get the 2nd page will be shifted by 1 story, only getting 24 new stories
  // instead of 25. This can be fixed by tracking the amount of stories added by polling,
  // or if the API provides state information that we can pass back in to do the shifting for us
  const loadMore = async () => {
    setLoading(true);
    const newPosts = await fetchFeed(page + 1);
    if (newPosts) {
      setPage(page + 1);
      setFeed([...feed, ...newPosts]);
    }
    setLoading(false);
  };

  useInterval(feed, setFeed);

  return [feed, loadMore, loading];
}
