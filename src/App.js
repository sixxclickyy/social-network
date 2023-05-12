import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <Routes>
          <Route path='/content/*'
            element={<Content store={props.store} />} />
          <Route path='/messages/*'
            element={<MessagesContainer store={props.store}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//
export default App;
