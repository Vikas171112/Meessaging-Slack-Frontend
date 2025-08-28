import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useCreateChannelModal } from "@/hooks/context/useCreateChannelModal";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { setOpenCreateChanneloMdal } = useCreateChannelModal();
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-purple-600">
        SlackClone
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Features</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2">
            <Card className="p-2">
              <DropdownMenuItem>
                <Link to="/collaboration">Collaboration</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setOpenCreateChanneloMdal(true);
                }}
              >
                <Link to="/channels">Channels</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/integrations">Integrations</Link>
              </DropdownMenuItem>
            </Card>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link to="/pricing" className="text-sm font-medium">
          Pricing
        </Link>

        <Link to="/enterprise" className="text-sm font-medium">
          Enterprise
        </Link>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost">Sign in</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}
