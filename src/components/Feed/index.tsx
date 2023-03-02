import StoryT from 'interfaces/story';
import Story from 'components/Story';

export default function Feed({ feed }: { feed: StoryT[] }) {
  return (
    <div className="max-w-xl mx-auto py-4">
      {feed?.map(story => (
        <Story story={story} key={story.id} />
      ))}
      {feed?.length === 0 && <div>No stories found</div>}
    </div>
  );
}
