import { Spinner } from "react-bootstrap";
import Link from "next/link";


export default function SingleService({ singleCategories }) {

    return (
      <>
        {
          singleCategories?.length > 0 ?
            <div>
              <div className="serviceItems-featured">
                <ul>
                  <div className="row">
                    {
                      singleCategories?.map((item, index) => (
                        item?.isFeatured == 1 && (
                          index % 2 == 0 ? <div key={item?.id} className="col-md-6">
                            <li>
                              <Link href={`/service/${item?.service_slug}`}>
                                <a >{item?.service_title}</a>
                              </Link>
  
                            </li>
                          </div> : <div key={item?.id} className="col-md-6">
                            <li >
                              <Link href={`/service/${item?.service_slug}`}>
                                <a >{item?.service_title}</a>
                              </Link>
                            </li>
                          </div>
                        )
                      ))
                    }
                  </div>
                </ul>
              </div>
  
              <div className="serviceItems-nonfeatured">
                <div className="row">
                  <div className="col-md-12">
                    <ul>
                      <div className="row">
                        {
                          singleCategories?.map((item, index) => (
                            item.isFeatured == 0 && (
                              index % 2 == 0 ? <div key={item?.id} className="col-md-6">
                                <li>
                                  <Link href={`/service/${item?.service_slug}`}>
                                    <a >{item?.service_title}</a>
                                  </Link>
  
                                </li>
                              </div> : <div key={item.id} className="col-md-6">
                                <li >
                                  <Link href={`/service/${item?.service_slug}`}>
                                    <a >{item?.service_title}</a>
                                  </Link>
                                </li>
                              </div>
                            )
                          ))
                        }
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div> : <div className="  d-flex justify-content-center align-items-center pt-50">
              <Spinner animation="border" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </Spinner>
            </div>
        }
      </>
    );
  }