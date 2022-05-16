
// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import { server } from "../../config";
import Image from "next/image";

import dynamic from 'next/dynamic'

const SectionTitle = dynamic(
  () => import('../SectionTitle'),
  { loading: () => <p>Loading...</p> }
)

export default function ShowCase({ portCats }) {
  return (
    <>
      {/* SHOWCASE GALLARY AREA */}
      <div id="portfolio" className="showCase-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
                <div className="section-title">
                      <span className="mini">Check Our Portfolio</span>
                </div>
            
              <div className="section-title">
                  <h2> Our Recent <br/> Projects</h2>
                </div>
            
            </div>
            <div className="col-md-6">
              <SectionTitle description="230+ clients are already growing their businesses. With our quality service, they are able to stand out from the crowd. Let us put your vision into practice." />
            </div>
          </div>
          <div
            className="row mt-30 justify-content-center wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            {portCats?.map((cat) => {
              return (
                cat?.isFeatured == 1 && (
                  <div key={cat.id} className="col-md-5 col-sm-8">
                    <div className="showCase-wrap mb-4 mb-md-0">
                    <Link
                                href={`/portfolio/category/${cat?.category_slug}`}
                              >
                       <div className="s-click">
                          <div className="show-case-features s-img-wrap"  >
                          <Image
                            src={`${server}/${cat.img}`}
                            alt={cat?.category_name}
                            width={500}
                            height={635}
                          />
                        </div>
                        <div className="show-case-info">
                          <div className="s-action">
                          </div>
                          <div className="show-case-text">
                            <h4>
                              <Link
                                href={`/portfolio/category/${cat?.category_slug}`}
                              >
                                <a> {cat?.category_name}</a>
                              </Link>
                            </h4>
                            <p>{cat?.title}</p>
                          </div>
                        </div>
                        </div>
                        </Link>
                    </div>
                  </div>
                )
              );
            })}
            <div className="col-md-7">
              <div className="row justify-content-center">
                {portCats?.map((port) => {
                  return (
                    port?.isFeatured == null && (
                      <div
                        className="col-md-6 col-sm-6 wow fadeIn"
                        data-wow-duration="1s"
                        data-wow-delay="0.5s"
                        key={port?.id}
                      >
                        <Link
                                  href={`/portfolio/category/${port?.category_slug}`}
                                >
                        <div className="showCase-wrap mb-3 s-click">
                          <div className="show-case-child s-img-wrap">
                            <Image
                              src={`${server}/${port?.img}`}
                              alt="category_name"
                              width={400}
                              height={357 }
                            />
                          </div>
                          <div className="show-case-info">
                            <div className="s-action">
                            </div>
                            <div className="show-case-text">
                              <h4>
                                <Link
                                  href={`/portfolio/category/${port?.category_slug}`}
                                >
                                  <a> {port?.category_name}</a>
                                </Link>
                              </h4>
                              <p>{port?.title}</p>
                            </div>
                          </div>
                        </div>
                        </Link>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHOWCASE GALLARY  AREA */}
    </>
  );
}
