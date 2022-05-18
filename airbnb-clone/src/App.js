import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {
    return(
        <div className="container">
            <Navbar />
            <Hero />
            <Card
                img="./img/image_1.png"
                rating={(5.0).toFixed(1)}
                reviewCount={20}
                country="Wales"
                title="Life Lessons with Katie Zaferes"
                price={125}
            />
        </div>
    )

}