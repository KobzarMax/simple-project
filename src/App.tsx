import './App.css'
import { Aside } from './components/Aside'
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Select } from './components/Select'

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
        <Header />
        <div className="content-wrapper">
          <Aside />
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
                <div key={index} className="card">
                  <p>{card.speed}</p>
                  <p>{card.team}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
