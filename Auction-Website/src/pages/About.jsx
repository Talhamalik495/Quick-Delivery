import { Button } from "antd";
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init({ duration: 700 }); // Optional: Set duration for animations
  }, []);
  return (
    <div className=" w-[100%] flex justify-center  items-center flex-col gap-10 py-10">
      <div className="mt-10">
        <h1 className="font-sans text-4xl text-blue-500">About Me</h1>
      </div>
      <div className="w-full  flex justify-center items-center mx-auto container">
        <p>
          Welcome to Online Shop! Your one-stop destination for everything you
          need. From essentials to exclusive products, we offer a wide range of
          high-quality items across multiple categories. Whether you're
          searching for everyday must-haves or special finds, we've got it all
          under one roof. Enjoy a smooth, hassle-free shopping experience with
          unbeatable prices and deals just for you!"
        </p>
      </div>
      <div className="w-full flex justify-center items-center mx-auto container mt-5 text-blue-500">
        <h1 className="text-3xl">Our Story</h1>
      </div>
      <div className="w-full flex justify-center items-center mx-auto container">
        <p>
          We started with a passion for delivering premium products to your
          doorstep. Today, we are a trusted brand known for quality and service.
          Our mission is to make shopping simple and enjoyable. Thank you for
          being part of our journey; your satisfaction is our top priority!
        </p>
      </div>
      <div className=" w-full flex justify-center items-center gap-5">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-[410px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-5xl text-white mb-4 mx-auto"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
          </svg>
          <h1>Our Misson</h1>
          <p>
            At Online Shop, we deliver a seamless shopping experience with
            diverse all-in items at unbeatable prices.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-[410px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 640 512"
            class="text-5xl text-white mb-4 mx-auto"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path>
          </svg>
          <h1>Our Promise</h1>
          <p>
            At Online Shop, we deliver a seamless shopping experience with
            diverse all-in items at unbeatable prices.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="w-[410px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-5xl text-white mb-4 mx-auto"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
          </svg>
          <h1>Our Value</h1>
          <p>
            At Online Shop, we deliver a seamless shopping experience with
            diverse all-in items at unbeatable prices.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-14">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-3xl text-blue-500">Meet the Teams</h1>
        </div>
        <div className=" w-full flex justify-center items-center gap-5">
          <div
            data-aos="zoom-in-down"
            className="w-[300px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
          >
            <div className="w-20 h-20 bg-white rounded-full"></div>
            <p>Muhammad Talha</p>
            <p>Position</p>
          </div>
          <div
            data-aos="zoom-in-down"
            className="w-[300px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
          >
            <div className="w-20 h-20 bg-white rounded-full"></div>
            <p>Muhammad Owais</p>
            <p>Position</p>
          </div>
          <div
            data-aos="zoom-in-down"
            className="w-[300px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
          >
            <div className="w-20 h-20 bg-white rounded-full"></div>
            <p>Muhammad Sheroz</p>
            <p>Position</p>
          </div>
          <div
            data-aos="zoom-in-down"
            className="w-[300px] h-52 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-5"
          >
            <div className="w-20 h-20 bg-white rounded-full"></div>
            <p>Muhammad Faizan</p>
            <p>Position</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-14">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-3xl text-blue-500">Customer Testimonials</h1>
        </div>
        <div className=" w-full flex justify-center items-center gap-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-[300px] h-36 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-8"
          >
            <p className="flex justify-center items-center">
              Amazing quality! Fast delivery and great customer service!
            </p>
            <div className="flex justify-center items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                class="text-white text-3xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
              </svg>
              <p>Customer 1</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-[300px] h-36 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-7"
          >
            <p className="flex justify-center items-center">
              Excellent product! Quick shipping and very satisfied customer!"
            </p>
            <div className="flex justify-center items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                class="text-white text-3xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
              </svg>
              <p>Customer 2</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-[300px] h-36 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-7"
          >
            <p className="flex justify-center items-center">
              Fantastic product! Prompt delivery and very happy customer!
            </p>
            <div className="flex justify-center items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                class="text-white text-3xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
              </svg>
              <p>Customer 3</p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            className="w-[300px] h-36 rounded-md bg-blue-500 text-white flex justify-center items-center gap-2 flex-col p-8"
          >
            <p className="flex justify-center items-center">
              Great value! Swift delivery and extremely pleased with purchase!
            </p>
            <div className="flex justify-center items-center gap-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                class="text-white text-3xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
              </svg>
              <p>Customer 4</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full h-52 bg-blue-500 px-40 rounded-lg flex justify-center items-center flex-col gap-5 text-white">
          <h1 className="text-2xl">Get Started Shopping!</h1>
          <p>
            Explore our diverse product selection and find exactly what you’re
            looking for. Become a part of our satisfied customer community
            today!
          </p>
          <button className="w-32 h-10 bg-white text-blue-500 rounded-full">
            <Link to={"/"}>Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default About;
