import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRequest, userSuccess } from "../actions/userActions";
import Loading from "../components/shared/Loading";

const BuyNow = () => {
   const dispatch = useDispatch();
   const { isLoading, message } = useSelector((state) => state);

   //========== =====================================
   const handleBuy = async (e) => {
      e.preventDefault();
      let userInfo = {
         email: e.target.email.value,
         tranxId: e.target.transitionId.value,
      };

      await dispatch(userRequest());
      await fetch(`https://takaonline-server.onrender.com/api/v1/user`, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(userInfo),
      });
      dispatch(userSuccess());
   };

   if (isLoading) {
      return;
      <Loading></Loading>;
   }
   if (message) {
      return (
         <div className="flex justify-center items-center min-h-screen gap-5">
            <h1 className="font-semibold">{message}</h1>
            <Link
               to="/home"
               className="bg-[#1e0f12] hover:bg-red-300 hover:text-black text-white font-semibold block px-10 py-2 rounded-lg"
            >
               Home
            </Link>
         </div>
      );
   }
   return (
      <div className="text-center">
         <div className="p-8 w-10/12 text-start mx-auto">
            <p>
               পেমেন্ট করার পর আপনাকে Email/Telegram/Whats App এ নক দেয়া হবে।
            </p>{" "}
            <br />
            <p>
               কোর্স Buy করা হয়ে গেলে আপনার Serial No. কনফার্ম করা হবে। আপনার
               সিরিয়াল যদি প্রথম ১০০ জনের মধ্যে হয়ে থাকে, আপনি কোর্স রিলেটেড
               যেকোনো হেল্প নিতে পারবেন ডাইরেক্ট Personal Whats App এ আামার
               সাথে।
            </p>{" "}
            <br />
            <p>
               কোর্সে দেখানে নিয়ম অনুযায়ী ৬ মাস কাজ করে যদি আপনার ইনকাম শুরু না
               হয় তাহলে আপনাকে সম্পূর্ণ Refund দেয়া হবে ইনশাআল্লাহ।
            </p>{" "}
            <p>
               এই কোর্সে আপনাকে মাল্টিপল প্লাটফর্ম থেকে Income Potential গুলো
               দেখানো হবে যেখান থেকে আপনার ইনকাম করার পসিবলিটি ৯৯.৯৯%
               ইনশাআলল্লাহ। ১-২ বছর কাজ করার পর অন এভারেজ ৫০ হাজার থেকে ১ লাখ
               টাকা Monthly ইনকাম করতে পারবেন। সময় যত যাবে আপনার ইনকামের পরিমান
               তত বাড়বে।
            </p>{" "}
            <br />
            <p>
               এই কোর্সে দেয়া প্রতিটি ইউটিউব চ্যানেলের আইডিয়াই ইউনিক। যারা
               দেরিতে কোর্সটি শুরু করবেন তারা হয়তোবা ভাববেন যারা প্রথমে কোর্সটি
               শুরু করেছিল তারা তো অলরেডি এইসব ইউটিউব চ্যানেল শুরু করে দিয়েছে তো
               আপনি কি করবেন। আর এই কথাটি মাথায় রেখেই পুরো জানুয়ারি মাসটি
               আপনাদেরকে সময় দেয়া হয়েছে এবং কোর্সের ভিডিও গুলো আনলক করা হবে ১
               ফেব্রয়ারি ২০২৩ থেকে
            </p>{" "}
            <br />
         </div>

         <h1 className="text-3xl font-bold my-6">
            Please give the proper information
         </h1>

         <div className="w-1/2 mx-auto bg-red-200 py-5 rounded-lg mb-4">
            <form onSubmit={handleBuy}>
               <label htmlFor="email" className="font-semibold">
                  Enter a valid Email
               </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-10/12 py-3 px-2 rounded-md mb-4"
                  required
               />
               <br />
               <label htmlFor="transitionId" className="font-semibold">
                  Enter payment Transaction ID{" "}
               </label>
               <input
                  type="text"
                  name="transitionId"
                  id="transitionId"
                  placeholder="Enter a password"
                  className="w-10/12 py-3 px-2 rounded-md mb-4"
                  required
               />{" "}
               <br />
               <input
                  type="submit"
                  value="Submit"
                  className="py-3 w-1/2 bg-orange-600 text-white cursor-pointer rounded-lg"
               />
            </form>
         </div>
      </div>
   );
};

export default BuyNow;
