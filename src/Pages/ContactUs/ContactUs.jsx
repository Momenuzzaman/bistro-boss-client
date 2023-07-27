import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../../src/assets/contact/banner.jpg";
import Information from "./Information/Information";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro boss | Contact Us</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"CONTACT US"}
        description={"Would you like to try a dish?"}
      />
      <Information />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
