import {
    FaRegEnvelope,
    FaPhoneAlt,
  } from "react-icons/fa";

  import Style from "../styles/singleService.module.css";

export default function ServiceDetails({ service }) {
    return (
      <>
        {service ? (
          <div>
              <div  
              dangerouslySetInnerHTML={{
                __html: `${service?.service_desc}`,
              }}
            className={Style.pera}
          ></div>
          <div className="training-contact">
          <ul className="social-info text-center text-md-start">
              <li><p style={{fontSize: '20px',
                color:'#133344',
                lineHeight: '30px',
                fontWeight: "600" }}>Contact Us at:</p></li>
            <li>
              <a
                className=''
                href="mailto: info@opediatech.com"
              >
                <span className="s-icon">
                  <FaRegEnvelope />
                </span>
                info@opediatech.com
              </a>
            </li>
            <li style={{ marginLeft: "15px" }}>
              <a
                href="tel:+8801978159172"
                className=''
              >
                <span className="s-icon">
                  <FaPhoneAlt />
                </span>
                +8801978159172
              </a>
            </li>
          </ul>
          </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }