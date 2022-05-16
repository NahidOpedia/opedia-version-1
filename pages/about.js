import { FaPlay } from "react-icons/fa";
import Meta from "../components/Meta";
import { useState, useEffect } from "react";

import dynamic from 'next/dynamic'

const MyVerticallyCentredModal = dynamic(
  () => import('../components/MyVerticallyCentredModal'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
) 

const ClientsFeedBack = dynamic(
  () => import('../components/ClientsFeedBack'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
) 


import WhatsappChat from "../components/whatsappChat";

import Link from "next/link";
import Image from "next/image";
import { server } from "../config";

export default function Abouta({teams}) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Meta seo_title="About Us - Opedia Technologies Limited" description="As a pioneering software company, Opedia technologies ensures premium IT service within an economic budget yet customer-centric service offerings." />
      <WhatsappChat />
      {/* Youtube section */}

      <div className="about-youtube-section-area about-bg">
        <div className="about-youtube-wrap">
          <MyVerticallyCentredModal
            url="https://youtu.be/J-vcFFXM0F4"
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

          <div className="ptflo-button">
            <span onClick={() => setModalShow(true)}>
              <FaPlay />
            </span>
          </div>
        </div>
      </div>
      <div className="about-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6  wow slideInLeft" data-wow-duration="1s">
              <div className=" about great-experience-left-wrap mb-5 mb-lg-0">
                <div className="great-experinec-img">
                  <Image
                    src="/aboutUs/about.png"
                    alt="Opediatech about"
                    width={456}
                    height={565}
                    priority
                  />
                </div>
                <img
                  className="ge-dots d-none d-lg-block"
                  src="./aboutUs/dot_shapes.png"
                  alt="dot shape"
                />
                <img
                  className="ge-reactangle"
                  src="./aboutUs/reactangle.png"
                  alt="reactangle"
                />


                <div className="ge-info">
                  <h2>
                    3 <span>+ Years</span>
                  </h2>
                  <h3>Experience</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-6 wow slideInRight" data-wow-duration="1s">
              <div className="about great-exp-right ">
                <p className="a-title-top">EXCELLENCE IN SOFTWARE AND DIGITAL TECHNOLOGY </p>
                <div className="section-title">
                  <h1 className="title" > About Company</h1>
                  <h2>
                    A Community of Experienced People
                  </h2>
                  <p>
                      Opedia Technologies Ltd. is a growing software and digital service provider. We create value for your business by providing technological and digital solutions through interaction and integration.
                  </p>
                </div>

                <div className="section-title">
                    <h3 className="at">Our Goal</h3>
                    <p> We commit to serve within the IT environment and empower the future with a broad prospect of technological solutions. We guide businesses to strengthen their performance technically and work with initiatives to make a positive impact on customers. We thrive to increase brand presence in the marketplace by developing a digital platform tailoring to your specific need for real-time solutions defining a clear roadmap. Again, implementing digital technological solutions in a range of areas including software, business and system analysis, and network infrastructure enables a business to develop using an industry standard.</p>
                  </div>
               
                
                <div className="section-title">
                    <h3 className="at">Mission:</h3>
                    <p> Offering cutting-edge IT services and software solutions within a fair package and premium standard, proven beneficial for clients, employees and people connected inside and outside of the company. </p>
                  </div>
                  <div className="section-title">
                    <h3 className="at mb-3">Vision:</h3>
                    <span>To contribute and grow as a company within the digitalized and technological advancement.
                       </span>
                       <h3 className="at mt-2">Value statement:</h3>
                      <ul className="bulletBathekeDane">
                        <li>Focus on the commitments we make to our people.  </li>
                        <li>Practice pain point-based problem solving and clarity in all actions we take.  </li>
                        <li>Bold to embrace innovation and social changes toward prosperity. </li>
                        <li> Practice intellectual and knowledge-based growth and initiate innovation.  </li>
                        <li>We value creativity and are optimistic about uniqueness.   </li>
                        <li>	Aim to lead in the path of the IT and digital service industry.  </li>
                      </ul>
                  </div>
                <Link href="/contact">
                  <a className="btn-two mt-5"> Contuct Us</a>

                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CLIENTS FEEDBACK */}
      <div className="about-client-feedback-area mt-140 mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="section-title text-center mb-50">
                <h2>Client’s Feedback</h2>
              </div>
            </div>
          </div>
        <ClientsFeedBack/>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/team`);

  const teams = await res.json();

  return {
    props: {
      teams,
    },
    revalidate: 10,
  };
}
