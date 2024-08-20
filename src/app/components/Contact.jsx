"use client";
import React, { useState } from "react";
import StyledButton from "./StyleButton";

const ContactUs = () => {
  const initialFormData = {
    Name: "",
    Email: "",
    Message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.Name || !formData.Email) return;

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row text-[#6482AD] h-screen items-start justify-center  mt-10 mb-20 leading-3"
      id="contactus"
    >
      <div className="lg:w-1/2 p-10">
        <div className="text-left p-2 text-7xl md:text-8xl text-[#747575] py-12">
          <div>Let's make</div>
          <div>it happen.</div>
        </div>

        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-9">
            <label
              className="block text-l font-bold mb-2 text-[#6482AD]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full text-[#6482AD] bg-blue-100 border border-[#6482AD] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#6482AD] rounded-3xl"
              id="name"
              name="Name"
              type="text"
              placeholder="Your Name *"
              onChange={handleChange}
              value={formData.Name}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-l font-bold mb-2 text-[#6482AD]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-blue-100 text-[#6482AD] border border-[#6482AD] py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#6482AD] rounded-2xl"
              id="email"
              name="Email"
              type="email"
              placeholder="Your Email *"
              onChange={handleChange}
              value={formData.Email}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-[#6482AD] text-l font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-blue-100 text-[#6482AD] border border-[#6482AD] rounded-3xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#6482AD]"
              id="message"
              name="Message"
              placeholder="Your Message *"
              value={formData.Message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-5">
            <StyledButton text="Send" />
          </div>
        </form>
      </div>

      <div className="lg:w-1/3 h-auto w-10 rounded-md p-7 ml-44">
        <img
          src="/img3.jpg"
          alt="Decorative"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default ContactUs;
