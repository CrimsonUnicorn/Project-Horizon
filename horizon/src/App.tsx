import Dashboard from "./pages/Dashboard";
import AppLayout from "./layouts/AppLayout";
import {Routes, Route} from "react-router-dom";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profiles from "./pages/Profiles";
import Forbidden from "./pages/Forbidden";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </AppLayout>
  );
}

export default App;