import { message } from "antd";
import axios from "../utils/axios";

export const useUpdate = () => {
  const update = async (url, data = {}) => {
    message.loading({ key: "l", content: "Yangilanmoqda..." });
    try {
      const response = await axios.put(url, data);
      message.success({ key: "l", content: "Muvaffaqiyatli yangilandi" });
      return response.data;
    } catch (error) {
      message.error({ key: "l", content: "Xatolik yuz berdi" });
      throw error;
    }
  };

  return { update };
};
