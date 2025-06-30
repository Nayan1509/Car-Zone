import PageBanner from "../components/PageBanner";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <PageBanner title="About Us" backgroundImage="/assets/drive.jpg" />

      {/* About Us Section */}
      <section className="text-center my-12 flex flex-col xl:flex-row gap-5 justify-center">
        <div>
          <p className=" mx-auto text-gray-600 p-2 text-justify">
            Welcome to CarZone, where we fuel your passion for driving with an
            exhilarating lineup of premium cars ready to ignite your senses and
            elevate your driving experience to new heights. At CarZone, we
            understand that driving isn't just about getting from point A to
            point B—it's about the thrill of the journey, the connection between
            man and machine, and the pure joy of the open road. That's why we're
            dedicated to providing car enthusiasts like you with access to the
            finest selection of high-performance vehicles that are meticulously
            maintained and designed to turn heads wherever you go. Whether
            you're a gearhead craving the adrenaline rush of a powerful sports
            car, an aficionado of luxury seeking the refined elegance of a
            prestige vehicle, or simply someone who appreciates the finer things
            in life, CarZone has the perfect ride for every occasion. Rev up
            your engines and let's hit the road!
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 text-start">
            <li>Hassle Free Pick-Up and Drop at your Desired Location</li>
            <li>Advance Booking up to 10 days.</li>
            <li>Wide Range of exotic cars from muscle to luxury</li>
            <li>Clean and serviced cars</li>
          </ul>
        </div>
        <img
          src="/assets/showroom.png"
          alt="Showroom"
          className="mx-auto rounded-lg shadow-lg lg:w-2/4"
        />
      </section>

      {/* Our Members Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Aryan Mehta",
              role: "Founder & CEO",
              img: "/assets/ava-1.jpg",
            },
            {
              name: "Simran Kaur",
              role: "Marketing Lead",
              img: "/assets/ava-2.jpg",
            },
            {
              name: "Ravi Patel",
              role: "Technical Head",
              img: "/assets/ava-3.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { city: "New Delhi", img: "/assets/showroom.png" },
            { city: "Mumbai", img: "/assets/showroom.png" },
            { city: "Bangalore", img: "/assets/showroom.png" },
          ].map((loc, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={loc.img}
                alt={loc.city}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{loc.city}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
