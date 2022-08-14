import React from "react";

const SocialContentTitle = ({ title, blueTitle }) => {
  return (
    <div className='sctWrapper'>
      <p className={`${blueTitle && "blueTitle"}`}>{title}</p>
      <span>Düzenle</span>
    </div>
  );
};

export default SocialContentTitle;
