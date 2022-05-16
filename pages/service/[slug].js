// import React from "react";
import Style from "../../styles/singleService.module.css";
import WhatsappChat from "../../components/whatsappChat";
import Image from "next/image";
import { server } from "../../config";
import Meta from "../../components/Meta";
import Link from "next/link";

import dynamic from 'next/dynamic'

const ServiceDetails = dynamic(
  () => import('../../components/ServiceDetails'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  }
)

function SinglePage({services,relatedServices}) {
  const alter = services?.service_slug?.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    " "
  );
  
  return (
    <div className="container my-5 py-5">
      <WhatsappChat />
      <Meta seo_title={services?.seo_title} description={services?.seo_description} />
      <div className={"row"}>
        <div className="col-lg-8  col-sm-12 col-xs-12">
        {<h2 className={Style.title}>{services?.service_title}</h2>}
          <div className="">
            {services?.featured_img && (
              <Image
                src={`${server}/${services?.featured_img}`}
                alt={alter}
                width={750}
                height={450}
              />
            )}
              <div className="mt-30">
              <ServiceDetails
               service={services}
            />
              </div>
          </div>
        </div>
        <div className={"col-lg-4  col-sm-12 col-xs-12 px-5 mt-4 mt-lg-0"}>
          <div className="sidebarSingle">
            <h2 className={Style.title}>Related Service </h2>
            <div className={Style.service}>
              <ul>
                { relatedServices && relatedServices?.map((item) => (
                    <li key={item.id}>
                      <Link href={`/service/${item?.service_slug}`}>
                        <a className="Link"> {item?.service_title} </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;


   

// export async function getServerSideProps({params: {slug}}) {
//     const res = await fetch(`${server}/api/service/${slug}`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'User-Agent': '*',
//     },
//   });
//   const services = await res.json();

//   const relRes =  await fetch(`${server}/api/related-service/${slug}`,{
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'User-Agent': '*',
//     },
//   }); 
//   const relatedServices = await relRes.json();
//   return { props: { services,relatedServices } }
// }


export async function getStaticPaths() {

  const resp = await fetch(`${server}/api/service`);

  const services = await resp.json();
  const paths = services.map((service) => {
    return {
      params: {
        slug: `${service.service_slug}`,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}


export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`${server}/api/service/${params.slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });

 const services = await res.json();

const relRes =  await fetch(`${server}/api/related-service/${params.slug}`,{
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'User-Agent': '*',
  },
}); 

  const relatedServices = await relRes.json();

  return {
    props: {
      services,
      relatedServices,
  
    },
    revalidate: 10,
  };
}

