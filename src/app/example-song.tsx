

import Image from "next/image";

import { useEffect, useState } from "react";

interface SongProps {
  data: any;
  mouseX: number;
  mouseY: number;
}

const ExampleSong = ({ data, mouseX, mouseY }: SongProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="https://open.spotify.com/track/5lDlLjV79Wgl2d9LjpMgXd?si=5692778999344b8d"
      target="_blank"
      rel="noreferrer"
      style={{
        transform: `perspective(1000px) rotateY(${mouseX}deg) rotateX(${
          -1 * mouseY
        }deg)`,
      }}
      className="relative hidden w-[600px] space-x-4 rounded-[18px] border-2 border-white/10 bg-black/20 p-3 lg:flex"
    >
      <div className="flex-shrink-0">
        <Image
          src={data.album_art_url!}
          alt={data.song}
          width={96}
          height={96}
          className="aspect-square rounded-md"
        />
      </div>

      <div className="flex w-full flex-col justify-center space-y-1 overflow-hidden">
        <div className="space-y-2">
          <p className="truncate text-2xl font-bold">{data.song}</p>
          <p className="truncate text-xl">{data.artist}</p>
        </div>
        <div className="pr-6">
          <div className="h-3 w-full overflow-hidden rounded-full bg-white/50">
            <div
              className="h-3 rounded-full bg-white/50 transition-all duration-1000 ease-linear will-change-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExampleSong;
