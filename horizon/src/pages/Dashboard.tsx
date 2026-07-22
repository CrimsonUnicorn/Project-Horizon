import { useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const activeTab = searchParams.get("tab") || "overview";

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("tab", tab);

    setSearchParams(params);
};
  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
        params.set("search", value);
    } else {
        params.delete("search");
    }

    setSearchParams(params);
};

  return (
    <>

      <h2 className="text-3xl font-semibold">
        Dashboard
      </h2>
      <input
    type="text"
    placeholder="Search..."
    value={search}
    onChange={handleSearchChange}
    className="mt-6 w-full rounded-md border p-2"
/>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => handleTabChange("overview")}
          className={`rounded-md px-4 py-2 transition ${activeTab === "overview"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}

        >
          Overview
        </button>

        <button
          onClick={() => handleTabChange("analytics")}
          className={`rounded-md px-4 py-2 transition ${activeTab === "analytics"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}

        >
          Analytics
        </button>

        <button
          onClick={() => handleTabChange("activity")}
          className={`rounded-md px-4 py-2 transition ${activeTab === "activity"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
            }`}

        >
          Activity
        </button>
      </div>

      <div className="mt-8">
        {activeTab === "overview" &&
          <>
            <h3 className="text-xl font-semibold">Overview</h3>
            <p className="mt-2 text-gray-600">
              Welcome to your dashboard overview.
            </p>
          </>
        }

        {activeTab === "analytics" &&
          <>
            <h3 className="text-xl font-semibold">Analytics</h3>
            <p className="mt-2 text-gray-600">
              Here's your analytics information.
            </p>
          </>
        }

        {activeTab === "activity" &&
          <>
            <h3 className="text-xl font-semibold">Activity</h3>
            <p className="mt-2 text-gray-600">
              Here's your activity information.
            </p>
          </>
        }
      </div>

    </>
  );
}

export default Dashboard;