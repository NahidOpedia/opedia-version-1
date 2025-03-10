
import WhatsappChat from "../../components/whatsappChat";
import { useEffect } from "react";
import Meta from "../../components/Meta";
import { server } from "../../config/index";
import serviceImage from "/public/page-image/service.jpg";
import Image from "next/image";
import ThreeDCard from 'react-animated-3d-card'
import dynamic from 'next/dynamic'


const SingleService = dynamic(
  () => import('../../components/SingleService'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  }
)

export default function Services({ categories }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  return (
    <>
      <Meta seo_title="Professional IT Services Ensures Expert Solution" description="To obtain your business goals smoothly within the targeted time period our professional IT services can be a great help. " />
      <WhatsappChat />
      <div className="service-all-area mt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="section-title text-center mb-40">
                <h1>Professional IT services</h1>
                <p style={{ textAlign: 'center' }} >Since its inception, Opedia technologies limited is focused to offer professional IT services to aid business entities in attaining their desired business vision. The range of bespoke software, IT solutions, consultancy, and technical support we offer is designed to aid the pain point of our clients.</p>
              </div>
            </div>
            <div className="col-md-12">
              {
                categories?.map((category,index )=> (
                  <div key={index} className="service-all-wrap mb-40">
                    <div className="row align-items-center">
                      <div className="col-md-5">
                        <div className="service-all-left">
                          <div className="d-none d-lg-block">
                            <ThreeDCard style={{
                              width: '400px',
                              height: '435px',
                              cursor: 'pointer',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundImage: `url(${server}/${category?.image})`,
                            }} />
                          </div>
                          <div className="d-lg-none">
                            <Image
                              src={`${server}/${category?.image}`}
                              alt={category?.category_name}
                              width={400}
                              height={435}
                              objectFit="cover"
                              className="service-f-mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="service-all-right">
                          <div className="section-title">
                            <h2 style={{ color: '#Fff' }}>{category?.category_name}</h2>
                          </div>
                          <SingleService singleCategories={category?.services} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className="service-content">
                <h2>Your achievement is our success</h2>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <Image
                      src={serviceImage}
                      alt="Service"
                      width={400}
                      height={300}
                      objectFit="cover"
                      className="inner-img"
                    />
                  </div>
                  <div className="col-md-8">
                    <p>   Our offered services and solutions cover a range of regions that is spread beyond regional boundaries, as we serve spontaneously locally and globally, outsourcing or offering aid for the local business entity’s IT support. As a service provider company, we measure the perimeter of our success when our clients meet their desired goal and success. </p>  <p> By reducing customized software management complexity, we help you optimize and integrate bespoke software, and results in maximizing return on investment for your business. Our concentration is on leveraging value creation for you.
                      We help to improve your business agility and scalability through digital aid and compatible technologies. By adopting modern digitized platforms we optimize infrastructure, brand value, and required service.</p>
                  </div>
                </div>

                <h2>We approach systematically</h2>

                <p>We tend to identify problems first. We do our ground check to know what our clients want, what their pain point is, and where to put emphasis on. Without finding the pain point we consider the framework will not work out.
                </p>

                <p> Followed by identifying the problem we need to look upon, we analyze what should be the solution and the needful steps that we can work on. Without analyzing several prototype solutions, coming on to a solution may not help later. To avoid any error in the final stage, to make sure the taken remedy is error proven, a proper analysis is mandatory.</p>

                <p> We design our work process based on the project, make our own strategy, and design the work plan accordingly. We tailor project-based strategy process flow to point out the best solution for the client’s business goal and plan. Our dedicated project team players work while putting you in the direct communication protocol as a client to let you know updates and avoid unwanted miscommunication with us.</p>

                <p> We not only take relevant data from our clients for project purposes but also conduct our own research if the project requires it. Conducting market research on clients’ consumers and setting target groups, their behavior, and demands, setting marketing strategies, creating engagement while making an analytical report on them are part of our projects if required.</p>

                <h2>Ethical practice comes first</h2>

                <p>Our local client service strategy is far different than the outsourced service strategy offered. We have our dedicated separate team for outsourcing service purposes, consisting of required technicians, developers, public communicators, and project consultants.</p>

                <p> We are aware of regional differences in terms of clients’ communication, time zone, and localized service pattern. We do not settle down once we deliver with the projects finished, we take the necessary measures if re-correction or further service is needed.
                  In terms of providing service, we believe in integrity when it comes to service quality and stays put with the deadline. For us, the client is the king and quality is the master.</p>

                <h2>Our support system is our core</h2>
                <p> With a team of skilled professionals with adequate certification and proven working expertise, we have served for eastern and western regions for a long period of time. Serving more than hundreds of clients so far, our outsourcing channel has established its global reputation worldwide.</p>

                <p> We have a dedicated IT support team to hear from our client’s demands and to offer adequate aid after hearing from them, or refer to the concerned department as needed within our company.</p>

                <p>  Our service support is offered based on packages and service needs as required. Our support system includes dedicated concern bodies such as customer support executives, managerial support, network support, project assistance support, development, and technical team.</p>

                <p>  We believe in social responsibility as an IT and technological business provider entity, pioneering in developing a socio-economic environment in our local region as well as contributing globally. Our objective is not limited to trading services for business purposes only but also to make a change in the learning environment as an element of our surroundings.</p>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW SERVICE AREA */}
    </>
  );
}






export async function getStaticProps() {
  const res = await fetch(`${server}/api/cat-to-service`);
  const categories = await res.json();
  return {
    props: {
      categories,
    },
    revalidate: 10,
  };
}
