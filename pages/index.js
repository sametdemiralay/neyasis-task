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

      <div className='homeContent'>
        <div className='homeContent__bg1'></div>
        <div className='homeContent__bg2'></div>
        <div className='homeContent__bg3'></div>
        <div className='container'>
          <h5>Öne çıkan iş ilanları</h5>

          <div className='carousel row'>
            <div className='carousel__arrow'>
              <span></span>
            </div>
            <div className='carousel__arrow right'>
              <span></span>
            </div>

            <div className='carousel__item col-2'>
              <p>IT Müdürü</p>
              <span>Bosch</span>
              <Image
                src='/assets/1280PxBshBoschUndSiemensHausgeraTeLogoSvgCopy.png'
                alt='Picture of the author'
                width={"100%"}
                height={"25%"}
              />
            </div>
            <div className='carousel__item col-2'>
              <p>IT Müdürü</p>
              <span>Bosch</span>
              <Image
                src='/assets/1280PxBshBoschUndSiemensHausgeraTeLogoSvgCopy.png'
                alt='Picture of the author'
                width={"100%"}
                height={"25%"}
              />
            </div>
          </div>

          <div className='gallery row'>
            <div className='gallery__item col-6'>
              <div className='gallery__item__features'>
                <Link href='/'>
                  <a>İş Ara</a>
                </Link>
                <Link href='/'>
                  <a>Profilini Oluştur</a>
                </Link>
              </div>
            </div>
            <div className='gallery__item right col-6'>
              <div className='gallery__item__features'>
                <Link href='/'>
                  <a>İş Veren Çözümleri</a>
                </Link>
              </div>
            </div>
          </div>

          <div className='references row'>
            <div className='references__item col-2'>
              <Image
                src='/assets/1Acibadem.png'
                alt='Picture of the author'
                width={"100%"}
                height={95}
              />
            </div>
            <div className='references__item col-2'>
              <Image
                src='/assets/1Acibadem.png'
                alt='Picture of the author'
                width={"100%"}
                height={95}
              />
            </div>
            <div className='references__item col-2'>
              <Image
                src='/assets/1Acibadem.png'
                alt='Picture of the author'
                width={"100%"}
                height={95}
              />
            </div>
          </div>

          <h4>Sizin için iş ilanları</h4>

          <section className='categories row'>
            <div className='categories__item col-3'>
              <p>Popüler Kategoriler</p>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </div>
            <div className='categories__item col-3'>
              <p>Popüler Kategoriler</p>
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <section className='homeFooter'>
        <div className='container'>
          <div className='homeFooter__top'>
            <div className='homeFooter__top__copyright'>
              ®2020 Finddeveloper.net
            </div>
            <div className='homeFooter__top__more'>
              <ul>
                <li>Gizlilik</li>
                <li>Gizlilik</li>
                <li>Gizlilik</li>
                <li>Gizlilik</li>
              </ul>
            </div>
            <div className='homeFooter__top__more'>
              <ul>
                <li>Gizlilik</li>
                <li>Gizlilik</li>
                <li>Gizlilik</li>
                <li>Gizlilik</li>
              </ul>
            </div>
            <div className='homeFooter__top__language'>
              <select>
                <option value='tr'>Türkçe</option>
                <option value='en'>English</option>
              </select>
            </div>
          </div>

          <div className='homeFooter__bot'>
            <Image
              src='/assets/iskurLogo.png'
              alt='Picture of the author'
              width={80}
              height={80}
            />
            <p>
              Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
              31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak
              üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124
              sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir.
              4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve
              menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki
              telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın.
              Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş
              Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :
              <br />
              0216 523 90 26
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
