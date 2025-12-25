import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Trainers = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({ fullname: '', email: '', number: '', specialization: '', experience: '', status: '' })

  const dataHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const saveform = (e) => {
    e.preventDefault()
    console.log(data);
    alert('form submited...')
    setData({fullname: '', email: '', number: '', specialization: '', experience: '', status: '' })
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
              <h1 className="text-2xl font-bold">Trainers</h1>

              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                + Add Trainer
              </button>
            </div>

            {/* Trainer Form */}
            {showForm && (
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">
                  Add New Trainer
                </h2>

                <form className="grid grid-cols-2 gap-4" onSubmit={saveform}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    id='fullname'
                    name='fullname'
                    value={data.fullname}
                    onChange={dataHandler}
                    className="border p-2 rounded"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    id='email'
                    name='email'
                    value={data.email}
                    onChange={dataHandler}
                    className="border p-2 rounded"
                  />

                  <input
                    type="number"
                    id='number'
                    name='number'
                    value={data.number}
                    onChange={dataHandler}
                    placeholder="Phone Number"
                    className="border p-2 rounded"
                  />

                  <input
                    type="text"
                    id='specialization'
                    name='specialization'
                    value={data.specialization}
                    onChange={dataHandler}
                    placeholder="Specialization (Yoga, Cardio, etc.)"
                    className="border p-2 rounded"
                  />

                  <input
                    type="number"
                    placeholder="Experience (Years)"
                    id='experience'
                    name='experience'
                    value={data.experience}
                    onChange={dataHandler}
                    className="border p-2 rounded"
                  />

                  <select className="border p-2 rounded" id='status' name='status' value={data.status}
                    onChange={dataHandler}
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
                      Save Trainer
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

            {/* Trainer Table */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">
                Trainer List
              </h2>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Specialization</th>
                    <th className="p-2 text-left">Experience</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-2">Rohit Kumar</td>
                    <td className="p-2">Strength Training</td>
                    <td className="p-2">5 Years</td>
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

export default Trainers;
