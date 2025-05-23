import React, { useEffect } from "react";
import Showcase from "../components/Showcase";
import { service } from "../utils/mock";
import { useParams } from "react-router-dom";
import Header from "./../components/Header/index";
import { Root } from "../components/Universal";
import { Flex, Timeline } from "antd";
import { Dot } from "lucide-react";

const ServiceID = () => {
  const { id } = useParams();
  const data = service.find((e) => e.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Root>
      <Header />
      <Showcase data={data} />
      <div className="root-container">
        <br />
        <br />
        <div>
          <Timeline items={data?.text || []} />
        </div>
      </div>
      <div className="slide-in">
        <button className="phone">
          <a href="tel:+999999999">
            <i className="fa-solid fa-phone"></i> <span>Qo'ng'iroq</span>
          </a>
        </button>
        <button className="tel">
          <a href="https://t.me/asadbek5577">
            <i className="fa-brands fa-telegram"></i> <span>Telegram</span>
          </a>
        </button>
      </div>
    </Root>
  );
};

export default ServiceID;
