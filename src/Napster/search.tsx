import * as client from "./client";
import NapsterAlbums from "./albums";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function NapsterSearch() {
  const { term } = useParams<{ term: string }>();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>([]);
  const navigate = useNavigate();

  const fullTextSearch = async (text: string) => {
    const results = await client.fullTextSearch(text);
    setResults(results);
    navigate(`/Kanbas/Napster/Search/${text}`);
  };
  useEffect(() => {
    if (term) {
      setSearch(term);
      fullTextSearch(term);
    }
  }, [term]);

  return (
    <div>
      <h2>Search</h2>
      <button
        className="btn btn-primary w-25 float-end"
        onClick={() => fullTextSearch(search)}
      >
        Search
      </button>
      <input
        className="form-control w-75"
        type="text"
        placeholder="Search for music, e.g., 'The Beatles'"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {results &&
        results.search &&
        results.search.data &&
        results.search.data.albums &&
        results.search.data.albums.length > 0 && (
          <>
            <h2>Albums</h2>
            <NapsterAlbums albums={results.search.data.albums} />
          </>
        )}
    </div>
  );
}
