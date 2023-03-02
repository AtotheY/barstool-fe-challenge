import { isImageUrlValid } from 'constants/urls';
import StoryType from 'interfaces/story';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export default function Story({ story }: { story: StoryType }) {
  const { title, url, thumbnail, author, date } = story;
  const { desktop: desktopSrc } = thumbnail ?? {};
  const { name, avatar: avatarSrc } = author ?? {};

  return (
    <div className="flex p-4 border border-[#eaeaea] mb-4 last:mb-0">
      <div className="relative min-w-[200px] max-h-[150px] aspect-[1.33] cursor-pointer">
        <Link href={url}>
          {desktopSrc && isImageUrlValid(desktopSrc) && (
            <Image src={desktopSrc} layout="fill" alt={title} />
          )}
        </Link>
      </div>
      <div className="ml-3 flex flex-col">
        <div className="flex-1 font-bold text-lg">
          <Link href={url}>{title}</Link>
        </div>
        <div className="flex items-center">
          <div className="relative mr-2 w-[36px] h-[36px] rounded-full overflow-hidden">
            {avatarSrc && isImageUrlValid(avatarSrc) ? (
              <Image src={avatarSrc} layout="fill" alt={name} />
            ) : (
              <div className="w-full h-full border border-[#eaeaea]" />
            )}
          </div>
          <div>
            <div className="text-sm ">{name}</div>
            <div className="text-xs text-gray-500 italic">
              {moment(date).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
