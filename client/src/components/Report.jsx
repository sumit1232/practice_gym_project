import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Reports = () => {
  const [filters, setFilters] = useState({
    reportType: '',
    fromDate: '',
    toDate: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

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
            <h1 className="text-2xl font-bold">Reports</h1>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Generate Report
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <select
                name="reportType"
                onChange={handleChange}
                className="border p-2 rounded"
              >
                <option value="">Select Report Type</option>
                <option value="revenue">Revenue Report</option>
                <option value="members">Member Report</option>
                <option value="trainers">Trainer Report</option>
                <option value="payments">Payment Report</option>
                <option value="enquiries">Enquiry Report</option>
              </select>

              <input
                type="date"
                name="fromDate"
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                type="date"
                name="toDate"
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>

            <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
              Generate Report
            </button>
          </div>

          {/* Report Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-bold">₹1,25,000</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">New Members</h3>
              <p className="text-2xl font-bold">42</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">Active Plans</h3>
              <p className="text-2xl font-bold">118</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-gray-500">Pending Payments</h3>
              <p className="text-2xl font-bold text-red-600">7</p>
            </div>
          </div>

          {/* Report Table */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Report Details
            </h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">20 Jan 2025</td>
                  <td className="p-2">Monthly Membership</td>
                  <td className="p-2">₹1,500</td>
                  <td className="p-2 text-green-600">Paid</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2">21 Jan 2025</td>
                  <td className="p-2">Quarterly Membership</td>
                  <td className="p-2">₹4,000</td>
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

export default Reports;
