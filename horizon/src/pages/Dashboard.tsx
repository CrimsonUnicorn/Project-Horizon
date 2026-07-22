import { useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";

  const handleTabChange = (tab: string) => {
    setSearchParams({ tab });
  }

  return (
    <>

      <h2 className="text-3xl font-semibold">
        Dashboard
      </h2>

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