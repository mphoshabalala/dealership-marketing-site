import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";

export default function AboutUs() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="py-24 w-full flex flex-col  bg-heroImage bg-center bg-cover bg-no-repeat font-semibold items-center text-gray-800 px-16">
        <div className="block  border-spacing-4 border-red-400 border-b-4 md:border-b-8 mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-Bebas text-gray-700">
            About Us
          </h1>
        </div>
        <h2 className="text-3xl font-bold">Welcome to Ecowheels Exchange</h2>
        <p>
          At Ecowheels Exchange, we provide a safe space for second hand cars.
          Our mission is to make sure that both the customer and the provider
          have a smooth experience when perfoming a car sale transaction.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p>
          Founded in 2023, Ecowheels Exchange has been been trusted and
          recommended by some of the succesful entepreneus and car enthuziasts.
          From our humble beginnings we managed to work with South African
          independent dealerships, we have grown into a complete alternative
          marketplace and facilitator company.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p>
          At Ecowheels Exchange, we are dedicated to providing a smooth and
          unique experience for both our customers and dealers who works with
          us. We strive to be the best motor administration platform in South
          Africa and abroad.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Why Choose EcowheelsExchange?</h2>
        <p>
          <span className="font-bold">Quality:</span> We are committed to
          delivering high-quality products and services that exceed
          expectations. <br /> <span className="font-bold">Innovation:</span>
          Ecowheels Exchange embraces innovation and is always at the forefront
          of industry trends. <br />{" "}
          <span className="font-bold"> Customer Satisfaction:</span> Our
          customers are at the heart of everything we do. We aim to provide
          excellent customer service and build lasting relationships.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Meet the Team</h2>
        <p>
          [Include brief profiles or photos of key team members. Highlight their
          expertise and roles within the company.]
        </p>
        <br />
        <h2 className="text-3xl font-bold">Our Values</h2>
        <p>
          <span className="font-bold">Integrity:</span>
          We operate with honesty, transparency, and ethical practices in all
          our interactions. <br />{" "}
          <span className="font-bold">Customer Focus:</span>
          Our customers are our priority, and we work tirelessly to meet their
          needs and expectations. Continuous Improvement: We are dedicated to
          ongoing learning and improvement to stay ahead in a rapidly evolving
          car Indusstry in South Africa.
        </p>
        <br />
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p>
          We appreciate your interest in Ecowheels Exchange. If you have any
          questions, feedback, or inquiries, feel free to contact us on the
          numbers specified in the footer section of this page. Thank you for
          choosing Ecowheels Exchange. Ecowheels Exchange Team Team
        </p>
      </div>
      <Footer />
    </>
  );
}
