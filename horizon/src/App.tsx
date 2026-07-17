import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-semibold">Main Content</h2>
        <p className="mt-4 text-gray-600">
          This is the content area.
        </p>
      </main>
    </div>
  );
}

export default App;