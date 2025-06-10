import { Container } from "./style";
import Box from "../Box";
import fuck from "../../assets/fuck.mp4";

const Showcase = ({ data }) => {
  return (
    <Container $bg={data?.img}>
      <video
        src={fuck}
        className="video-bg"
        alt=""
        loop
        muted
        autoPlay
        style={{ width: "100%", height: "100%" }}
      />
      <div className="bg-black"></div>
      <div className="root-container">
        <div className="showcase">
          <div className="showcase__left">
            <h1 className="showcase__left__title" data-aos="zoom-in">
              {data?.title ||
                "Temir yo’l transportida raqamli iqtisodiyotni joriy etishning iqtisodiy samaradorligi axborot tizimi"}
            </h1>
            <div className="showcase__left__mintitle" data-aos="zoom-in">
              {data?.desc || ""}
            </div>
          </div>
          <div className="showcase__right">
            <Box
              title="Biz bilan bog'laning"
              desc=""
              mode="dark"
              width="100%"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
