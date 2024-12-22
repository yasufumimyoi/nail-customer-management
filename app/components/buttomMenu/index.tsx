import { Home, User, Settings, CirclePlus } from "lucide-react";
import { NavLink } from "@remix-run/react";

export const BottomNavigation = () => {
  return (
    <div className="fixed rounded-full bottom-2 left-1/2 transform -translate-x-1/2 w-[97%] bg-white border z-50">
      <div className="flex justify-around h-16 items-center">
        <NavLink
          to="/"
          className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 flex flex-col items-center"
        >
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </NavLink>
        <NavLink
          to="/clients"
          className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 flex flex-col items-center"
        >
          <User className="h-6 w-6" />
          <span className="text-xs">Clients</span>
        </NavLink>
        <NavLink
          to="/post"
          className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 flex flex-col items-center"
        >
          <CirclePlus className="h-6 w-6" />
          <span className="text-xs">Post</span>
        </NavLink>
        <NavLink
          to="/settings"
          className="justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 flex flex-col items-center"
        >
          <Settings className="h-6 w-6" />
          <span className="text-xs">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};
