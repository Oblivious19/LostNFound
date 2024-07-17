import React, { useState } from 'react';

const Leftside = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-auto">
          <div className="text-center p-3 mb-3 bg-white rounded shadow-sm">
            <div className="border-bottom">
              <div className="p-3">
                <a href="#">
                  <img src={selectedImage || "/images/profile.ico"} alt="User" className="mx-auto d-block rounded-circle" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                </a>
                <span className="font-weight-bold">Welcome, User!</span>

               
                {/* <a href="#" className="d-flex align-items-center p-3 mt-3">
                  <img src="/images/shopping-bag.png" alt="Shopping Bag" style={{ maxWidth: '40px', marginRight: '10px' }} />
                  <strong>My Items</strong>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;