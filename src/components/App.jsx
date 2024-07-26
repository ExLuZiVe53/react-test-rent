import cars from "../cars.json";
import CarList from "./CarList/CarList";

export default function App() {
  return <CarList items={cars} />;
}
