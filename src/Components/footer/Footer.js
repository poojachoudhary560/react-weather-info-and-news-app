import React from "react";
import "./footer.scss";

const Footer = () => (
  <>
    <div className="footer">
      <div style={{ backgroundColor: "#a1a1a1", height: "3px" }}></div>
      <div className="bg-info text-white text-center footer__content">
        <p>
          <img
            className="footer__content--img"
            rel="shortcut icon"
            src={process.env.PUBLIC_URL + "/pclogo1.png"}
            alt="Footer Icon"
          />
          {"  "} <span className="footer__content--madeBy"> Made by</span>{" "}
          <span className="footer__content--creator">Pooja Choudhary</span>
        </p>
      </div>
    </div>
  </>
);

export default Footer;
