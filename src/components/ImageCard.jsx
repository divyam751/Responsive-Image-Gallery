import "../styles/ImageCard.css";
const ImageCard = ({ card }) => {
  return (
    <div className="ImageCardContainer">
      <div className="cardImage">
        <img src={card.url} alt="" />
      </div>
      <div className="ImageInformation">
        <h3>{card.title}</h3>
        <p>$ {card.price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
