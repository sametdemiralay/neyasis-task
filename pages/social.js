import React from "react";
import SocialContentTitle from "../components/SocialContentTitle";
import SocialSidebarItem from "../components/SocialSidebarItem";
import SocialContentAbilities from "../components/SocialContentAbilities";
import Footer from "../components/Footer";
import Image from "next/image";

const Social = () => {
  return (
    <>
      <section className='socialHeader'>
        <div className='socialHeader__bg1'></div>
        <div className='socialHeader__bg2'></div>
        <div className='socialHeader__bg3'></div>

        <div className='container'>
          <div className='logo'>
            <p>
              <strong>find</strong>developer.net
            </p>
          </div>
          <div className='profile'>
            <div className='profile__title'>
              <p>
                Eray Karakullukçu
                <svg
                  width='16px'
                  height='16px'
                  viewBox='0 0 32 32'
                  id='i-chevron-bottom'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  stroke='currentcolor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                >
                  <path d='M30 12 L16 24 2 12' />
                </svg>
              </p>
              <span>findtalent de Kurucu</span>
            </div>
            <div className='profile__img'></div>
          </div>
        </div>
      </section>

      <section className='socialSearch'>
        <div className='container'>
          <div className='socialSearch__input'>
            <span></span>
            <input placeholder='İş Ara | İş, Şirket, Anahtar Kelime' />
          </div>
          <div className='socialSearch__btn'>
            <span></span>
          </div>
        </div>
      </section>

      <div className='homeContent'>
        <div className='homeContent__bg1'></div>
        <div className='homeContent__bg2'></div>
        <div className='homeContent__bg3'></div>
        <div className='container socialWrapper'>
          <section className='socialWrapper__sidebar'>
            <div className='profilePicture'>
              <div className='topLeft'>
                <div className='topLeft__icon'></div>
              </div>
              <div className='profilePicture__bg'></div>
            </div>

            <div className='socialWrapper__sidebar__profile'>
              <h2>Nesil Aksoy</h2>
              <p>UX Designer</p>
              <p>Türkiye, İstanbul, Sarıyer</p>
              <p>eray_karakullukcu.neyasis.com</p>
              <p>+90 555 66 44</p>
              <div className='cv'>
                <span></span>Find CV{`'`}mi İndir
              </div>
              <p className='edit'>Profili Düzenle</p>
            </div>

            <SocialSidebarItem
              title='Web Sitesi'
              bottomText='Düzenle'
              horizontal
            />
            <SocialSidebarItem
              title='Dökümanlar'
              bottomText='Başka bir döküman ekle'
              vertical
            />
            <SocialSidebarItem title='Kaydedilen Aramalarım' vertical />
            <SocialSidebarItem
              title='Başvurularım'
              bottomText='Tümünü Gör'
              vertical
            />
          </section>
          <section className='socialWrapper__content'>
            <h3>Profil</h3>
            <SocialContentTitle title='Profesyonel Bakış' blueTitle />
            <p className='socialWrapper__content__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <SocialContentTitle title='Deneyim' />
            <p className='socialWrapper__content__title'>Founder</p>
            <p className='socialWrapper__content__subTitle'>
              Neyasis Technology
            </p>
            <p className='socialWrapper__content__text'>
              February 2014 - Present (6 Years , 10 Months)
            </p>
            <p className='socialWrapper__content__text'>
              Ümraniye - İstanbul / Turkey
            </p>
            <p className='socialWrapper__content__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p className='socialWrapper__content__title'>
              Software Development Manager
            </p>
            <p className='socialWrapper__content__subTitle'>IBM</p>
            <p className='socialWrapper__content__text'>
              Jully 2011 - January 2014 (2 Years, 6 Months)
            </p>
            <p className='socialWrapper__content__text'>
              Armonk- New York /ABD
            </p>
            <p className='socialWrapper__content__text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <SocialContentTitle title='Eğitim' />
            <p className='socialWrapper__content__title'>
              Bahçeşehir Üniversitesi
            </p>
            <p className='socialWrapper__content__text'>Master Degree</p>
            <p className='socialWrapper__content__text'>
              Computer & Information Scienses
            </p>
            <p className='socialWrapper__content__text'>2015-2019</p>
            <p className='socialWrapper__content__title'>
              Boğaziçi Üniversitesi
            </p>
            <p className='socialWrapper__content__text'>Bachelor’s Degree</p>
            <p className='socialWrapper__content__text'>
              Political Science and International Relations
            </p>
            <p className='socialWrapper__content__text'>2010-2015</p>

            <SocialContentTitle title='Sertifikalar' />
            <p className='socialWrapper__content__title'>
              MCP (Microsoft Certified Professional)
            </p>
            <p className='socialWrapper__content__text'>Microsoft</p>
            <p className='socialWrapper__content__text'>January 2015</p>

            <SocialContentAbilities title='Yetenekler' />
            <SocialContentAbilities title='İlgi Alanları' />
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Social;
