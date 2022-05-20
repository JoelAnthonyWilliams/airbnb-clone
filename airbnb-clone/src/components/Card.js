export default function Card(props) {
    return (
        <div className="card">
            <div className="card_image">
                <span className="card_image-icon">Active</span>
                <img className="card_image-photo" src={`../img/${props.img}`} alt="event shot"></img>
            </div>
            <div class="card_rating">
                <img className="card_rating-star" src='./img/star.png' alt="star"></img>
                <h3 className="card_rating-score">{props.rating}<span>({props.reviewCount}) • {props.location}</span></h3>
            </div>
            <p className="card_title">{props.title}</p>
            <p className="card_pricing"><strong>From £{props.price}</strong> / person</p>
        </div>
    )
}