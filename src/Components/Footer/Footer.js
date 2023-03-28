import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <div className="footer_left_text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries....
          </p>
        </div>
        <div className="footer_left_list">
          <ul>
            <li>
              <img src="/assets/facebook.png" alt="" />
            </li>
            <li>
              <img src="/assets/twiter.png" alt="" />
            </li>
            <li>
              <img src="/assets/insta.png" alt="" />
            </li>
            <li>
              <img src="/assets/linkdin.png" alt="" />
            </li>
            <li>
              <img src="/assets/picon.png" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_right">
        <ul>
          <li>
            <div className="footer_right_list">
              <h4>ONLINE SHOPPING</h4>
              <ul>
                <li>Men’s T-Shirts</li>
                <li>Women’s Wear</li>
                <li>Winter Collections</li>
                <li>Hooded T-Shirts</li>
                <li>Streetwear Collections</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="footer_right_list">
              <h4>CUSTOMER POLICIES </h4>
              <ul>
                <li>About Us </li>

                <li>Terms & Conditions</li>

                <li>Shipping & Returns Policy</li>
                <li>Cancellation & Refund Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </li>
          <li>
            <div className="footer_right_list">
              <h4>STORE INFORMATION</h4>
              <ul>
                <li>
                  <img src="/assets/location.png" alt="" />
                  <h5>Lorem Ipsum is simply dummy text of the 
                    <h4>printing and typesetting industry.</h4>
                    </h5>
                  
                  
                </li>

                <li>
                  <img src="/assets/phone.png" alt="" />
                  <h5>Call Us: 1234567890</h5>
                </li>

                <li>
                  <img src="/assets/mail.png" alt="" />
                  <h5>Email Us: info@yourmail.com</h5>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
