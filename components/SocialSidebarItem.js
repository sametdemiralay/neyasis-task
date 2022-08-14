import React from "react";
import Image from "next/image";

const SocialSidebarItem = ({
  title,
  bottomText,
  vertical,
  horizontal,
  data,
}) => {
  return (
    <section className='sideItemWrapper'>
      <p>{title}</p>
      {vertical && (
        <ul className='documentDocs'>
          {data !== undefined &&
            data.map((item) => (
              <li key={item.id}>
                <Image
                  src={`/assets/${item.image}`}
                  alt='document'
                  width={20}
                  height={20}
                />
                <p>{item.text}</p>
                <i></i>
              </li>
            ))}
        </ul>
      )}
      {horizontal && (
        <ul className='socialMediaIcons'>
          {data !== undefined &&
            data.map((item) => (
              <li key={item.id}>
                <Image
                  src={`/assets/${item.image}`}
                  alt={item.alt}
                  width={20}
                  height={20}
                />
              </li>
            ))}
        </ul>
      )}
      {bottomText && <span>{bottomText}</span>}
    </section>
  );
};

export default SocialSidebarItem;
