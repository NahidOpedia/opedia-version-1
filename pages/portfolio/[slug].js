

import WhatsappChat from "../../components/whatsappChat";
import { server } from "../../config/index";
import Meta from "../../components/Meta";

import dynamic from 'next/dynamic'
const PortfolioItemDetails = dynamic(
  () => import('../../components/PortfolioItemDetails'),
  { loading: () => 
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  
  }
)

export default function PortfolioDetails({ portfolios }) {
  const portfolio = portfolios?.length ? portfolios[0] : [];
 
  return (
    <>
      <Meta seo_title={portfolio?.portfolio_title} />
      <WhatsappChat />
      <PortfolioItemDetails portfolio={portfolio}/>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/portfolio`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const ports = await res.json();
  const paths = ports.map((port) => {
    return {
      params: {
        slug: `${port.portfolio_slug}`,
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
  const res = await fetch(`${server}/api/portfolio/${params.slug}`,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  
  const portfolios = await res.json();

  return {
    props: {
      portfolios,
    },
    revalidate: 10,
  };
}


