import React from "react";

const Card = (props) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-200 dark:border-gray-700">
      {props.children}
    </div>
  );
};

export default Card;
