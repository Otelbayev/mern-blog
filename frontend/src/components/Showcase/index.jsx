import { Container } from "./style";
import Box from "../Box";

const Showcase = ({ data }) => {
  return (
    <Container $bg={data?.img}>
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
