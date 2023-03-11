import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import apiClient from "../../spotify";
import "./Library.scss";
import { useNavigate } from "react-router-dom";


export default function Library() {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      let playlists = response.data?.items;
      setPlaylists(playlists);
      console.log(playlists);
    });
  }, []);
  const navigate = useNavigate();
  const playPlaylist = (id) =>{
    navigate("/playlist", {state: {id: id}})
  }
  return playlists ? (
    <div className="library flex">
      {playlists?.map((playlist) => (
        <div key={playlist.id} className="playlist" onClick={() => playPlaylist(playlist.id)}>
          <div className="playlist-img">
            <img src={playlist?.images[0]?.url} />
          </div>
          <h3 className="playlist-name">{playlist?.name}</h3>
          <h5 className="playlist-trackscount">{playlist?.tracks?.total} Songs</h5>
          <div className="playlist-owner">By {playlist?.owner?.display_name}</div>
        </div>
      ))}
    </div>
  ) : (
    <Loader />
  );
}
