import React, { useEffect, useState } from "react";

const Admin = () => {
   const [users, setUsers] = useState([]);
   useEffect(() => {
      fetch("https://takaonline-server.onrender.com/api/v1/users")
         .then((res) => res.json())
         .then((data) => setUsers(data));
   }, []);

   let userContent;
   if (users) {
      userContent = users?.map((user, index) => {
         return (
            <div
               className="flex justify-between items-center w-10/12 md:8/12 border-b-gray-800 border-2 mx-auto  text-sm md:text-base px-5 py-2 hover:bg-[#1e0f12d1] hover:text-[#f5deb3]"
               key={user._id}
            >
               <strong>{index + 1}</strong>
               <p>{user.email}</p>
               <p>{user.tranxId}</p>
            </div>
         );
      });
   }

   return (
      <div className="bg-[#d9d9d9]">
         <div className="flex justify-between bg-cyan-500 px-5 py-3 items-center w-10/12 md:8/12 border-b-gray-800 border-2 mx-auto text-sm md:text-base">
            <strong></strong>
            <p>email</p>
            <p>Transaction Id</p>
         </div>
         {userContent}
      </div>
   );
};

export default Admin;
