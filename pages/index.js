import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <div className='homeHeader'>
        <div className='homeHeader__usersBtns'>
          <div>
            <Link href='/'>
              <a>Kayıt Ol</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>Giriş Yap</a>
            </Link>
          </div>
        </div>

        <div className='homeHeader__title'>
          <h1>
            <strong>find</strong>developer.net
          </h1>
          <p>find your teammate</p>
        </div>

        <div className='homeHeader__search'>
          <div className='homeHeader__search__input'>
            <span></span>
            <input placeholder='İş Ara | İş, Şirket, Anahtar Kelime' />
          </div>
          <div className='homeHeader__search__btn'>
            <span></span>
            <Link href='/'>
              <a>Detaylı Arama</a>
            </Link>
          </div>
        </div>
      </div>

      <div className='popularSearches container'>
        <div className='popularSearches__title'>
          <span>Popüler Aramalar</span>
        </div>
        <div className='popularSearches__btns'>
          <div className='popularSearches__btns__item'>UX DESIGNER</div>
          <div className='popularSearches__btns__item'>UX DESIGNER</div>
          <div className='popularSearches__btns__item'>UX DESIGNER</div>
          <div className='popularSearches__btns__item'>UX DESIGNER</div>
          <div className='popularSearches__btns__item'>UX DESIGNER</div>
        </div>
        <div className='popularSearches__overlay'></div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>left</div>
          <div className='col-6'>right</div>
        </div>
      </div>
    </>
  );
}

export default Home;
