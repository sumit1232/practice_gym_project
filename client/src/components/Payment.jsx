import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Payment = () => {
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
            <h1 className="text-2xl font-bold">Payments</h1>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              + Add Payment
            </button>
          </div>

          {/* Payment Form */}
          {showForm && (
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">
                Add Payment
              </h2>

              <form className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Member Name"
                  className="border p-2 rounded"
                />

                <select className="border p-2 rounded">
                  <option>Select Plan</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Yearly</option>
                </select>

                <input
                  type="number"
                  placeholder="Amount (₹)"
                  className="border p-2 rounded"
                />

                <select className="border p-2 rounded">
                  <option>Payment Mode</option>
                  <option>Cash</option>
                  <option>UPI</option>
                  <option>Card</option>
                  <option>Net Banking</option>
                </select>

                <input
                  type="date"
                  className="border p-2 rounded"
                />

                <select className="border p-2 rounded">
                  <option>Status</option>
                  <option>Paid</option>
                  <option>Pending</option>
                </select>

                <textarea
                  placeholder="Notes (Optional)"
                  className="border p-2 rounded col-span-2"
                  rows="3"
                />

                <div className="col-span-2 flex gap-4 mt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    Save Payment
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

          {/* Payment Table */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Payment History
            </h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Member</th>
                  <th className="p-2 text-left">Plan</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Mode</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">Sumit Jadhav</td>
                  <td className="p-2">Monthly</td>
                  <td className="p-2">₹1,500</td>
                  <td className="p-2">UPI</td>
                  <td className="p-2">25 Jan 2025</td>
                  <td className="p-2 text-green-600">Paid</td>
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

export default Payment;
