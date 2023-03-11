import React, { useState } from 'react';
import './Sidebar.scss';
import SidebarButton from './SidebarButton/SidebarButton';
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';
import {MdLibraryMusic, MdOutlineFavoriteBorder, MdPlaylistPlay} from 'react-icons/md';
import {FiMoreVertical} from 'react-icons/fi';
import apiClient from '../../spotify';
export default function Sidebar() {
  const [image, setImage] = useState('https://img.icons8.com/doodle/512/isaac-newton.png');
  const [name, setName] = useState('Isak Nuton');
  const [ShowBtns, setShowBtns] = useState(false);
  apiClient.get("me").then(response =>{
     setImage(response.data?.images[0].url)
     setName(response.data?.display_name);
    });

    const signOut = () =>{
      localStorage.removeItem('token');
      window.location.reload();
    }
  return (
    <div className='sidebar-container flex'>
      <img className='logo-image' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' />
        <div className='sidebar-buttons flex'>
            <SidebarButton title="Home" to="/" icon={<AiOutlineHome />} />
            <SidebarButton title="Search" to="/search" icon={<FaSearch />} />
            <SidebarButton title="Favourites" to="/fav" icon={<MdOutlineFavoriteBorder />} />
            <SidebarButton title="Playlist" to="/playlist" icon={<MdPlaylistPlay />} />
            <SidebarButton title="Library" to="/library" icon={<MdLibraryMusic />} />
        </div>
        <div className='account flex'>
          <div className='account-img'>
            <img src={image} />
          </div>
          <div className='account-name'>{name}</div>
          <div className='account-btn' onClick={() => setShowBtns(!ShowBtns)}>{<FiMoreVertical />}</div>
          {ShowBtns === true ?  (
                      <div className='account-btns'>
                      <button className='signout-btn' onClick={()=> signOut()}>Sign out</button>
                    </div>
          ): ''}
        </div>
    </div>
  )
}
