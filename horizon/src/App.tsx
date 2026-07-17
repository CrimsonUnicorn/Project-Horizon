import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <AppLayout>
      <h2 className="text-3xl font-semibold">Main Content</h2>

      <p className="mt-4 text-gray-600">
        This is the content area.
      </p>
    </AppLayout>
  );
}

export default App;