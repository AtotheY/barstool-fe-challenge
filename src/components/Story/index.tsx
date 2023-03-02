import { isImageUrlValid } from 'constants/urls';
import StoryType from 'interfaces/story';
import Image from 'next/image';

export default function Story({ story }: { story: StoryType }) {
  const { title, url, thumbnail, author } = story;
  const { name, avatar: avatarSrc, author_url, id } = author || {};
  const { desktop: desktopSrc } = thumbnail || {};

  return (
    <div className="flex p-4 border-black border">
      <div>
        {desktopSrc && isImageUrlValid(desktopSrc) && (
          <Image src={desktopSrc} width="48" height="24" alt={title} />
        )}
      </div>
      <div>
        {title}
        <div className="flex">
          {avatarSrc && isImageUrlValid(avatarSrc) && (
            <Image src={avatarSrc} width="24" height="24" alt={name} />
          )}
          <p> {name}</p>
        </div>
      </div>
    </div>
  );
}
