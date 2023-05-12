import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Select } from './components/Select';

function App() {

  const cards = [
    {
      speed: 'Speed D-1',
      team: 'x Team'
    },
    {
      speed: 'Speed W-1',
      team: 'x Team'
    },
    {
      speed: 'Speed M-1',
      team: 'x Team'
    },
    {
      speed: 'Speed M-1',
      team: 'x Team'
    },
    {
      speed: 'Speed D-1',
      team: 'x Team'
    },
    {
      speed: 'Speed W-1',
      team: 'x Team'
    },
    {
      speed: 'Speed M-1',
      team: 'x Team'
    },
    {
      speed: 'Speed M-1',
      team: 'x Team'
    },
  ];

  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <div className="content-wrapper">
          <Aside />
          <Routes>
            <Route path='/' element={
              <div className="content">
                <div className="head">
                  <p>Metrics</p>
                  <Search />
                </div>
                <div className="selects">
                  <Select defaultValue={'Order by'} options={['Name', 'Date', 'Default']} />
                  <Select defaultValue={'Platform'} options={['Twitch', 'WSDA', 'Trello']} />
                  <Select defaultValue={'Customer'} options={['Customer', 'Employee', 'Partner']} />
                </div>
                <div className="cards">
                  {cards.map((card, index) => (
                    <a href='#' key={index} className="card">
                      <p>{card.speed}</p>
                      <p>{card.team}</p>
                    </a>
                  ))}
                </div>
              </div>
            } />
            <Route path='/similarity' element={<h1>Similarity</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
