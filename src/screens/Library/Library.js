import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import apiClient from "../../spotify";
import "./Library.css";

export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      let playlists = response.data?.items;
      setPlaylists(playlists);
      console.log(playlists);
    });
  }, []);
  return playlists ?  (
    <div className="library">
      {playlists?.map((playlist) => (
        <div className="playlists">
          <div className="playlist-card">{playlist?.name}</div>
        </div>
      ))}
    </div>
  ): <Loader />;
}
