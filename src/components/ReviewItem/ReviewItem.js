import React from "react";

const ReviewItem = (props) => {
  const { name, price, shipping, quantity } = props.product;
  return (
    <div>
      <h1>Review Items: {name}</h1>
    </div>
  );
};

export default ReviewItem;
