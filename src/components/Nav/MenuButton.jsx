import { Menu, X } from "lucide-react";

export const MenuButton = ({ open, toggle }) => (
  <button onClick={toggle} className="md:hidden text-green-400 hover:text-white transition-colors">
    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
);
