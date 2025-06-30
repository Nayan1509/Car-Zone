import CarCard from "../components/CarCard";
import cars from "../data/cars";
import PageBanner from "../components/PageBanner";

export default function CarList() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
        <PageBanner
        title="Explore Our Showroom"
        backgroundImage="/assets/drive.jpg"
      />
      
      <div className=" mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
