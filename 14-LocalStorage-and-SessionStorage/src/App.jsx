import { useState, useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [savedUsername, setSavedUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [sessionNote, setSessionNote] = useState("");
  const [savedNote, setSavedNote] = useState(
    sessionStorage.getItem("note") || ""
  );

  // Save username to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("username", username);
    setSavedUsername(username);
  };

  // Save note to sessionStorage
  const saveToSessionStorage = () => {
    sessionStorage.setItem("note", sessionNote);
    setSavedNote(sessionNote);
  };

  // Clear all storages
  const clearLocalStorage = () => {
    localStorage.removeItem("username");
    setSavedUsername("");
  };

  const clearSessionStorage = () => {
    sessionStorage.removeItem("note");
    setSavedNote("");
  };

  // Keep state synced if other tabs modify storage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "username") setSavedUsername(e.newValue || "");
      if (e.key === "note") setSavedNote(e.newValue || "");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">
        React Storage Demo
      </h1>

      {/* LocalStorage Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          LocalStorage (Persistent)
        </h2>
        <input
          type="text"
          className="border rounded w-full p-2 mb-3 focus:ring-2 focus:ring-blue-400"
          placeholder="Enter username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            onClick={saveToLocalStorage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            onClick={clearLocalStorage}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
        {savedUsername && (
          <p className="mt-4 text-gray-600">
            ✅ Saved username:{" "}
            <span className="font-semibold">{savedUsername}</span>
          </p>
        )}
      </div>

      {/* SessionStorage Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          SessionStorage (Tab Only)
        </h2>
        <input
          type="text"
          className="border rounded w-full p-2 mb-3 focus:ring-2 focus:ring-green-400"
          placeholder="Enter session note..."
          value={sessionNote}
          onChange={(e) => setSessionNote(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            onClick={saveToSessionStorage}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Save
          </button>
          <button
            onClick={clearSessionStorage}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
        {savedNote && (
          <p className="mt-4 text-gray-600">
            🕒 Saved note (session):{" "}
            <span className="font-semibold">{savedNote}</span>
          </p>
        )}
      </div>
    </div>
  );
}
