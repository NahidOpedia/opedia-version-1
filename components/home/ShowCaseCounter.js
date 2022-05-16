import CountUp from "react-countup";

export default function Home() {

  return (
    <>
      <div className="project-counter-area">
        <div className="container">
          <div className="row justify-content-center">
          <div className="pCounterWrap justify-content-center justify-content-md-between">
                <div className="counter-up-wrap mb-3">
                 <CountUp end={133} />
                  <p> Web & Soft </p>
                </div>
                <div className="counter-up-wrap mb-3 ">

                    <CountUp end={118} />
                  <p>Digital Marketing </p>
                </div>
                <div className="counter-up-wrap mb-3">
                    <CountUp end={221} />
                  <p>Motion Graphics </p>
                </div>
                <div className="counter-up-wrap">
                    <CountUp end={53} />
                  <p>Brand Design </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
