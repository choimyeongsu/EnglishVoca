import DayList from './components/DayList.tsx';
import Header from './components/Header';
import './index';
import Day from './components/Day.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord.tsx';
import CreateDay from './components/CreateDay';
import DeleteDay from './components/DeleteDay';
import LikeWord from './components/LikeWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList/>}/>
          <Route path="/day/:dayParams" element={<Day/>}/>
          <Route path="*" element={<EmptyPage/>}/>
          <Route path="/create_word"  element={<CreateWord/>}/>
          <Route path="/create_day" element={<CreateDay/>}/>
          <Route path="/like_word" element={<LikeWord/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
