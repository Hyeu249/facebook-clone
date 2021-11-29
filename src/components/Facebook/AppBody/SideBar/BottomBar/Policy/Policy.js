import React from "react";
import PolicyItem from "./PolicyItem/PolicyItem";

function Policy() {
  //array data
  const data = [
    "Quyền riêng tư",
    "Điều khoản",
    "Quảng cáo",
    "Lựa chọn",
    "quảng cáo",
    "Cookie",
    "Xem thêm",
    "Meta",
  ];
  const policyText = data.map((data) => {
    return { id: data, text: data };
  });

  //Return JSX
  return (
    <div
      className="flex"
      style={{ flexWrap: "wrap", position: "absolute", top: "200%" }}
    >
      {policyText.map((data) => (
        <PolicyItem key={data.id} text={data.text} />
      ))}
    </div>
  );
}

export default Policy;
