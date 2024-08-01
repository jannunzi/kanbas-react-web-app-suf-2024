import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import * as client from "./client";

export default function NapsterTrackDetails() {
  const { trackId } = useParams<string>();
  const [track, setTrack] = useState<any>({});
  const findTrack = async (id: string) => {
    const track = await client.getTrackDetails(id);
    setTrack(track);
  };
  useEffect(() => {
    if (trackId) {
      findTrack(trackId);
    }
  }, []);
  return (
    <div>
      <h1>{track.name}</h1>
      <audio controls src={track.previewURL}>
        {track.name}
      </audio>
    </div>
  );
}
