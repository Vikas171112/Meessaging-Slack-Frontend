import { createContext, useState } from "react";

const ChatContext = createContext();

export function ChatContextProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <ChatContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
