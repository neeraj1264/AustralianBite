import { Link } from 'react-router-dom';

const AboutUs = () => {

  return (
    <section className="container mx-auto px-6 py-12 lg:py-16 bg-gray-900 text-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src="/about.png"
            alt="Delicious Food"
            className="w-full h-auto rounded-2xl shadow-lg"
            style={{width: "100%"}}
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            About <span className="text-red-400">Our Food Service</span>
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Welcome to our online food ordering platform! We bring you the best
            flavors, fresh ingredients, and fast delivery. Whether you're
            craving a quick bite or a full meal, we ensure a seamless
            experience, from browsing to checkout.
          </p>
          <p className="mt-4 text-gray-300 text-lg">
            Our mission is to deliver delicious meals right to your doorstep,
            maintaining top-notch hygiene and taste. Join thousands of happy
            customers who trust us for their daily meals!
          </p>

           {/* Button */}
     <Link
            to="/menu"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 transition duration-300"
          >
            View Our Menu
          </Link>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
