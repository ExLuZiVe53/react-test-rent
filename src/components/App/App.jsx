import cars from "../../cars.json";
import CarList from "../CarList/CarList";
import css from "../App/App.module.css";

export default function App() {
  return (
    <div className={css.fontManrope}>
      <CarList items={cars} />;
    </div>
  );
}
