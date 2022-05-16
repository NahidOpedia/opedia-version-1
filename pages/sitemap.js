import React from 'react'
import axios from 'axios'
import { server } from '../config'
import Link from 'next/link'
import Meta from '../components/Meta'

export default function sitemap({categories,trainings}) {

  return (
    <div>
        <Meta seo_title="Sitemap - Opedia Technologies Limited" description="To know all about us from one place visit our HTML Sitemap page. Call now on + 8801978159172" />
    <div className="html-sitemap mt-5 mb-5">
            <div className='container'>
                <div className="row">
                    <div className="section-title text-center" >
                            <h1>SiteMap</h1>
                    </div>
                </div>
        <div className="row justify-content-center mt-5">     
        {categories?.map((singleCategory,index) => (
                        <div
                          key={index}
                          className="col-12 col-xl text-center text-xl-start borderLeft  mb-4 mb-xl-0"
                        >
                          <div>
                            <Link
                              href={`/service/category/${singleCategory?.category_slug}`}
                            >
                              <h2>
                                {singleCategory?.category_name}
                              </h2>
                            </Link>
                            <SingleServiceCompo
                              singleCategory={singleCategory?.services}
                            />
                          </div>
                        </div>
                      ))}
        </div>
        <div className="row">
                    <div className="col-2">
                            <div>
                            <h2>Main</h2>
                        <ul>
                            <li> 
                                <Link href={`/`}>
                                Home
                            </Link>
                            </li>
                            <li> 
                                <Link href={`/about`}>
                                About
                            </Link>
                            </li>
                            <li> 
                                <Link href={`/contact`}>
                                Contact
                            </Link>
                            </li>
                            <li> 
                                <Link href={`/privacy`}>
                                Privacy
                            </Link>
                            </li>
                            <li> 
                                <Link href={`/termsCondition`}>
                                Terms & Condition
                            </Link>
                            </li>
                        </ul>
                            </div>
                </div>
        <div className="col-3">
                <div >
                        <h2>Training</h2>
                          <ul >
                            {trainings?.map((training) => (
                              <li
                                key={training.id}
                              >
                                <Link href={`/training/${training.slug}`}>
                                  <a>
                                    {training.title}
                                  </a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                </div> 
                    </div>
        
    </div>
    </div>
    </div>
  )
}

function SingleServiceCompo({ singleCategory, }) {
    return (
      <ul >
        {
           singleCategory?.map((item) => (
            <li key={item.id} >
              <Link href={`/service/${item.service_slug}`}>
                <a    >{item?.service_title}</a>
              </Link>
            </li>
          ))
          }
      </ul>
    );
  }
export async function getServerSideProps() {

    const res = await fetch(`${server}/api/cat-to-service`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*',
        },
      });
      const categories = await res.json();
   
  const resTraining = await fetch(`${server}/api/course`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'User-Agent': '*',
        },
      });

    const trainings = await resTraining.json();
     return { props:{
        categories,trainings
     }}
  }
  
