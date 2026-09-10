import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 px-4 sm:px-16 lg:px-24  flex items-center justify-between">
      <div>
        <LinksDropdown />
      </div>
      <div className="flex items-center gap-x-4">
        <ModeToggle />
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
