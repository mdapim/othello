import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="h-60 bg-black flex-col">
      <hr />
      <div className="flex flex-row justify-between p-6 space-x-1 text-white px-50 pt-6">
        <div className="text-center flex-1">
          <p className="font-bold text-xl"> About </p>
          <p>25 Bethlehem St, Grimsby</p>
          <p>DN31 1JN</p>
        </div>
        <div className="text-center flex-1">
          <p className="font-bold text-xl"> Contact </p>
          <div className="space-x-2 mt-4">
            <SocialIcon
              style={{ height: "30px", width: "30px" }}
              url="https://twitter.com/jaketrent"
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon
              style={{ height: "30px", width: "30px" }}
              url="https://www.facebook.com/othellorestaurantgrimsby/"
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon
              style={{ height: "30px", width: "30px" }}
              url="mailto:othellogrimsby@gmail.com"
              bgColor="transparent"
              fgColor="white"
            />
          </div>
          <p className="mt-2">01472 356704</p>
        </div>
        <div className="text-center flex-1">
          <p className="font-bold text-xl"> Hours </p>
          <p> Mon - Sat: </p>
          <p> 12pm - 2pm</p>
          <p> 6pm - 10pm</p>
        </div>
      </div>
      <hr className="bg-white border-[0.01em] opacity-40" />
      <p className="text-center text-white mt-5">
        Copyright © 2023 Othello Restaurant GY. All rights reserved.
      </p>
    </div>
  );
}
