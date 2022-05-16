import { useEffect } from "react";
import { server } from "../config/index";
import dynamic from 'next/dynamic'

const HeroSlide = dynamic(
  () => import('../components/HeroSlide'),
  { loading: () =>  
  <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div> }
)
// import ExpTeam from "../components/ExpTeam";

// Import View Service Section

const ViewService = dynamic(
  () => import('../components/home/ViewService'),
  { loading: () =>
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)
// Import Showcase Service Section
const ShowCase = dynamic(
  () => import('../components/home/ShowCase'),
  { loading: () =>
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)


// Showcase Counter Section
const ShowCaseCounter = dynamic(
  () => import('../components/home/ShowCaseCounter'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)

// Import Update Section
const Update = dynamic(
  () => import('../components/home/Update'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)


const Specialist = dynamic(
  () => import('../components/home/Specialist'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)

//Import Pricing Section
const Pricing = dynamic(
  () => import('../components/home/Pricing'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)

// Import Testemonial Section

const Testimonial = dynamic(
  () => import('../components/home/Testimonial'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)


const WorkingProcess = dynamic(
  () => import('../components/WorkingProcess'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)

import WhatsappChat from "../components/whatsappChat";

const LogoSlider = dynamic(
  () => import('../components/LogoSlider'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)



import Meta from "../components/Meta";
const ExpTeam = dynamic(() =>
  import('../components/ExpTeam')
)

export default function Home({ portCats,services}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  return (
    <>
    <Meta seo_title='Opedia Technologies - Software Company with Expert Services' description='Opedia technologies limited is a software company offers IT service web apps solutions and a versatile range of digital services for business.'/>
      <HeroSlide />
      <ExpTeam />
      <LogoSlider />
      <ViewService services={services} />
      <ShowCase portCats={portCats} />
      <ShowCaseCounter />
      <Update />
      <WorkingProcess />
      <Specialist />
      <Pricing />
      <Testimonial />
      <WhatsappChat />
    </>
  );
}

export async function getStaticProps() {

  const fres = await fetch(`${server}/api/featured-service`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });


  const res = await fetch(`${server}/api/portfolio/category`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const portCats = await res.json();
  const services = await fres.json();

  return {
    props: {
      portCats,
      services
    },
    revalidate: 10,
  };
}
