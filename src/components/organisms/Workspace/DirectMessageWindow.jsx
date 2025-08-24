import { useChatContext } from "@/hooks/context/useChatContext";
import { X } from "lucide-react"; // cancel/close icon

export const DirectMessageWindow = () => {
  const { selectedUser, setSelectedUser } = useChatContext();

  if (!selectedUser) return null;
  // jab tak user select na ho tab tak window hi mat dikhao

  return (
    <div className="fixed right-0 top-0 h-full w-[350px] bg-white shadow-lg border-l flex flex-col">
      {/* Header */}
      <div className="p-4 border-b font-bold flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={selectedUser.avatar}
            alt={selectedUser.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{selectedUser.username}</span>
        </div>

        {/* Cancel / Close Button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {/* messages render yaha karna */}
      </div>

      {/* Input Section */}
      <div className="p-2 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border rounded p-2 focus:outline-none"
        />
      </div>
    </div>
  );
};
