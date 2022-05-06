import React, { useState } from "react";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const [noOfElement, setnoOfElement] = useState(4);
  const slice = data.cardData.slice(0, noOfElement);
  //slice() 메소드는 시작 부터 끝 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
    console.log(noOfElement);
  };

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {slice.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => loadMore()} className="btn btn-dark d-block w-100">
        Load More
      </button>
    </section>
  );
};

export default Home;
