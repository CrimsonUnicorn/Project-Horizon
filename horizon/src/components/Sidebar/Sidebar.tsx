import {NavLink} from "react-router-dom";

const navigation = [
  { id: 1, label: "Dashboard", active: true, path: "/" },
  { id: 2, label: "Reports", active: false, path: "/reports" },
  { id: 3, label: "Settings", active: false, path: "/settings" },
  { id: 4, label: "Profile", active: false, path: "/profile" },
];

function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-800 bg-slate-900 p-4 text-white sm:p-5 md:min-h-screen md:w-[260px] md:border-b-0 md:border-r">
      <h1 className="mb-8 text-center text-2xl font-bold tracking-tight text-violet-400 md:text-left">Project Horizon</h1>

      <nav>
        <ul className="mt-6 flex flex-col items-center space-y-2 md:items-stretch">
          {navigation.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block w-40 rounded-md px-4 py-2 text-center transition-colors md:w-full md:text-left ${
                    isActive
                      ? "bg-violet-600 text-white shadow-md"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200"
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