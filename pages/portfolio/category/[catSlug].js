import { useEffect } from "react";
import WhatsappChat from "../../../components/whatsappChat";
import { server } from "../../../config";
import Meta from "../../../components/Meta";
import dynamic from 'next/dynamic'

const PortfolioItems = dynamic(
  () => import('../../../components/PortfolioItems'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  }
)
export default function PortfolioCategtoryDetails({ cats,params }) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  });

  const portsTitle = params?.catSlug.replace(
    /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
    " "
  );

  return (
    <>
      <Meta seo_title={portsTitle} />
      <WhatsappChat />
      <div className="portfolio-area ">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="section-title text-center mt-30">
                <h3>{portsTitle}</h3>
              </div>
            </div>
          </div>
          <div
            className="row wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="1s"
          >
            {cats?.map((cat) => {
              return (
                <PortfolioItems key={cat?.id}  cat={cat}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


export async function getStaticPaths() {
  const res = await fetch(`${server}/api/portfolio/category`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const categories = await res.json();

  const paths = categories.map((category) => {
    return {
      params: {
        catSlug: `${category.category_slug}`,
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
  const res = await fetch(`${server}/api/portfolio/category/${params.catSlug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });

  const cats = await res.json();
  return {
    props: {
      cats,
      params,
    },
    revalidate: 10,
  };
}


