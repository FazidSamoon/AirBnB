import logo from './logo.svg';
import './App.css';
import Navbar from './resources/Navbar';
import Hero from './resources/Hero';
import data from './data';

function App() {
  const cards = data.map(items =>{
    return (
      <card 
        key = {items.id}
        {...items}
      />
    )
  }
    
    )
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
      </section>
    </div>
  );
}

export default App;
