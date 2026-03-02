const Card = ({image, name, desc, link}) => {
    return(
        <div className="card-container">
            <img src={image} alt={name} className="card-image" />
            <h3 className="card-name">{name}</h3>
            <p className="card-description">{desc}</p>
            <a href={link} target="_blank" rel="noreferrer">
                <button className="card-button">Visit</button>
            </a> 
        </div>
    )
}

export default Card; 