import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from "react";
import { setClientToken } from './spotify';
import Login from './screens/auth/Login';
import Library from './screens/Library/Library';
import Playlist from './screens/Playlist/Playlist';
function App() {
  const [token, setToken] = useState("");
  useEffect(()=>{
    const token = localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = ""
    if(!token && hash){
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, [])
  return token ? (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <div className='screen-container'>
        <Routes>
          <Route path='/' element/>
          <Route path='/search' element/>
          <Route path='/fav' element/>
          <Route path='/playlist' element={<Playlist />}/>
          <Route path='/fav' element/>
          <Route path='/library' element={<Library />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  ): (
    <div className='App'>

      <Login />
    </div>
  );
}

export default App;
