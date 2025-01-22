import { useRouter } from "next/router";
import { useState } from "react";

export default function Connection() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //nothing for the moment
    router.push("/intranet"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Intranet Connection</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}
