import React, { FC } from 'react'
const Home:FC = () => {
  return (<>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0">
        sidebar
        </div>
        <div className="col-10 p-0">
          <div className="home-main  bg-light">
          main
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
