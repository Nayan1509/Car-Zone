import { Link } from "react-router-dom";

export default function CarCard({ id, name, price, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">Price: ₹{price}</p>
      <Link
        to={`/cars/${id}`}
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
