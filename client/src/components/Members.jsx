import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Members = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({ fullName: '', email: '', phoneNumber: '', plan: '', date: '', status: '' })

  const handleData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const saveform = (e) => {
    e.preventDefault();
    alert('Form Submited....');
    setData({ fullName: '', email: '', phoneNumber: '', plan: '', date: '', status: '' })
    console.log(data);
  }

  return (
    <>
      <div className="bg-gray-100 h-screen">
        {/* Grid Container */}
        <div className="grid grid-rows-[4rem_auto_45px] grid-cols-4 gap-1 h-full">

          <Sidebar />
          <Navbar />

          {/* Main Content */}
          <main className="row-start-2 col-start-2 col-end-5 p-6 space-y-6">

            {/* Header */}
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Members</h1>

              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                + Add Member
              </button>
            </div>

            {/* Member Form */}
            {showForm && (
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">
                  Add New Member
                </h2>

                <form className="grid grid-cols-2 gap-4" onSubmit={saveform}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    id='fullName'
                    name='fullName'
                    value={data.fullName}
                    onChange={handleData}
                    className="border p-2 rounded"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    id='email'
                    name='email'
                    value={data.email}
                    onChange={handleData}
                    className="border p-2 rounded"
                  />

                  <input
                    type="number"
                    placeholder="Phone Number"
                    id='phoneNumber'
                    name='phoneNumber'
                    value={data.phoneNumber}
                    onChange={handleData}
                    className="border p-2 rounded"
                  />

                  <select className="border p-2 rounded" id='plan' name='plan' value={data.plan}
                    onChange={handleData}
                  >
                    <option>Select Plan</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>

                  <input
                    type="date"
                    className="border p-2 rounded"
                    id='date'
                    name='date'
                    value={data.date}
                    onChange={handleData}
                  />

                  <select className="border p-2 rounded" id='status' name='status' value={data.status}
                    onChange={handleData}
                  >
                    <option>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>

                  <div className="col-span-2 flex gap-4 mt-4">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                      Save Member
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

            {/* Member Table */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">
                Member List
              </h2>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Plan</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-2">Sumit</td>
                    <td className="p-2">Monthly</td>
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
    </>
  );
};

export default Members;
