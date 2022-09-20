import React, { useContext } from "react";
import { Context } from "../store/appContext";
import image1 from "../../img/2021-09-10-14-24-06-127.jpg";
import image2 from "../../img/2021-09-10-14-24-06-127.jpg";
import image3 from "../../img/2021-10-28-09-35-35-292.jpg";
import image4 from "../../img/Page0001.jpg";
import image5 from "../../img/Page0005.jpg";
import "../../styles/home.css"

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row photos">
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href={image1} data-lightbox="photos">
          <img className="img-fluid zoom" src={image1} />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="src/front/img/Page0001.jpg" data-lightbox="photos">
          <img className="img-fluid" src={image2} />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a
          href="src/front/img/2021-10-28-09-35-35-292.jpg"
          data-lightbox="photos"
        >
          <img className="img-fluid" src={image3} />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a
          href="src/front/img/2021-10-28-09-35-26-387.jpg"
          data-lightbox="photos"
        >
          <img className="img-fluid" src={image4} />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a
          href="src/front/img/2021-09-10-14-24-06-127.jpg"
          data-lightbox="photos"
        >
          <img className="img-fluid" src={image5} />
        </a>
      </div>
      {/* <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-09-10-14-24-51-127.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-09-10-14-24-51-127.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-09-10-14-24-51-127.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-09-10-14-24-51-127.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-09-10-14-24-51-127.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-09-10-14-24-51-127.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-26-387.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-26-387.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-26-387.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-26-387.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-26-387.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-26-387.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-26-387.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-26-387.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-35-292.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-35-292.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-35-292.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-35-292.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-35-292.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-35-292.jpg" />
        </a>
      </div>
      <div className="col-sm-6 col-md-4 col-lg-3 item">
        <a href="images/2021-10-28-09-35-35-292.jpg" data-lightbox="photos">
          <img className="img-fluid" src="images/2021-10-28-09-35-35-292.jpg" />
        </a>
      </div> */}
    </div>
  );
};
