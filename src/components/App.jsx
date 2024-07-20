import cars from "../cars.json";
export default function App() {
  console.log(cars);
  const cardAddressCity = cars[0].address.split(",")[1];
  const cardAddressCountry = cars[0].address.split(",")[2];

  const cardFunctionalities = cars[0].functionalities[0].split(",")[0];
  console.log(cardFunctionalities);
  return (
    <ul className="cardList">
      <li>
        <img className="cardImg" src={cars[0].img} alt="car" width="" />
        <h2 className="cardMake">
          {cars[0].make}&nbsp;<span>{cars[0].model},</span>&nbsp; {cars[0].year}
        </h2>
        <span className="cardRentalPrice">{cars[0].rentalPrice}</span>
        <p className="cardAddress1">{cardAddressCity}</p>
        <p className="cardAddress2">{cardAddressCountry}</p>
        <p className="cardRentalCompany">{cars[0].rentalCompany}</p>
        <p className="cardRentalCompany0">Premium</p>
        <p className="cardType">{cars[0].type}</p>
        <p className="cardMake">{cars[0].make}</p>
        <p className="cardId">{cars[0].id}</p>
        <p className="cardAccessories">{cardFunctionalities}</p>
        <button>Learn more</button>
      </li>
    </ul>
  );
}
