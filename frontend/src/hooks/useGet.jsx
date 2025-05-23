import axios from "../utils/axios";
import { useState } from "react";

export const useGet = () => {
  const [loading, setLoading] = useState(true);
  const get = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  return { get, loading };
};
