import { useParams, Link } from "react-router-dom";
import cars from "../data/cars";

export default function CarDetails() {
  const { carId } = useParams();
  const car = cars.find((c) => c.id === parseInt(carId));

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Car not found</h2>
        <Link to="/cars" className="text-blue-600">Go back to list</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
        <img src={car.image} alt={car.name} className="w-full h-64 object-contain rounded mb-4" />
        <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
        <p className="text-lg text-gray-700 mb-4">Price: ₹{car.price}</p>
        <p className="text-gray-600 mb-4">Transmission: {car.transmission}</p>
        <p className="text-gray-600 mb-4">Mileage: {car.mileage}</p>
        <p className="text-gray-600 mb-4">Fuel Type: {car.fuel}</p>
        <Link to="/cars" className="text-blue-600 hover:underline">← Back to showroom</Link>
      </div>
    </div>
  );
}
