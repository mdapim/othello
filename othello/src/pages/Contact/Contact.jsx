import GMap from "./googlemap";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Main/components/Footer/Footer";
import InputCard from "./InputCard";
import { Input } from "postcss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  var data = {
    service_id: "service_lw9ch6r",
    template_id: "template_0lx9i2t",
    user_id: "fUXfArGHyPjFG9aG-",
    template_params: {
      to_name: formData.name,
      from_name: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message,
      "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
    },
  };

  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sendMessage = async () => {
    const apiResponse = await emailjs
      .send(
        data.service_id,
        data.template_id,
        data.template_params,
        data.user_id
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {}, []);

  return (
    <div className="h-full w-full">
      <div
        class="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + "/Images/table.jpeg"
          })`,
        }}
      >
        <p className="text-8xl uppercase">Contact Us </p>
      </div>
      <div className="flex flex-row">
        <form
          className="flex basis-2/3 flex-col h-screen/2"
          onSubmit={(e) => {
            sendMessage();
            e.preventDefault();
          }}
        >
          <div className="flex flex-col flex-wrap pt-24 items-center space-y-10">
            <div className="flex flex-col space-y-5">
              <div className="flex lg:flex-row justify-between lg:space-x-20 sm:flex-col">
                <InputCard
                  name="name"
                  size={25}
                  type="text"
                  handleFormInput={handleFormInput}
                />
                <InputCard
                  name="phone"
                  size={25}
                  type="phone"
                  handleFormInput={handleFormInput}
                />
              </div>
              <div className="flex lg:flex-row justify-between sm:flex-col">
                <InputCard
                  name="email"
                  size={25}
                  type="email"
                  handleFormInput={handleFormInput}
                />
                <InputCard
                  name="subject"
                  size={25}
                  type="text"
                  handleFormInput={handleFormInput}
                />
              </div>
            </div>
            <label className="font-extrabold uppercase">
              Message
              <br />
              <textarea
                cols="60"
                rows="9"
                maxLength="200"
                type="text"
                name="message"
                className="border-gray-700 border-b-2 outline-0 normal-case font-normal"
                onChange={handleFormInput}
              />
            </label>
          </div>
          <div className=" m-auto">
            <button
              type="submit"
              className="relative border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex basis-1/3 flex-col justify-around">
          <div className="text-center mx-auto">
            <p className="text-4xl bold">Contact Us</p>
            <p>01472 356704</p>
            <p> othellogrimsby@gmail.com</p>
          </div>
          <div className="text-center mx-auto mb-20">
            <p className="text-4xl bold">Opening Times</p>
            <p>Monday to Saturday</p>
            <p> Lunch: 12-2pm</p>
            <p> Dinner: 6-10pm</p>
          </div>
        </div>
      </div>
      <GMap />
      <Footer />
    </div>
  );
}
