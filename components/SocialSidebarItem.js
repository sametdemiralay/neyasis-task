import React from "react";
import Image from "next/image";

const SocialSidebarItem = ({ title, bottomText, vertical, horizontal }) => {
  return (
    <section className='sideItemWrapper'>
      <p>{title}</p>
      {vertical && (
        <ul className='documentDocs'>
          <li>
            <Image
              src='/assets/iconFilledFile.png'
              alt='Picture of the author'
              width={20}
              height={20}
            />
            <p>eraycv.docx</p>
            <i></i>
          </li>
          <li>
            <Image
              src='/assets/iconFilledFile.png'
              alt='Picture of the author'
              width={20}
              height={20}
            />
            <p>eraycv.docx</p>
            <i></i>
          </li>
        </ul>
      )}
      {horizontal && (
        <ul className='socialMediaIcons'>
          <li>
            <Image
              src='/assets/linkedinSocial.png'
              alt='Picture of the author'
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src='/assets/linkedinSocial.png'
              alt='Picture of the author'
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src='/assets/linkedinSocial.png'
              alt='Picture of the author'
              width={20}
              height={20}
            />
          </li>
        </ul>
      )}
      {bottomText && <span>{bottomText}</span>}
    </section>
  );
};

export default SocialSidebarItem;
