import { Badge, Card } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import HomeStyle from "../../styles/Home.module.css";
import dynamic from 'next/dynamic'

const SectionTitle = dynamic(
  () => import('../SectionTitle'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)

import Link from "next/link";

export default function ViewService({services}) {
  return (
    <div className="view-service-section">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12 wow fadeIn"
            data-wow-duration="2s"
          >
            <div className="view-service-section-wrapper">
              <div className="section-title">
                  <span className="mini">Services at a glance</span>
              </div>
              <SectionTitle
                HeadTitle="Software Company at Your Service "
              />
              <p className="pera">
                We As A Software Company Help Businesses To Boost Performance And Work On Initiatives To Enhance Brand Presence On The Market, Develop A Digital Platform That Fits Your Exact Needs In Terms Of Real-Time Solutions, And Define A Clear Roadmap For Improvement.
              </p>
              <SectionTitle description="Our Professional Services Include Web & Software Solutions, E-Commerce Development, User Experience (UI/UX) Design, Digital Marketing, Multimedia & Printing. Using Our Experienced Professionals, We Help Businesses Grow And Prosper." />
              <Link href="/service">
                <a className="btn-two mt-35">Our Services</a>
              </Link>
            </div>
          </div>
          <div
            className="featureservices col-lg-6 mt-5 mt-lg-0  wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div
              className={
                HomeStyle.viewServiceBg + " " + "view-service-right-wrapper"
              }
            >
              <div className="row">
                {services?.map((service, index) => {
                  return (
                    <div
                      className="col-lg-6 col-sm-6 "
                      data-wow-duration="1s"
                      data-wow-delay="1s"
                      key={service.id}
                    >
                      <Card style={{
                        marginTop:
                          index === 1 ? "18.5%" : index === 2 ? "-9%" : "0px",
                        position: "relative",
                      }}>
                        <Card.Body>
                          {index === 0 && <Badge bg="danger">Hot</Badge>}
                          <FaCloud />
                          <Card.Title>{service.service_title}</Card.Title>
                          <Card.Text>
                              <Link
                                href={`/service/${service.service_slug}`}
                              >
                                <a>
                                  Service Details <FaAngleRight />
                                </a>
                              </Link>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
