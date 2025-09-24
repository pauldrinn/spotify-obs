"use client";



import Song from "@/app/[discord_id]/song";
import TrackView from "@/components/track-view";

export default function Page({ params }: { params: { discord_id: string } }) {
  return (
    <>
      <TrackView path="/:id" />
      <Song discord_id={params.discord_id} />
    </>
  );
}
