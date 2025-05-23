import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGet } from "../hooks/useGet";
import Image from "../utils/image";
import dayjs from "dayjs";

const Content = styled.div`
  margin-top: 100px;
  .header {
    display: flex;
    gap: 20px;
    img {
      width: 400px;
      border-radius: 20px;
    }
    .text {
      margin-top: 20px;
      .title {
        text-align: left !important;
      }
      .desc {
        margin: 10px 0;
      }
      .date {
        margin: 5px 0;
        color: var(--dark);
        font-weight: 500;
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: var(--dark);
    margin: 20px 0;
  }
  .none {
    margin: 20px 0;
  }
  @media screen and (max-width: 800px) {
    .header {
      flex-direction: column;
      img {
        width: 100%;
      }
    }
  }
`;

const InsectID = () => {
  const { id } = useParams();
  const { get, loading } = useGet();
  const [data, setData] = useState({});
  const getData = async () => {
    const res = await get(`/blog/${id}`);
    if (res) {
      setData(res);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  return (
    <div className="root-container">
      <Content>
        <div className="header">
          <Image src={data.image} />
          <div className="text">
            <div className="title">{data.title}</div>
            <div className="desc">{data.description}</div>
            <div className="date">{data.category}</div>
            <div className="date">{dayjs(data.date).format("DD/MM/YYYY")}</div>
          </div>
        </div>
        <div className="line"></div>
        <div
          className="none"
          dangerouslySetInnerHTML={{ __html: data.data_text }}
        ></div>
      </Content>
    </div>
  );
};

export default InsectID;
