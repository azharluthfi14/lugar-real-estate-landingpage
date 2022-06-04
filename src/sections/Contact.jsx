import React from "react";
import contactImages from "../assets/contact.jpg";

const Contact = () => {
  return (
    <section className="mx-28 py-20">
      <div className="flex justify-between">
        <div className="w-full">
          <img className="w-[445px] h-[500px]" src={contactImages} alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-3xl mb-3 font-bold text-black">Contact us</h1>
          <p className="text-gray">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </p>
          <div className="mt-5">
            <form className="space-y-5" autoComplete="off">
              <div className="flex justify-between gap-3">
                <input
                  className="w-full border border-black p-3 focus:rounded-none focus:outline-none"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                />
                <input
                  className="w-full border border-black p-3 focus:rounded-none focus:outline-none"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                />
              </div>
              <div className="flex justify-between gap-3">
                <input
                  className="w-full border border-black p-3 focus:rounded-none focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email address"
                />
                <input
                  className="w-full border border-black p-3 focus:rounded-none focus:outline-none"
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                />
              </div>
              <div className="mb-10">
                <textarea
                  className="w-full border p-3 focus:outline-none"
                  placeholder="Description"
                  name="description"
                  id="description"
                  rows="6"
                ></textarea>
              </div>
              <button className="bg-black p-4 text-white">Get a quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
