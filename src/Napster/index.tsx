import { Routes, Route, Navigate } from "react-router";
import NapsterSearch from "./search";
import NapsterAlbumDetails from "./album";
import NapsterTrackDetails from "./track";

export default function Napster() {
  return (
    <div className="container-fluid">
      <h1>Napster</h1>
      <Routes>
        <Route path="/" element={<Navigate to="Search" />} />
        <Route path="Search" element={<NapsterSearch />} />
        <Route path="Search/:term" element={<NapsterSearch />} />
        <Route path="Albums/:albumId" element={<NapsterAlbumDetails />} />
        <Route path="Track/:trackId" element={<NapsterTrackDetails />} />
      </Routes>
    </div>
  );
}
