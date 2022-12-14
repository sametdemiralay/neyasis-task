import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Loading from "../components/Loading";

function Home() {
  const [homeData, setHomeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("/api/homepage");
    const data = await response.json();
    setIsLoading(false);
    setHomeData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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

      <section className='popularSearches'>
        <div className='container'>
          <div className='popularSearches__title'>
            <span>Popüler Aramalar</span>
          </div>
          <div className='popularSearches__btns'>
            {homeData.popularSearches.map((item) => (
              <div key={item.id} className='popularSearches__btns__item'>
                {item.text}
              </div>
            ))}
          </div>
          <div className='popularSearches__overlay'></div>
        </div>
      </section>

      <div className='homeContent'>
        <div className='homeContent__bg1'></div>
        <div className='homeContent__bg2'></div>
        <div className='homeContent__bg3'></div>
        <div className='container'>
          <h5>Öne çıkan iş ilanları</h5>

          <section className='carousel row'>
            <div className='carousel__arrow'>
              <span></span>
            </div>
            <div className='carousel__arrow right'>
              <span></span>
            </div>

            {homeData.jobPosting.map((item) => (
              <div key={item.id} className='carousel__item col-2'>
                <p>{item.title}</p>
                <span>{item.subTitle}</span>
                <Image
                  src={`/assets/${item.image}`}
                  alt={item.subTitle}
                  width={"100%"}
                  height={"25%"}
                />
              </div>
            ))}
          </section>

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
            {homeData.references.map((item) => (
              <div key={item.id} className='references__item col-1-4'>
                <Image
                  src={`/assets/${item.image}`}
                  alt={item.alt}
                  width={"100%"}
                  height={item.height}
                />
              </div>
            ))}
          </div>

          <h4>Sizin için iş ilanları</h4>

          <section className='categories row'>
            <div className='categories__item col-3'>
              <p>Popüler Kategoriler</p>
              <ul>
                {homeData.forYou.popularCategories.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className='categories__item col-3'>
              <p>Popüler Başlıklar</p>
              <ul>
                {homeData.forYou.popularTitles.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className='categories__item col-3'>
              <p>Popüler Lokasyonlar</p>
              <ul>
                {homeData.forYou.popularLocations.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className='categories__item col-3'>
              <p>Popüler Şirket İlanları</p>
              <ul>
                {homeData.forYou.popularCompany.map((item) => (
                  <li key={item.id}>{item.text}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer more />
    </>
  );
}

export default Home;
