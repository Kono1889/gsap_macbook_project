import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find Apple Store or other retailer near you or call
          +233 20 3695211.
        </p>
        <img src="/logo.svg" alt="Apple logo" />

        <hr />

        <div className="links">
          <p>Copyright 2025 Apple Inc. All rights reserved.</p>

          <ul>
            {footerLinks.map(({label, link}) => (
              <li key={label}>
                <a href={link}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
