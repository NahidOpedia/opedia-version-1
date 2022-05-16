import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
import SectionTitle from "../SectionTitle";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial-area bg-brand">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="section-title">
                  <span className="mini">Testimonial</span>
                  <h2>Our Clients Say</h2>
              </div>
            </div>
          </div>
          <Swiper
            pagination={true}
            navigation={true}
            className="mySwiper wow fadeIn"
          >
            {/* Single Item */}
            <SwiperSlide> 
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/feedback/accessAllAerials.png"
                    alt="category_name"
                    width={77}
                    height={70}
                    objectFit='contain'
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  Their service is great. They offered post-sell service also, I had some issues to fix, and they did it carefully. I would like to recommend them as a professional software company.
                </p>
                <div className="testimonial-author-info text-center">
                  <p>Access All Aerials</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}

            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/feedback/Blum_brandbox.png"
                    alt="category_name"
                    width={77}
                    height={70}
                    objectFit='contain'
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                    We were in search of an apps developer company. Opedia technology rescued me actually. I got my work done within the time period I asked for. 
                </p>
                <div className="testimonial-author-info text-center">
                  <p> Blum Brandbox</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/feedback/cozyBaker.png"
                    alt="category_name"
                    width={77}
                    height={70}
                    objectFit='contain'
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  I had to work on google ads and website ranking. I was completely dumb about the situation. They are professional in looking after these staff. I like the way they kept reporting me from time to time when campaigns were running.
                </p>
                <div className="testimonial-author-info text-center">
                  {/* <h5>Laila Siddiqa</h5> */}
                  <p>Cozy Baker</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                     src="/feedback/HTSolutions.jpg"
                    alt="category_name"
                    width={77}
                    height={70}
                    objectFit='contain'
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                	Opedia technologies limited is a smart company with friendly and supportive attitude. They are very systematic in terms of providing services. 
                </p>
                <div className="testimonial-author-info text-center">
                  <p>HT Solutions</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
            {/* Single Item */}
            <SwiperSlide>
              <div className="testimonial-wrapper text-center">
                <div className="testimonial-img">
                  <Image
                    src="/feedback/JKEventsQLD.png"
                    alt="category_name"
                    width={77}
                    height={70}
                    objectFit='contain'
                  />
                  <FaArrowDown />
                </div>
                <p className="pera">
                  	Good service in economic budget package.  Service-focused, professional and good sense of time management. They offered me consultancy before I took their service that was a definite turning thing for me.
                </p>
                <div className="testimonial-author-info text-center">
                  <p>JK Events QLD</p>
                </div>
              </div>
            </SwiperSlide>
            {/* Single Item */}
          </Swiper>
        </div>
      </div>
    </>
  );
}
