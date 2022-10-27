import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
//import play from './images/play.png'
import data from "./data"




export default function App() {
  const cards = data.map(item => {
  return (
    //<div className="App">
      
     // <Nav />
     //  <Hero />
      
      <Card
       key={item.id}
       item={item}
      
      />
      
      
    
  ) } )

  return (
    <div>
      <Nav />
      <Hero />
     <section className='card-lists'>
      {cards}
      </section>
    </div>
  )
}


