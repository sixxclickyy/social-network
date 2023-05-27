import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import ContentContainer from './components/Content/ContentContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          {/* <Route path='/profile/*'
            element={<ContentContainer/>}/> */}

          <Route path="/profile" element={<ContentContainer />}>
            <Route path=":userId" element={<ContentContainer />} />
          </Route>

          <Route path='/messages/*'
            element={<MessagesContainer />} />
          <Route path='/friends/*' element={<FriendsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
