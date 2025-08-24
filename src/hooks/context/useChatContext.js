import ChatContext from "@/context/ChatContext";
import { useContext } from "react";

export const useChatContext = () => {
  return useContext(ChatContext);
};
