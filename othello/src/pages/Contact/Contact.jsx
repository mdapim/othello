import GMap from "./googlemap";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Main/components/Footer/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  var data = {
    service_id: "service_lw9ch6r",
    template_id: "template_0lx9i2t",
    user_id: "fUXfArGHyPjFG9aG-",
    template_params: {
      to_name: formData.name,
      from_name: formData.email,
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
      {console.log("form is", formData)}
      <div
        class=" mt-60 bg-fixed h-96 w-full"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/Images/table.jpeg"
          })`,
        }}
      ></div>
      <div>
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            sendMessage();
            e.preventDefault();
          }}
        >
          <div className="flex flex-row flex-wrap p-10 justify-around">
            <div className="flex flex-col space-y-11">
              <label className="">
                Name
                <br />
                <input
                  type="text"
                  name="name"
                  size="40"
                  className="border-gray-700 border-b-2 outline-0"
                  onChange={handleFormInput}
                />
              </label>
              <label className="">
                Email
                <br />
                <input
                  type="email"
                  name="email"
                  size="40"
                  className="border-gray-700 border-b-2 outline-0"
                  onChange={handleFormInput}
                />{" "}
              </label>
              <label className="">
                Phone
                <br />
                <input
                  type="text"
                  size="40"
                  name="phone"
                  className="border-gray-700 border-b-2 outline-0"
                  onChange={handleFormInput}
                />
              </label>
            </div>
            <label className="">
              Message
              <br />
              <textarea
                cols="39"
                rows="9"
                maxLength="200"
                type="text"
                name="message"
                className="border-gray-700 border-b-2 outline-0"
                onChange={handleFormInput}
              />
            </label>
          </div>
          <p className=" m-auto">
            <input type="submit" />
          </p>
        </form>
        <br />
        <div className="flex flex-row justify-around">
          <div>
            <p>Contact Us</p>
          </div>
          <GMap />
          <div>
            <p>Opening Times</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
