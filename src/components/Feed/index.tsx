import StoryType from 'interfaces/story';
import Story from 'components/Story';

export default function Feed({ feed }: { feed: Array<StoryType> }) {
  return (
    <div className="max-w-xl mx-auto py-4">
      {feed?.map(story => (
        <Story story={story} key={story.id} />
      ))}
    </div>
  );
}
