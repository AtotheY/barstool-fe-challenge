import { FEED_API_URL } from 'constants/urls';
import Story from 'interfaces/story';
import { getUrlWithParams } from 'src/helpers/urls';

export const fetchFeed = async (page?: number): Promise<Story[]> => {
  const response = await fetch(getUrlWithParams(FEED_API_URL, { page }));
  if (!response.ok) {
    return [];
  }
  const feed = await response.json();
  return feed;
};
