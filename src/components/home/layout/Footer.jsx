import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillGoogleCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sub_footer section_padding">
        <div className="sub_footer_links">
          <div className="sub_footer_links_div">
            <h4>Business</h4>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Individual</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
          </div>

          <div className="sub_footer_links_div">
            <h4>Partners</h4>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Individual</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
          </div>

          <div className="sub_footer_links_div">
            <h4>Services</h4>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Individual</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
          </div>

          <div className="sub_footer_links_div">
            <h4>Contact Us</h4>
              <p>+919123109389</p>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Individual</p>
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Employee</p>
            </a>
          </div>

          <div className="sub_footer_links_div">
            <h4>Coming Soon On</h4>
            <div className="socialmedia">
              <p>
                <a href="/">
                  <AiFillLinkedin style={{ fontSize: 20 }} />
                </a>
              </p>
              <p>
                <a href="/">
                  <AiFillTwitterCircle style={{ fontSize: 20 }} />
                </a>
              </p>
              <p>
                <a href="/">
                  <AiFillFacebook style={{ fontSize: 20 }} />
                </a>{" "}
              </p>
              <p>
                <a href="/">
                  <AiFillGoogleCircle style={{ fontSize: 20 }} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sub_footer_below">
          <div className="sub_footer_copyright">
            <p>@{new Date().getFullYear()} CodeInn.All right reserved.</p>
          </div>
          <div className="sub_footer_below_links">
            <a href="/">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
