import React from 'react'
import { Card } from "react-bootstrap";

import { FaStar } from "react-icons/fa";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default function ClientsFeedBack() {
  return (
    
    <Swiper
    spaceBetween={20}
    slidesPerView={2}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    breakpoints={{
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 1,
      },
    }}
  >
    <SwiperSlide>
      <div className="client-feedback-wrap">
        <Card>
          <Card.Body>
            <div className="client-info-wrap">
              <div className="client-info">
                <Image
                  src="/feedback/accessAllAerials.png"
                  alt="Opediatech"
                  width={60}
                  height={60}
                />
                <div className="client-info-text">
                  <h3>Access All Aerials</h3>
                </div>
              </div>
              <div className="client-review">
                <div className="product-review-stars">
                  <ul className="review">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
            I was struggling with my websites’ ranking on Google. To solve my problem, I was seeking a trustworthy IT partner for quite a long time. Right on time, I discovered Opedia Technologies Limited, and we started our project straight away. I took their SEO service to boost the ranking of my website on Google. It was a totally Game-changing decision for my business. I am very satisfied with their service. It was worth spending my money after Opedia.
            </p>
          </Card.Body>
        </Card>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="client-feedback-wrap">
        <Card>
          <Card.Body>
            <div className="client-info-wrap">
              <div className="client-info">
                <Image
                  src="/feedback/Blum_brandbox.png"
                  alt="Opediatech"
                  width={60}
                  height={60}
                />
                <div className="client-info-text">
                  <h3>Blum Brandbox</h3>
                </div>
              </div>
              <div className="client-review">
                <div className="product-review-stars">
                  <ul className="review">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
            It is an absolute pleasure to get service from Opedia technologies Limited. They have a highly skilled web developer team and friendly staffs. They coordinated with me to develop the website so that it lived up to my vision while hitting my deadline. They spent their time and efforts to fulfill all of my requirements and completed the project within the tight deadline that impressed me most. I highly recommend them.
            </p>
          </Card.Body>
        </Card>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="client-feedback-wrap">
        <Card>
          <Card.Body>
            <div className="client-info-wrap">
              <div className="client-info">
                <Image
                   src="/feedback/cozyBaker.png"
                  alt="Opediatech"
                  className="client-fdback-img"
                  width={60}
                  height={60}
                />
                <div className="client-info-text">
                  <h3>Cozy Baker</h3>
                  {/* <p>WePack Company</p> */}
                </div>
              </div>
              <div className="client-review">
                <div className="product-review-stars">
                  <ul className="review">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
            Great teamwork, great service. I really appreciate their working effort. Their designs are fantastic and on time. 
            </p>
          </Card.Body>
        </Card>
      </div>
    </SwiperSlide>
    <SwiperSlide>
                <div className="client-feedback-wrap">
        <Card>
          <Card.Body>
            <div className="client-info-wrap">
              <div className="client-info">
                <Image
                   src="/feedback/HTSolutions.jpg"
                  alt="Opediatech"
                  className="client-fdback-img"
                  width={60}
                  height={60}
                />
                <div className="client-info-text">
                  <h3>HT Solutions</h3>
             
                </div>
              </div>
              <div className="client-review">
                <div className="product-review-stars">
                  <ul className="review">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
            They entirely changed our brand scenery. We describe the mission and vision of our brand to them and they portrayed our thoughts exactly the way we asked for. They were really welcoming and supportive to us. I would love to take their service again in the future. 
            </p>
          </Card.Body>
        </Card>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="client-feedback-wrap">
        <Card>
          <Card.Body>
            <div className="client-info-wrap">
              <div className="client-info">
                <Image
                  src="/feedback/JKEventsQLD.png"
                  alt="Opediatech"
                  className="client-fdback-img"
                  width={60}
                  height={60}
                />
                <div className="client-info-text">
                  <h3>JK Events QLD</h3>
                </div>
              </div>
              <div className="client-review">
                <div className="product-review-stars">
                  <ul className="review">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
            Are looking for trendy UI and UX design for your website or app? Then take their UI and UX design service. I recently took their service for my website and they provide outstanding outcomes. I am very satisfied with their service.
            </p>
          </Card.Body>
        </Card>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}
