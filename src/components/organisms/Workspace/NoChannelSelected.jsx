import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function NoChannelSelectedUi() {
  return (
    <div className="flex items-center justify-center h-full w-full p-4">
      <Card className="max-w-md w-full text-center shadow-lg rounded-2xl p-6">
        <CardContent className="flex flex-col items-center gap-4">
          <MessageCircle className="h-12 w-12 text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-700">
            No Channels Selected !!!
          </h2>
          <p className="text-gray-500 text-sm">
            Select a channel to start messaging
          </p>
          <Button variant="outline" className="mt-4">
            Create a new Channel
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoChannelSelectedUi;
