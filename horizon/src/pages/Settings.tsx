function Settings() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-8 text-3xl font-bold">Settings</h1>

      <div className="space-y-8">
        {/* Profile */}
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Profile</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium">
                Name
              </label>

              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-md border p-3"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border p-3"
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Preferences</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="theme" className="mb-2 block text-sm font-medium">
                Theme
              </label>

              <select id="theme" className="w-full rounded-md border p-3">
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>

            <div>
              <label htmlFor="language" className="mb-2 block text-sm font-medium">
                Language
              </label>

              <select id="language" className="w-full rounded-md border p-3">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">
            Notifications
          </h2>

          <label htmlFor="email-notifications" className="flex items-center gap-3">
            <input id="email-notifications" type="checkbox" />

            <span>Email Notifications</span>
          </label>
        </section>

        <div className="flex justify-end">
          <button className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;