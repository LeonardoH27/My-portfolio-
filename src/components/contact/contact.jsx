import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Svgcontact from "../../assets/svg/svgcontact";

const contactData = {
  title: "Contact me",
  subtitile: "Don't hesitate to talk to me",
  contacttitle: "Talk to me",
  email: "leonardohorta2705@gmail.com",
  numero: "962133806",
  namecontact1: "Email",
  namecontact2: "Whatsapp",
  formname: "Name",
  formmail: "Mail",
  formcoment: "Coment",
};
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x1hewh5",
      "template_2ki8hlo",
      form.current,
      "vxDcl4UI2jbOQBn6f"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{contactData.title}</h2>
      <span className="section__subtitle">{contactData.subtitile}</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">{contactData.contacttitle}</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">
                {contactData.namecontact1}
              </h3>
              <span className="contact__card-data">{contactData.email}</span>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">
                {contactData.namecontact2}
              </h3>
              <span className="contact__card-data">{contactData.numero}</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">{contactData.contacttitle}</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">
                {contactData.formname}
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">
                {contactData.formmail}
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">
                {contactData.formcoment}
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <Svgcontact />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
