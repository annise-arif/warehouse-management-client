import React from "react";
import { Card } from "react-bootstrap";
import "./OurWareHouse.css"

const OurWareHouse = () => {
  return (
    <div>
    <div className="container">
      <h1 className="text-info pt-5 my-3">Our Ware House</h1>

      <div className="row mt-3">
        <div className="col-12 col-lg-6 pt-4">
          <img
            className="w-100 img-fluid"
            src="https://i.ibb.co/0jvQj9P/warehouse.jpg"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-6 ps-5">
          <h3 className="text-secondary py-4">Warehouse Management</h3>
          <p className="container-fluid">
            The Warehouse Management System or WMS comes with a number of
            features that are meant to offer assistance with the administration
            of workflow-based internal, inbound and outbound warehouse
            activities. It comes packed with extensive warehouse functionality.
            This includes bin ranking, calculated picks and moves, cross docking
            and cycle counting.
          </p>
          <div className="d-flex">
            <div className="text-start ms-5">
              <h5 className=" text-success">Consultant</h5>
              <p><b>Name:</b> Eng: Alamin Khan</p>
              <img
                className="rounded-circle w-50 ms-2"
                src="https://i.ibb.co/Zzjs8bp/owner.jpg"
                alt=""
              />
             
            </div>
            <div className="text-start ms-5 ">
              <h5 className=" text-success">helper Consultant</h5>
              <p><b>Name:</b> Eng: Arafat Chowdhory</p>
              <img
                className="rounded-circle w-25"
                src="https://i.ibb.co/KmvDRxp/helper.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* another extra section */}
    <Card className="bg-dark text-light mt-4 rounded-0">
        <Card.Img
          className="w-100"
          src="https://i.ibb.co/kKtZdL8/warehouse3.jpg"
          alt="Card image"
        />
        <Card.ImgOverlay className="mt-lg-5">
          <Card.Title className="mt-lg-3 text-info">Our Ware House Introduction </Card.Title>
          <Card.Text className="mt-lg-4 card-text">
            Warehouses play an important role for the companies in Thailand
            automotive industry, which is one of the major sources of country’s
            GDP [1]. This research designs the warehouse layout for a raw
            materials and equipment supplier in an automotive industry. The core
            activity of the case-study company is selling the raw materials to
            the customers who are manufacturers in an automotive industry. Most
            of the raw materials are imported from other countries, while some
            of them are in-house produced. The company classifies products into
            many product categories based on their characteristics components,
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default OurWareHouse;
