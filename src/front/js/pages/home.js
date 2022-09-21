import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 h-50"
              src="https://picsum.photos/1000/1000?random=1"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-50"
              src="https://picsum.photos/1000/1000?random=2"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 h-50"
              src="https://picsum.photos/1000/1000?random=3"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="mx-auto">
        <div className="servicecardsright">
          <div className="row">
            <div className="col-sm-8">
              <div className="card border-0">
                <div className="row card-body">
                  <div className="col-sm-6">
                    <h5 className="card-title">Service Name</h5>
                    <p className="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                  <img
                    className="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=12"
                    alt="sans"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servicecardsleft">
          <div className="row">
            <div className="col-sm-8">
              <div className="card border-0">
                <div className="row card-body">
                  <img
                    className="col-sm-6"
                    src="https://picsum.photos/1000/1000?random=13"
                    alt="sans"
                  />
                  <div className="col-sm-6">
                    <h5 className="card-title">Service Name</h5>
                    <p className="card-text">
                      Service description for awesome service traffic
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
