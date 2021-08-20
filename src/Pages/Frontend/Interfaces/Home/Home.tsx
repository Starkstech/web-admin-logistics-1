/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import { SideBar, Header } from '../../../../Layout';

const Home:FC = ({ children }) => {
  return (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-2 p-0">
          <SideBar/>
        </div>
        <div className="col-10 p-0">
          <div className="">
          <Header/>
          {children}
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
