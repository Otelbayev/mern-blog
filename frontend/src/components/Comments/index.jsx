import React from "react";
import { Container } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ivan from "../../assets/ivan.jpg";
import elena from "../../assets/elena.jpg";
import dm from "../../assets/dm.jpg";
import { useScrollContext } from "./../../context/ScrollContext";

const Comments = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { commentRef } = useScrollContext();

  return (
    <Container>
      <div className="root-container">
        <div className="title" ref={commentRef}>
          Ustozlar
        </div>
        <Slider {...settings} className="slider">
          <div>
            <div className="slider__item" data-aos="zoom-in">
              <img className="slider__item__img" src={ivan} />
              <div className="slider__item__name">Иван </div>
              <div className="slider__item__desc">
                "Отличная работа! Очень доволен результатом. После дезинфекции
                тараканы исчезли полностью. Рекомендую! Специалисты были
                вежливыми и профессиональными."
              </div>
            </div>
          </div>
          <div>
            <div className="slider__item" data-aos="zoom-in">
              <img className="slider__item__img" src={dm} />
              <div className="slider__item__name">Дмитрий</div>
              <div className="slider__item__desc">
                "Спасибо за качественную дезинфекцию! Быстро и эффективно
                избавились от всех насекомых. Буду обращаться снова при
                необходимости. Цена и качество на высшем уровне. Сначала
                сомневался, но результат превзошел все ожидания. Никаких
                насекомых и неприятных запахов. Советую всем!"
              </div>
            </div>
          </div>
          <div>
            <div className="slider__item" data-aos="zoom-in">
              <img className="slider__item__img" src={elena} />
              <div className="slider__item__name">Елена</div>
              <div className="slider__item__desc">
                "Отличный сервис! Приятно удивлена результатом. Дом стал чистым
                и без тараканов. Спасибо огромное! Специалисты объяснили все
                этапы работы и использовали безопасные для здоровья препараты."
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Comments;
