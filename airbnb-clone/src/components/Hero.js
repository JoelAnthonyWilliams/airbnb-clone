import hero from '../img/hero.png'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero_image">
                <img src={hero} alt="film shots"></img>
            </div>
            <div className="hero_text">
                <h1 className="hero_text-title">Online Experiences</h1>
                <p className="hero_text-subtitle">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
            
    )
}