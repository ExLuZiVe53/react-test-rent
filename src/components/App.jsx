import cars from "../cars.json";
import { FaRegHeart } from "react-icons/fa";

export default function App() {
  // const cardAddressCountry = cars[0].address.split(",")[2];

  // const cardFunctionalities = cars[0].functionalities[0].split(",")[0];

  const arrCars = Array.from(cars);
  const handleClick = () => {};
  // const cardAddressCity = cars.address.split(",")[1];
  return (
    <ul
      className="cardList"
      style={{
        margin: 8,
        padding: "12px 16px",
        borderRadius: 4,
        // backgroundColor: "gray",
        color: "#002c80",
        listStyle: "none",
        display: "grid",
        flexDirection: "column",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {arrCars.length &&
        arrCars.map((item) => {
          return (
            <li
              style={{
                margin: 10,
                padding: "15px 18px",
                border: "1px solid black",
                borderRadius: "10px",
                width: "auto",
              }}
              key={`${item.id}_${item.make}`}
            >
              <img
                className="cardImg"
                src={item.img}
                alt="car"
                width="400"
                style={{ objectFit: "cover" }}
              />

              <button className="btn-heart">
                <FaRegHeart className="icon" size={30} onClick={handleClick} />
              </button>

              <h2 className="cardMake">
                {item.make}&nbsp;
                <span style={{ color: "green" }}>{item.model},</span>&nbsp;
                {item.year}
              </h2>
              <span className="cardRentalPrice">{item.rentalPrice}</span>
              <p className="cardAddress1">cardAddressCity</p>
              <p className="cardAddress2">cardAddressCountry</p>
              <p className="cardRentalCompany">{item.rentalCompany}</p>
              <p className="cardRentalCompany0">Premium</p>
              <p className="cardType">{item.type}</p>
              <p className="cardMake">{item.make}</p>
              <p className="cardId">{item.id}</p>
              <p className="cardAccessories">cardFunctionalities</p>
              <button>Learn more</button>
            </li>
          );
        })}
    </ul>
  );
}
