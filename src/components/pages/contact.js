import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../images/contacto.jpeg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "80vh",
          backgroundPosition: "center",
          
        }}
      />
      <div className="right-column">
        <div className="contact-bullet-points">

          <div className="bullet-point-group">
            <div className="icon">
               <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">555-555-5555</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
               <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">mahabel09@gmail.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon">
               <FontAwesomeIcon icon="map-location" />
            </div>
            <div className="text">Galeana, Chih.</div>
          </div>



        </div>
      </div>
    </div>
  );
}
