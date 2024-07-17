import React from 'react';
import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

const Home = (props) => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-12">
         
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-4 mb-3 mb-md-0 px-5">
          <Leftside />
        </div>
        <div className="col-lg-6 col-md-8 mb-3 mb-md-0">
          <Main />
        </div>
        <div className="col-lg-3 col-md-12">
          <Rightside />
        </div>
      </div>
    </div>
  );
};

export default Home;