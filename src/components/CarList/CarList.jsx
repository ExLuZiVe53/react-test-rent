import CarCard from "../CarCard/CarCard";
import css from "./CarList.module.css";

const CarList = ({ items, isFavorite }) => {
  const showCars = Array.isArray(items) && items.length;
  console.log(showCars);
  return (
    <ul className={css.carList}>
      {showCars &&
        items.map((item) => {
          return (
            <CarCard
              key={`${item.id}_${item.make}`}
              id={item.id}
              year={item.year}
              make={item.make}
              model={item.model}
              type={item.type}
              img={item.img}
              description={item.description}
              fuelConsumption={item.fuelConsumption}
              engineSize={item.engineSize}
              accessories={item.accessories}
              functionalities={item.functionalities}
              rentalPrice={item.rentalPrice}
              rentalCompany={item.rentalCompany}
              address={item.address}
              rentalConditions={item.rentalConditions}
              mileage={item.mileage}
              isFavorite={isFavorite}
            />
          );
        })}
    </ul>
  );
};

export default CarList;
