import React, { Fragment } from "react";
import bannerLeftImg from "../../img/banner_left.jpg";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <Fragment>
         <div
            className="py-14"
            style={{
               background:
                  "linear-gradient(120deg, rgb(30 15 18), rgb(30 15 18),#000)",
            }}
         >
            <div className="w-10/12 mx-auto flex justify-between items-center gap-8 text-white md:flex-row flex-col-reverse relative">
               {/* ====== banner img ======== */}
               <img
                  src={bannerLeftImg}
                  alt="hero_left"
                  className=" rounded-lg border-2 border-red-700"
                  style={{ width: "32vmax" }}
               />
               {/* ===== banner right ====== */}
               <div className="flex justify-between">
                  <div className="basis-2/3">
                     <p className="mb-6">
                        31-01-2023 তারিখ পর্যন্ত কোর্সটি ৫০% ডিসকাউন্টে মাত্র
                        ৫০০০ টাকায় কিনতে পারবেন। ১ই ফেব্রয়ারি ২০২৩ থেকে কোর্স
                        মূল্য রেগুলার প্রাইস ১০,০০০ টাকা করা হবে
                     </p>
                     <p>
                        কোর্সে দেখানো নিয়ম অনুযায়ী ৬ মাস কাজ করে যদি আপনার ইনকাম
                        শুরু না হয় তাহলে আপনাকে সম্পূর্ণ Refund
                        দেয়া হবে ইনশাআল্লাহ
                     </p>
                  </div>
                  <div className="basis-1/3">
                     <div className="flex flex-col justify-start pr-4 mb-5">
                        <span className="line-through">১০,০০০</span>
                        <h2 className="font-bold text-3xl">
                           ৫০০০<span className="text-3xl">৳</span>
                        </h2>
                     </div>

                     <Link
                        to="/buy"
                        className="bg-[#1E0F12] font-semibold  hover:bg-red-400 border-2 shadow-red-300 shadow-inner border-transparent text-white px-12 z-20 py-4 rounded-2xl fixed"
                     >
                        Buy
                     </Link>
                  </div>
               </div>

               {/*========== social media ============ */}
               {/* <div className="absolute bottom-0 right-0 flex gap-4 bg-slate-50 p-2 rounded-md">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-blue-600 text-xl"></FaFacebook>
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-red-600 text-xl"></FaYoutube>
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="text-gray-900 text-xl"></FaTiktok>
            </a>
          </div> */}
            </div>
         </div>
      </Fragment>
   );
};

export default Header;
