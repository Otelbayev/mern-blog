import React from "react";
import { Content } from "./style";
import one from "../../assets/garant.png";
import two from "../../assets/team.png";
import three from "../../assets/3.png";
import { useScrollContext } from "./../../context/ScrollContext";

const About = () => {
  const { aboutRef } = useScrollContext();
  return (
    <div className="root-container">
      <Content>
        <br />
        <div className="title" ref={aboutRef} data-aos="zoom-in">
          Xulosa
        </div>
        <br />
        <div className="summer">
          <p>
            ​Mamlakatimiz transport tizimining muhim tarmoqlaridan biri bo‘lgan
            temir yo‘l sohasi O‘zbekiston iqtisodiy taraqqiyotida strategik
            ahamiyat kasb etadi. U nafaqat yirik yuk va yo‘lovchilarni tashishda
            asosiy vosita hisoblanadi, balki xalqaro savdo, logistika va
            mintaqaviy integratsiya jarayonlarining ajralmas qismidir. Ushbu
            kurs ishida temir yo‘l transportining iqtisodiy tizimdagi o‘rni,
            raqamli iqtisodiyot tushunchasi va u bilan bog‘liq
            texnologiyalarning joriy etilishi hamda ularning samaradorligi
            atroflicha tahlil qilindi.
          </p>
          <p>
            Tadqiqot davomida aniqlanishicha, temir yo‘l sohasida raqamli
            texnologiyalarni joriy etish – bu zamon talabiga mos strategik
            yo‘nalish bo‘lib, u boshqaruv tizimini soddalashtirish, xizmatlar
            sifatini oshirish, moliyaviy shaffoflikni ta'minlash va iqtisodiy
            samaradorlikni kuchaytirishda muhim rol o‘ynaydi. Xususan, YHT
            (Yagona hisob-kitob tizimi), avtomatik kuzatuv tizimlari, elektron
            chipta xizmatlari, axborot resurslaridan foydalanish tizimlari
            “O‘zbekiston Temir Yo‘llari” AJ faoliyatida yuqori natijalarni
            ko‘rsatmoqda.
          </p>
          <p>
            “O‘zbekiston Temir Yo‘llari” AJ faoliyatining amaliy tahlili shuni
            ko‘rsatdiki, so‘nggi yillarda moliyaviy ko‘rsatkichlar, yuk va
            yo‘lovchi tashish hajmlari ortib bormoqda. Bu esa jamiyat tomonidan
            olib borilayotgan modernizatsiya, raqamlashtirish va logistika
            islohotlarining natijadorligidan dalolat beradi.
          </p>
          <p>
            Shu bilan birga, hali yechimini topishi lozim bo‘lgan muammolar ham
            mavjud: ayrim yo‘nalishlarda infratuzilmaning eskirganligi,
            raqamlashtirish jarayonining sustligi, xalqaro tranzit bozoridagi
            kuchli raqobat va boshqaruvdagi byurokratik to‘siqlar. Bu
            muammolarni bartaraf etish uchun zamonaviy raqamli yechimlar,
            xalqaro hamkorlik, investitsiya jalbi va kadrlar salohiyatini
            oshirish talab etiladi.
          </p>
          <p>
            Xulosa qilib aytganda, temir yo‘l transportida raqamli iqtisodiyot
            elementlarini joriy etish nafaqat texnologik rivojlanish, balki
            iqtisodiy barqarorlik va raqobatbardoshlikni ta’minlovchi asosiy
            omillardan biridir. Ushbu yo‘nalishda amalga oshirilayotgan ishlar
            davom ettirilsa, O‘zbekiston nafaqat mintaqaviy, balki xalqaro
            miqyosda ham yetakchi transport-logistika markazlaridan biriga
            aylanishi mumkin.
          </p>{" "}
        </div>
        {/* <div className="card">
          <div className="card__item" data-aos="fade-up">
            <img src={one} alt="" />
            <div className="card__item__title">ГАРАНТИЯ КАЧЕСТВА</div>
            <div className="card__item__desc">
              Мы предоставляем год гарантии на все наши Reja. Будьте уверены -
              если мы обработали помещение оно будет таким еще долгое время.
            </div>
          </div>
          <div className="card__item" data-aos="fade-up">
            <img src={two} alt="" />
            <div className="card__item__title">КОМАНДА ПРОФЕССИОНАЛОВ</div>
            <div className="card__item__desc">
              Все наши сотрудники обучены и прекрасно знают свое дело. Каждый
              год они проходят курсы повышения квалификации и делают обработку
              на высшем уровне.
            </div>
          </div>
          <div className="card__item" data-aos="fade-up">
            <img src={three} alt="" />
            <div className="card__item__title">ТОЛЬКО БЕЗВРЕДНЫЕ ПРЕПАРАТЫ</div>
            <div className="card__item__desc">
              В нашей работе мы используем только проверенные средства обработки
              со всеми сертификатами качества и безопасности для окружающих.
            </div>
          </div>
        </div> */}
      </Content>
    </div>
  );
};

export default About;
