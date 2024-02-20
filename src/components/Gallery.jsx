import ImageCard from "./ImageCard";
import "../styles/Gallery.css";

const Gallery = () => {
  let data = [
    {
      id: 1,
      title: `Randome Title 1`,
      price: 19.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 2,
      title: `Randome Title 2`,
      price: 24.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 3,
      title: `Randome Title 3`,
      price: 29.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 4,
      title: `Randome Title 4`,
      price: 29.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 5,
      title: `Randome Title 5`,
      price: 29.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 6,
      title: `Randome Title 6`,
      price: 24.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 7,
      title: `Randome Title 7`,
      price: 13.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
    {
      id: 8,
      title: `Randome Title 8`,
      price: 26.99,
      url: "https://craftypixels.com/placeholder-image/300",
    },
  ];

  return (
    <div className="galleryContainer">
      {data.map((card) => {
        return <ImageCard key={card.id} card={card} />;
      })}
    </div>
  );
};

export default Gallery;
