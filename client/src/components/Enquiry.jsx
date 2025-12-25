import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Enquiry = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState({ fullName: '', phoneNumber: '', email: '', plan: '', source: '', status: '', notes: '' })

  const dataHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  const saveForm = (e) => {
    alert('Form Submited..')
    e.preventDefault();
    console.log(data);
    setData({ fullName: '', phoneNumber: '', email: '', plan: '', source: '', status: '', notes: '' })
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
              <h1 className="text-2xl font-bold">Enquiries</h1>

              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
              >
                + Add Enquiry
              </button>
            </div>

            {/* Enquiry Form */}
            {showForm && (
              <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-4">
                  New Enquiry
                </h2>

                <form className="grid grid-cols-2 gap-4" onSubmit={saveForm}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    id='fullName'
                    name='fullName'
                    value={data.fullName}
                    onChange={dataHandler}
                    className="border p-2 rounded"
                  />

                  <input
                    type="number"
                    placeholder="Phone Number"
                    id='phoneNumber'
                    name='phoneNumber'
                    value={data.phoneNumber}
                    onChange={dataHandler}
                    className="border p-2 rounded"
                  />

                  <input
                    type="email"
                    placeholder="Email (Optional)"
                    id='email'
                    name='email'
                    value={data.email}
                    onChange={dataHandler}
                    className="border p-2 rounded"
                  />

                  <select className="border p-2 rounded" id='plan' name='plan' value={data.plan}
                    onChange={dataHandler}>
                    <option>Interested Plan</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>

                  <select className="border p-2 rounded" id='source' name='source' value={data.source}
                    onChange={dataHandler}>
                    <option>Source</option>
                    <option>Walk-in</option>
                    <option>Instagram</option>
                    <option>Referral</option>
                    <option>Website</option>
                  </select>

                  <select className="border p-2 rounded" id='status' name='status' value={data.status}
                    onChange={dataHandler}>
                    <option>Status</option>
                    <option>New</option>
                    <option>Follow-up</option>
                    <option>Converted</option>
                  </select>

                  <textarea
                    placeholder="Notes"
                    id='notes'
                    name='notes'
                    value={data.notes}
                    onChange={dataHandler}
                    className="border p-2 rounded col-span-2"
                    rows="3"
                  />

                  <div className="col-span-2 flex gap-4 mt-4">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                    >
                      Save Enquiry
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

            {/* Enquiry Table */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">
                Enquiry List
              </h2>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">Name</th>
                    <th className="p-2 text-left">Phone</th>
                    <th className="p-2 text-left">Plan</th>
                    <th className="p-2 text-left">Source</th>
                    <th className="p-2 text-left">Status</th>
                    <th className="p-2 text-left">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-2">Amit Verma</td>
                    <td className="p-2">9876543210</td>
                    <td className="p-2">Monthly</td>
                    <td className="p-2">Instagram</td>
                    <td className="p-2 text-yellow-600">Follow-up</td>
                    <td className="p-2">
                      <button className="text-blue-600 hover:underline">
                        Update
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

export default Enquiry;
