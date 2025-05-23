import { message } from "antd";
import axios from "../utils/axios";

export const useCreate = () => {
  const create = async (url, data = {}) => {
    message.loading({ key: "l", content: "Yaratmoqda..." });
    try {
      const response = await axios.post(url, data);
      message.success({ key: "l", content: "Muvaffaqiyatli yaratildi" });
      return response.data;
    } catch (error) {
      message.error({ key: "l", content: "Xatolik yuz berdi" });
      throw error;
    }
  };

  return { create };
};
