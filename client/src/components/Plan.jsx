import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Plan = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-100 h-screen">
      {/* Grid Container */}
      <div className="grid grid-rows-[4rem_auto_45px] grid-cols-4 gap-1 h-full">

        <Sidebar />
        <Navbar />

        {/* Main Content */}
        <main className="row-start-2 col-start-2 col-end-5 p-6 space-y-6">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Membership Plans</h1>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
            >
              + Add Plan
            </button>
          </div>

          {/* Plan Form */}
          {showForm && (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">
                Create New Plan
              </h2>

              <form className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Plan Name (Monthly / Quarterly)"
                  className="border p-2 rounded"
                />

                <input
                  type="number"
                  placeholder="Price (₹)"
                  className="border p-2 rounded"
                />

                <input
                  type="number"
                  placeholder="Duration (Days)"
                  className="border p-2 rounded"
                />

                <select className="border p-2 rounded">
                  <option>Plan Type</option>
                  <option>Gym</option>
                  <option>Yoga</option>
                  <option>Personal Training</option>
                </select>

                <select className="border p-2 rounded">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>

                <textarea
                  placeholder="Plan Description"
                  className="border p-2 rounded col-span-2"
                  rows="3"
                />

                <div className="col-span-2 flex gap-4 mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    Save Plan
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Plan Table */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Available Plans
            </h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Plan Name</th>
                  <th className="p-2 text-left">Price</th>
                  <th className="p-2 text-left">Duration</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">Monthly</td>
                  <td className="p-2">₹1,500</td>
                  <td className="p-2">30 Days</td>
                  <td className="p-2">Gym</td>
                  <td className="p-2 text-green-600">Active</td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">Yearly</td>
                  <td className="p-2">₹15,000</td>
                  <td className="p-2">365 Days</td>
                  <td className="p-2">Gym + Cardio</td>
                  <td className="p-2 text-green-600">Active</td>
                  <td className="p-2">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>

        {/* Footer */}
        <footer className="row-start-3 col-start-2 col-end-5 bg-gray-200 flex items-center justify-center text-sm">
          © 2025 Gym Management System
        </footer>

      </div>
    </div>
  );
};

export default Plan;
