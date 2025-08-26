import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
export const Contact = () => {
  const ContactData = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      title: "Email",
      info: "Redatech@gmail.com",
      link: "mailto:test@gmail.com",
    },
    {
      id: 1,
      icon: <RiMessengerLine />,
      title: "Messenger",
      info: "RedaTech",
      link: "https://m.me/houdareda.99",
    },
    {
      id: 1,
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      info: "0123456789",
      link: "https://api.whatsapp.com/send?phone=201112119676",
    },
  ];
  return (
    <section className="contact-section" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact-cards">
        <div className="cards">
          {ContactData.map((card) => {
            return (
              <div className="card">
                <i>{card.icon}</i>
                <h4>{card.title}</h4>
                <h5>{card.info}</h5>
                <a href={card.link} target="_blank">
                  Send Message
                </a>
              </div>
            );
          })}
        </div>
        <form action="">
          <input type="text" placeholder="Your Full Name" />
          <input type="text" placeholder="Your Email" />
          <textarea name="" id="" placeholder="Your Message"></textarea>
          <a href="" className="btn btn-primary">
            Send Message
          </a>
        </form>
      </div>
    </section>
  );
};
export default Contact;
