import { Link } from "react-router-dom";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Landing() {
  return (
    <div className=" bg-slate-500 text-white flex flex-col">
      <section className="py-16 text-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4">Welcome to CarZone</h1>
        <p className="text-xl mb-6">Explore premium cars from top brands</p>
      </section>

      {/* services section */}
      <section className="py-16 bg-slate-100 text-center">
        <h4 className="text-xl text-gray-800 mb-12">
          See our{" "}
          <span className="text-3xl text-gray-900 font-bold">
            Popular Services
          </span>
        </h4>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <Icon size={30} className="text-yellow-500" />
                <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* testimonials section  */}
      <section className="py-20 bg-slate-200 text-center">
        <h4 className="text-lg text-gray-500">Our clients says</h4>
        <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={30}
            pagination={{ clickable: true, }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 p-6 rounded-xl h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-6 text-left">{t.text}</p>
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h3 className="text-md text-black font-semibold">
                        {t.name}
                      </h3>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
