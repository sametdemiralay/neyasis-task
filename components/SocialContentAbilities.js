import React from "react";
import SocialContentTitle from "./SocialContentTitle";

const SocialContentAbilities = ({ title, data }) => {
  return (
    <>
      <SocialContentTitle title={title} />
      <ul>
        {data !== undefined &&
          data.map((item) => (
            <li key={item.id}>
              <span></span>
              {item.text}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SocialContentAbilities;
