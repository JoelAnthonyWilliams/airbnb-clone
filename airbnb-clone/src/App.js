import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import eventData from './data'

export default function App() {
    const cards = eventData.map(event => {
        return (
            <Card
                key={event.id}
                img={event.coverImg}
                rating={event.stats.rating}
                reviewCount={event.stats.reviewCount}
                location={event.location}
                title={event.title}
                price={event.price}
            />
        )
    })
    return(
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards">
                {cards}
            </section>
        </div>
    )

}