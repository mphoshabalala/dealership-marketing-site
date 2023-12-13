import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../utilities/ScrollToTop";

export default function TermsAndConditions() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="pt-24 w-full flex flex-col  bg-heroImage bg-center bg-cover bg-no-repeat font-semibold items-center text-gray-800 px-16">
        <div className="block  border-spacing-4 border-red-400 border-b-4 md:border-b-8 mb-4 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-Bebas text-gray-700">
            Our Terms Of Services
          </h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi tempora
          eos adipisci vitae officiis ipsum animi aperiam, repudiandae quisquam,
          dicta recusandae deleniti suscipit enim, quia ex quae qui et
          dignissimos nulla magni molestias quas impedit debitis? Unde
          reiciendis veritatis in, omnis fugiat nisi, corrupti molestias
          laudantium ut expedita accusantium numquam?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          suscipit excepturi quam possimus adipisci amet inventore quas
          molestias ipsam aspernatur ex dolor, ducimus recusandae eligendi
          distinctio dicta quo? Repellat, laborum.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non
          illum obcaecati nesciunt neque maxime optio sunt dolorem similique
          odio, veniam ex, voluptates, beatae quod minus architecto animi cum
          itaque? Odio, illum ad modi facere optio non labore quos cumque!
        </p>
      </div>
      <Footer />
    </>
  );
}
