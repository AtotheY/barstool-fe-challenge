export const FEED_API_URL =
  'https://union-staging.barstoolsports.com/v2/stories/latest';

const validImageSources = ['chumley.barstoolsports.com'];

// there's an author avatar that returns `http://image.png` so I'm adding url validation
export const isImageUrlValid = (url: string): boolean => {
  const urlObj = new URL(url);
  return validImageSources.includes(urlObj.hostname);
};
