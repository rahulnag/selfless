import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faGooglePlus,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div
        className="social-container"
        style={{
          backgroundColor: "rgb(238 249 246)",
          textAlign: "center",
          marginTop: "90px",
        }}
      >
        <p style={{ fontFamily: "Cursive", fontSize: "2rem" }}>
          " 🖋 YOUR DREAM IS OUR DREAM 🌈 "
        </p>
        <div>
          <p>-----------------------</p>
          <p> Our Social Media Handles</p>
          {/* <a
            href="https://avatars.githubusercontent.com/u/21?v=4"
            target="_blank"
          >
            aaaa
            <img src="https://avatars.githubusercontent.com/u/21?v=4" />
          </a> */}
          <a
            href="https://www.facebook.com/Selfless-family-104568584511406/"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919955460028&text=Hello%21%20SelflessFamily%20Hope%20you%20are%20doing%20well. Can%20you%20please%20help%20me ?"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp social"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a
            href="selfless.family1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gmail social"
          >
            <FontAwesomeIcon icon={faGooglePlus} size="2x" />
          </a>
        </div>
        <p>Version 1.0</p>
      </div>
    </>
  );
}

export default Footer;
