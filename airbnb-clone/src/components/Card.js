import image_1 from '../img/image_1.png'
import star from '../img/star.png'

export default function Card() {
    return (
        <div className="card">
            <div className="card_image">
                <span className="card_image-icon">SOLD OUT</span>
                <img className="card_image-photo" src={image_1} alt="event shot"></img>
            </div>
            <div class="card_rating">
                <img className="card_rating-star" src={star} alt="star"></img>
                <h3 className="card_rating-score">5.0<span>(6)-USA</span></h3>
            </div>
            <p className="card_title">Life Lessons with Katie Zaferes</p>
            <p className="card_pricing"><strong>From £136</strong> / person</p>
        </div>
    )
}