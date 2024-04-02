import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome, FaInfo } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60125.25747513949!2d16.390762645742324!3d48.24154530403286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d064b94863089%3A0x22b2156a196fc32e!2sRaffaelgasse%2025%2C%201200%20Wien!5e0!3m2!1sen!2sat!4v1679139837566!5m2!1sen!2sat"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-wrapper-form d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comment"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Send</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                <div className="get-in-touch d-flex flex-column gap-20">
                  <div className="d-flex gap-10 ">
                    <FaHome className="icon" />
                    <p>Raffaelgasse 25 Brigitenau Vienna 1200 Austria</p>
                  </div>
                  <div className="d-flex gap-10 ">
                    <BsFillTelephoneFill className="icon" />
                    <p>(+43)676-926-7706</p>
                  </div>
                  <div className="d-flex gap-10 ">
                    <GrMail className="icon" />
                    <p>maximov@mail.com</p>
                  </div>
                  <div className="d-flex gap-10 ">
                    <FaInfo className="icon" />
                    <p>Monday-Friday 10 Am - 8 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
