import { FaRegHeart } from "react-icons/fa";
import css from "./CarCard.module.css";

const CarCard = (items) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    // description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    // functionalities,
    rentalPrice,
    rentalCompany,
    // address,
    // onOpenModal,
    // rentalConditions,
    // mileage,
    // toogleFavorite,
  } = items;

  const cardAddressCountry = items.address.split(",")[2];

  const cardFunctionalities = items.functionalities[0].split(",")[0];

  // const handleClick = () => {};
  const cardAddressCity = items.address.split(",")[1];
  const cardAccessories = items.accessories[0];

  return (
    <li className={css.cardContainer}>
      <img
        className={css.cardContainer__img}
        src={img}
        alt="car"
        height="268"
      />

      <button className={css.btnHeart}>
        <FaRegHeart className="icon" size={30} />
      </button>

      <h2 className="cardMake">
        {make}&nbsp;
        <span style={{ color: "green" }}>{model},</span>&nbsp;
        {year}
      </h2>
      <span className="cardRentalPrice">{rentalPrice}</span>
      <p className="cardAddress1">{cardAddressCity}</p>
      <p className="cardAddress2">{cardAddressCountry}</p>
      <p className="cardRentalCompany">{rentalCompany}</p>
      <p className="cardAccessories">{cardAccessories}</p>
      <p className="cardType">{type}</p>
      <p className="cardMake">{make}</p>
      <p className="cardId">{id}</p>
      <p className="cardFunctionalities">{cardFunctionalities}</p>
      <button>Learn more</button>
    </li>
  );
};

export default CarCard;
