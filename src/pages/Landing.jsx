import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to CarZone</h1>
      <p className="text-xl mb-6">Explore premium cars from top brands</p>
      <div className="space-x-4">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded">Register</Link>
      </div>
    </div>
  );
}