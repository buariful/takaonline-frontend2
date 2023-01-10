import React from "react";
import AboutCourse from "../components/homeComponents/AboutCourse";
import CourseSummary from "../components/homeComponents/CourseSummary";
import Header from "../components/homeComponents/Header";
import VideoCard from "../components/homeComponents/VideoCard";

const Home = () => {
   return (
      <main>
         <Header />
         <section className=" my-10 w-10/12 mx-auto">
            <VideoCard />
         </section>

         <section className="w-10/12 mx-auto mb-10">
            <AboutCourse />
         </section>

         <section className="bg-[#1E0F12] text-white mb-10">
            <CourseSummary />
         </section>
      </main>
   );
};

export default Home;
