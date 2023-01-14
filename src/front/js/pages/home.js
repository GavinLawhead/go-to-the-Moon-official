import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import Star from "../pages/star.png";
import Night from "../pages/night.png";
import Cluster from "../pages/cluster.png";
import Boy4 from "../../img/boy8.jpg";
import { Context } from "../store/appContext";
import left from "../pages/onleft.jpeg";
import leftTwo from "../pages/onleft2.jpeg";
import onright from "../pages/onright.jpeg";
import onright2 from "../pages/onright2.jpeg";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Star} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ marginBottom: "16%" }}
            >
              <h1>Welcome to...</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Boy4} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ marginBottom: "16%" }}
            >
              <h1>Our Brand New Website!</h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Cluster} class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ marginBottom: "16%" }}
            >
              <h1>Where Life Takes Shape In Art!</h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container">
        <div class="imgbox row justify-content-center">
          <div>
            <h1 class="seeinfront">Go to the Moon!</h1>
          </div>
          <div class="col-4">
            <div id="cf">
              <img class="bottom" src={left} />
              <img class="top" src={leftTwo} />
            </div>
          </div>
          <div class="col-4">
            <div id="cf">
              <img class="bottom" src={onright} />
              <img class="top" src={onright2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
