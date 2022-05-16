

import dynamic from 'next/dynamic'

const InnerHead = dynamic(
  () => import('../components/innerHead'),
  { loading: () => <p>Loading...</p> }
)
import Meta from "../components/Meta";
import WhatsappChat from "../components/whatsappChat";
import { server } from '../config';
import contactImage from "/public/page-image/contact.png";
const ContactForm = dynamic(
  () => import('../components/ContactForm'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)
export default function Contact({teams}) {
  return (
    <>
      <Meta seo_title="Contact us – Opedia Technologies Limited " description='Feel free to contact us in case you need any professional IT consultancy, services and digital solutions for business development. '/>
      <WhatsappChat />
      <InnerHead title="Contact Us" img={contactImage} isDynamic={false} />
      <ContactForm/>
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