import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import './Playlist.scss';
import { usePalette } from 'react-palette'

export default function Playlist() {
  const [playlistImage, setPlaylistImage] = useState('')
    const location = useLocation();
    useEffect(()=>{
        apiClient.get(`playlists/${location.state?.id}/tracks`).then((res) =>{
            console.log(res.data);
        })
    }, [location.state]);
    const { data, loading, error } = usePalette(location.state?.img)
  return (
    <div className='player'>
        <div className='player-banner flex' style={{ background: `linear-gradient(177deg, ${data.vibrant} 0%, rgba(0,0,0,0.5) 100%)`
 }}>
          <div className='banner-img'>
          <img src={location.state?.img} />
          </div>
          <div className='banner-info'></div>
        </div>
        
    </div>
  )
}
