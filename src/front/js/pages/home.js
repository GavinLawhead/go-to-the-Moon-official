import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://picsum.photos/1000/1000?random=1"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://picsum.photos/1000/1000?random=2"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://picsum.photos/1000/1000?random=3"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cardbox mx-auto">
        <div className="servicecardsright">
          <div className="row">
            <div className="col-sm-8">
              <div className="card border-0">
                <div className="row card-body">
                  <div className="col-sm-6">
                    <h5 className="card-title">Information</h5>
                    <p className="card-text">
                      Some extra info for your welcome page
                    </p>
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
                    <h5 className="card-title">other info</h5>
                    <p className="card-text">description of more information</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
