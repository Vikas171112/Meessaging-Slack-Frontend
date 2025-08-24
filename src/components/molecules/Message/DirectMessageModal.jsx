import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatContext } from "@/hooks/context/useChatContext";

function DirectMessageModal() {
  const { selectedUser, setSelectedUser } = useChatContext();

  if (!selectedUser) return null; // agar koi user selected nahi hai to kuch mat dikha

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="flex flex-col w-[500px] h-[600px]">
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Chat with {selectedUser.username}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedUser(null)} // 👈 cancel/close
          >
            close
          </Button>
        </CardHeader>

        <CardContent className="flex-1 overflow-y-auto space-y-2 bg-gray-50 p-2 rounded">
          {/* yaha pe selectedUser ke messages render honge */}
          <div className="text-gray-500 text-sm text-center">
            Messages with {selectedUser.username} will appear here...
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Input placeholder={`Message ${selectedUser.username}...`} />
          <Button>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DirectMessageModal;
