import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaMessage } from "react-icons/fa6";
const ContactForm = () => {
  const handleInformationSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const information = { name, email, phone, message };
    console.log(information);
  };
  return (
    <div>
      <div className="mt-[100px]">
        <SectionTitle subtitle={"Send Us a Message"} title={"CONTACT FORM"} />
      </div>
      <div className="px-3 lg:px-0">
        <div className="max-w-7xl mx-auto bg-[#F3F3F3] mb-[300px] ">
          <div className="w-10/12 mx-auto">
            <form onSubmit={handleInformationSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-[90px]">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message:
                </label>
                <textarea
                  rows={10}
                  id="message"
                  name="message"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center py-[60px] text-white">
                <button
                  style={{
                    backgroundColor:
                      "rgba(131, 93, 35, 1), rgba(181, 129, 48, 1)",
                  }}
                  type="submit"
                  className=" font-bold py-2 px-20 rounded"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
