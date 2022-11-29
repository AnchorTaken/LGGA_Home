// Packages
import { useState, Component, useContext, useEffect } from "react";
import axios from "axios";

// Components
import MetaTags from "../comps/util/MetaTags.js";

import AppContext from "../comps/util/AppContext.js";

import ConctactSlider from "../comps/util/ContactSlider.js";

export default function Contact() {
  const contacts_deets = useContext(AppContext);
  const [success, setSuccess] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Create a submit form
  const API = "http://localhost:1337/api/client-messages";
  const token = process.env.KEY;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const { name, email, phone, subject, message } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API, {
        data: {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
        },
        headers: {
          "content-type": "text/plain;  charset=utf-8",
          Authorization: `bearer ${token}`,
        },
      })
      .then((response) => {
        // if 200 then setSuccess to true#
        if (response.status == 200) {
          setSuccess(true);
        } else if (response.status == 400) {
          setSuccess(false);
        }
      });
  };

  return (
    <div className="contact">
      <MetaTags
        title={"LGGA - Kontaktai"}
        desc={
          "LGGA turi net 29 metų darbo patirtį. Sėkmingai įgyvendinus pastarojo dešimtmečio selekcines programas, žalųjų veislių karvių produktyvumas didėja sparčiau nei kitų veislių."
        }
      />
      <div className="top-hero">
        <div className="text-holder top">
          <h1 data-aos="fade-down" data-aos-once="true" data-aos-delay="100">
            Kontaktai
          </h1>
          <p data-aos="fade-down" data-aos-once="true" data-aos-delay="300">
            Su mūsų specialistais galima susisiekti kontaktiniu telefono numeriu
            arba parašius elektroninį laišką
          </p>
        </div>

        <div className="contact__info container">
          <div className="contact__text">
            <div className="gridded">
              <div className="contact__info__options">
                <div className="single">
                  <div className="contact-icon">
                    {" "}
                    <i className="gg-pin"></i>{" "}
                  </div>
                  <div className="m-auto">
                    <h1
                      data-aos="fade-left"
                      data-aos-once="true"
                      data-aos-delay="200"
                    >
                      Asociacijos vieta
                    </h1>
                    <p
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-delay="400"
                    >
                      {contacts_deets[0].address}
                    </p>
                  </div>
                </div>
                <div className="single">
                  <div className="contact-icon">
                    <i className="gg-phone"></i>
                  </div>
                  <div className="m-auto">
                    <h1
                      data-aos="fade-left"
                      data-aos-once="true"
                      data-aos-delay="200"
                    >
                      Kontaktinis numeris
                    </h1>
                    <a
                      href={`tel:${contacts_deets[0].phone}`}
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-delay="400"
                    >
                      {contacts_deets[0].phone}
                    </a>
                  </div>
                </div>
                <div className="single last">
                  <div className="contact-icon">
                    <i className="gg-mail"></i>
                  </div>
                  <div className="m-auto">
                    <h1
                      data-aos="fade-left"
                      data-aos-once="true"
                      data-aos-delay="200"
                      data-aos-offset="-100px"
                    >
                      Elektroninis paštas
                    </h1>
                    <a
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-delay="400"
                      data-aos-offset="-100px"
                      href={`mailto: ${contacts_deets[0].email}`}
                    >
                      {contacts_deets[0].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <iframe
              title="map"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30036.379520996932!2d23.344824182923393!3d55.97593347246835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5fdf5ebad7757%3A0xc1ebf1d339e7ab85!2zVGlsxb7El3MgZy4gMzM1LCDFoGlhdWxpYWkgNzYxMTYsIExpdGh1YW5pYQ!5e0!3m2!1sen!2suk!4v1644487929544!5m2!1sen!2suk"
            ></iframe>
          </div>
        </div>
      </div>

      {success ? (
        <form className="contact__form container">
          <fieldset>
            <div className="text-holder">
              <legend>Jūsų laiškas išsiųstas!</legend>
              <span>Mes su Jumis susisieksime kaip galima greičiau.</span>
            </div>
          </fieldset>
        </form>
      ) : (
        <form className="contact__form container" onSubmit={onSubmit}>
          <fieldset>
            <div className="text-holder">
              <legend
                data-aos="fade-down"
                data-aos-once="true"
                data-aos-delay="200"
              >
                Susisiekti
              </legend>
              <span
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="400"
              >
                Parašykite žinutė, su Jumis susisieks mūsų specialistas
              </span>
            </div>

            <div>
              <div
                className="single-line"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <p>
                  <label htmlFor="name">Jūsų vardas *</label>
                  <input
                    name="name"
                    type="text"
                    className="split"
                    value={name}
                    onChange={onChange}
                    placeholder=""
                  />
                </p>
                <p>
                  <label htmlFor="email">Jūsų elektroninis paštas *</label>
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={onChange}
                    placeholder=""
                  />
                </p>
              </div>
              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                <label htmlFor="phone">Kontaktinis numeris *</label>
                <input
                  type="text"
                  name="phone"
                  placeholder=""
                  value={phone}
                  onChange={onChange}
                />
              </p>
              <p data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
                <label htmlFor="subject">Tema *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder=""
                  value={subject}
                  onChange={onChange}
                />
              </p>
            </div>
            <p data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
              <label htmlFor="message">Klausimas / pranešimas *</label>
              <textarea
                name="message"
                cols="30"
                rows="11"
                value={message}
                onChange={onChange}
                placeholder=""
              ></textarea>
            </p>
          </fieldset>

          <button
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="600"
            className="btn-main custom"
          >
            <span>Siųsti</span>{" "}
          </button>
        </form>
      )}

      <div className="custom-slide">
        <ConctactSlider />
      </div>
    </div>
  );
}
