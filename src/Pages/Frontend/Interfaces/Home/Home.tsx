import React, { FC } from 'react'
import { SideBar, Header } from '../../../../Layout';

const Home:FC = () => {
  return (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0">
          <SideBar></SideBar>
        </div>
        <div className="col-10 p-0">
          <div className="home-main  bg-light">
          <Header></Header>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
