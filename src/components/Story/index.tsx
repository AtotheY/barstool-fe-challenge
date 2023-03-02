import StoryType from 'interfaces/story';

export default function Story({ story }: { story: StoryType }) {
  const { id, title, url, thumbnail, author } = story;
  return <div>{title}</div>;
}
