import {NavLink} from "react-router-dom";

const navigation = [
  { id: 1, label: "Dashboard", active: true, path: "/" },
  { id: 2, label: "Reports", active: false, path: "/reports" },
  { id: 3, label: "Settings", active: false, path: "/settings" },
  { id: 4, label: "Profile", active: false, path: "/profile" },
];

function Sidebar() {
  return (
    <aside className="w-full border-b bg-white p-4 sm:p-5 md:min-h-screen md:w-[260px] md:border-b-0 md:border-r">
      <h1 className="mb-8 text-2xl font-bold">Project Horizon</h1>

      <nav>
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `w-full rounded-md px-4 py-2 text-left transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;