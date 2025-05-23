import { Container, Sale } from "./style";
import { useNavigate } from "react-router-dom";
import { useScrollContext } from "../../context/ScrollContext";
import Box from "../Box";
import { useGet } from "../../hooks/useGet";
import { useEffect, useState } from "react";
import Image from "../../utils/image";
import dayjs from "dayjs";

const Insect = () => {
  const navigate = useNavigate();
  const { insectRef } = useScrollContext();
  const { get, loading } = useGet();
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await get("/blog");
    if (res?.length) {
      setData(res);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <div className="root-container">
          <div className="title" ref={insectRef}>
            Blog
          </div>
          {loading ? (
            "loading"
          ) : (
            <div className="content">
              {data.map((e) => (
                <div
                  className="cart"
                  data-aos="fade-up"
                  onClick={() => navigate(`blog/${e._id}`)}
                  key={e.id}
                >
                  <Image src={e.image} alt="" />
                  <div className="cart__bottom">
                    <div className="cart__top">
                      <div>{e.category}</div>
                      <div>{dayjs(e.date).format("DD/MM/YYYY")}</div>
                    </div>
                    <div className="cart__title">{e.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
      <Sale>
        <div className="root-container">
          <div className="root-wrapper">
            <div className="content" data-aos="zoom-in">
              <div className="content__left">
                <div className="content__left__title">
                  Ariza va murojaatlaringizni yozib qoldiring
                </div>
                <div className="content__left__line"></div>
                <div className="content__left__desc">
                  Xodimlarimiz
                  <span className="per"> 10 daqiqa</span> ichida siz bilan
                  bog'lanishadi
                </div>
              </div>
              <div className="content__right">
                <Box title="Biz bilan bog'laning" width={500} />
              </div>
            </div>
          </div>
        </div>
      </Sale>
    </div>
  );
};

export default Insect;
