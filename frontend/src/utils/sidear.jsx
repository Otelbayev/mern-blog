import { MessageCircle, Newspaper } from "lucide-react";

const admin = [
  {
    key: "blog",
    label: "Blog",
    icon: <Newspaper size={25} />,
  },
  {
    key: "appeals",
    label: "Murojaatlar",
    icon: <MessageCircle size={25} />,
  },
];

export const sidebar = () => {
  return [...admin];
};
