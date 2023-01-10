import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div>
      <h1 className="underline decoration-wavy decoration-red-600 font-semibold text-2xl my-5">
        {text}
      </h1>
    </div>
  );
};

export default SectionTitle;
