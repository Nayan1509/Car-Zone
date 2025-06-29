import CarCard from "../components/CarCard";
import cars from "../data/cars";

export default function CarList() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Our Showroom</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            name={car.name}
            id={car.id}
            price={car.price}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
}
