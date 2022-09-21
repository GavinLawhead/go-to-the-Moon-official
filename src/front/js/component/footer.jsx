import React, { Component } from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="text-center text-lg-start text-black ">
    <hr></hr>
    <section className="neatestfooter">
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Go to the MOON</h5>
          <p>In your Creative Independence, shoot for the stars!</p>
        </div>
        <div className="linksection col-lg-2 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact Us</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-black">
                Another link
              </a>
            </li>
            <li>
              <a href="#!" className="text-black">
                Email
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://www.instagram.com/gotothemoonronnie/?hl=en"
          target="_blank"
        >
          <i class="fab fa-instagram fa-4x"></i>
        </a>
      </div>
    </section>

    <hr />
  </footer>
);
