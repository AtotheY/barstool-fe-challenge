import { fetchFeed } from 'api/feed';
import Story from 'interfaces/story';
import { useEffect } from 'react';

export const useInterval = (
  feed: Story[],
  setFeed: (newFeed: Story[]) => void
) => {
  const pollingRate = 10000; // every 10 seconds

  useEffect(() => {
    const interval = setInterval(async () => {
      const stories = await fetchFeed();
      if (stories) {
        // check to see if any of the stories are new and add them to the top of the feed if they are
        const newStories = stories.filter(
          story => !feed.find(f => f.id === story.id)
        );
        if (newStories.length > 0) {
          setFeed([...newStories, ...feed]);
        }
      }
    }, pollingRate);
    return () => clearInterval(interval);
  }, [feed, setFeed]);
};
