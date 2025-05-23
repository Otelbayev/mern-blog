import React from "react";
import { Content } from "../About/style";

const Video = () => {
  return (
    <div className="root-container">
      <Content>
        <div className="title" data-aos="zoom-in">
          Video yangiliklar
        </div>

        <div className="video">
          <div className="video__item" data-aos="fade-up">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/J-UItxbjh7c?si=KDHQgO9icav26Nzl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="video__item__title">
              Toshkent TV | “TRANSNET” kompaniyasi bilan hamkorlik aloqalari
              yo‘lga qo‘yildi
            </div>
          </div>
          <div className="video__item" data-aos="fade-up">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mzzVtNff5yc?si=hbhf8hkYvTLL4RJ1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="video__item__title">
              Adilxodjayev Anvar Ishanovich – 75 yillik yubiley tadbiridan
              lavhalar
            </div>
          </div>
          <div className="video__item" data-aos="fade-up">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Gx1iSwy4v78?si=N9-yKMUfxJcLFfEm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="video__item__title">
              “Frame” kompaniyasi bilan hamkorlik yo‘lga qo‘yildi
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default Video;
