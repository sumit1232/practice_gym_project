import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Reports = () => {
  const [data, setData] = useState({ reportType: '', fromDate: '', toDate: '' })

  const handleChange = (e) => {
    console.log(e.target.value);
    const {name,value} = e.target;
    setData({...data,[name]: value })
  }

  const saveform = (e) => {
    e.preventDefault();
    alert('form submited...');
    console.log(data);
    setData({reportType: '', fromDate: '', toDate: ''})
  }


  return (
    <div className="bg-gray-100 h-screen">
      <div className="grid grid-rows-[4rem_auto_45px] grid-cols-4 gap-1 h-full">

        <Sidebar />
        <Navbar />

        {/* Main Content */}
        <main className="row-start-2 col-start-2 col-end-5 p-6 space-y-6">

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Reports</h1>
          </div>

          {/* Filters Form */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">
              Generate Report
            </h2>

            <form onSubmit={saveform}>
              <div className="grid grid-cols-3 gap-4" >
                {/* Report Type */}
                <select
                  id="reportType"
                  name="reportType"
                  value={data.reportType}
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

                {/* From Date */}
                <input
                  type="date"
                  id="fromDate"
                  name="fromDate"
                  value={data.fromDate}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />

                {/* To Date */}
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                  value={data.toDate}
                  onChange={handleChange}
                  className="border p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
              >
                Generate Report
              </button>
            </form>
          </div>

          {/* Summary Cards */}
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
              </tbody>
            </table>
          </div>

        </main>

        <footer className="row-start-3 col-start-2 col-end-5 bg-gray-200 flex items-center justify-center text-sm">
          © 2025 Gym Management System
        </footer>
      </div>
    </div>
  );
};

export default Reports;
