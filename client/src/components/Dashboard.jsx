import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
   <>

  {/* <!-- Grid Container --> */}
  <div className="grid grid-rows-[4rem_auto_45px] grid-cols-4 gap-1 h-full">

   <Sidebar />
    <Navbar />
    {/* <!-- Main Content --> */}
    <main className="row-start-2 col-start-2 col-end-5 p-6 space-y-6">

      {/* <!-- Stats Cards --> */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Total Members</h3>
          <p className="text-2xl font-bold">245</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Active Plans</h3>
          <p className="text-2xl font-bold">120</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Trainers</h3>
          <p className="text-2xl font-bold">18</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-gray-500">Monthly Revenue</h3>
          <p className="text-2xl font-bold">₹85,000</p>
        </div>
      </div>

      {/* <!-- Table Section --> */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Recent Members</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">Name</th>
              <th className="p-2">Plan</th>
              <th className="p-2">Status</th>
              <th className="p-2">Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-2">Rahul Sharma</td>
              <td className="p-2">Gold</td>
              <td className="p-2 text-green-600">Active</td>
              <td className="p-2">12 Sep</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-2">Amit Patil</td>
              <td className="p-2">Silver</td>
              <td className="p-2 text-red-600">Expired</td>
              <td className="p-2">02 Aug</td>
            </tr>
          </tbody>
        </table>
      </div>

    </main>

    {/* <!-- Footer --> */}
    <footer className="row-start-3 col-start-2 col-end-5 bg-gray-200 flex items-center justify-center text-sm">
      © 2025 Gym Management System
    </footer>

  </div>



   </>
  )
}

export default Dashboard
