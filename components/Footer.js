import React from "react";
import Image from "next/image";

const Footer = ({ more }) => {
  const faq = [
    {
      id: 1,
      text: "Gizlilik Merkezi",
    },
    {
      id: 2,
      text: "Çerezler",
    },
    {
      id: 3,
      text: "Gizlilik",
    },
    {
      id: 4,
      text: "Şartlar",
    },
  ];

  const footerAbout = [
    {
      id: 1,
      text: "Finddeveloper'da Çalışmak",
    },
    {
      id: 2,
      text: "Hakkımızda",
    },
    {
      id: 3,
      text: "Yardım Merkezi",
    },
  ];
  return (
    <section className='footerWrapper'>
      <div className='container'>
        <div className='footerWrapper__top'>
          <div className='footerWrapper__top__copyright'>
            ®2020 Finddeveloper.net
          </div>
          <div className='footerWrapper__top__more'>
            <ul>
              {faq.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className='footerWrapper__top__more'>
            <ul>
              {footerAbout.map((item) => (
                <li key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className='footerWrapper__top__language'>
            <select>
              <option value='tr'>Türkçe</option>
              <option value='en'>English</option>
            </select>
          </div>
        </div>

        {more && (
          <div className='footerWrapper__bot'>
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
        )}
      </div>
    </section>
  );
};

export default Footer;
