import { message } from "antd";
import axios from "../utils/axios";

export const useDelete = () => {
  const del = async (url) => {
    message.loading({ key: "l", content: "O'chirilmoqda..." });

    try {
      const response = await axios.delete(url);
      message.success({ key: "l", content: "Muvaffaqiyatli o'chirildi" });
      return response.data;
    } catch (error) {
      message.error({ key: "l", content: "Xatolik yuz berdi" });

      throw error;
    }
  };

  return { del };
};
