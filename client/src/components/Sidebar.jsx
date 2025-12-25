import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="row-start-2 row-end-4 col-start-1 col-end-2 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold mb-6">🏋️ Gym Admin</h2>

        <ul className="space-y-4">


          <li>
            <Link
              to="/"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Dashboard
            </Link>
          </li>
          
          <li>
            <Link
              to="/enquiry"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Enquiry
            </Link>
          </li>

          <li>
            <Link
              to="/member"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Members
            </Link>
          </li>

          <li>
            <Link
              to="/trainer"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Trainers
            </Link>
          </li>

          <li>
            <Link
              to="/plans"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Plans
            </Link>
          </li>


          <li>
            <Link
              to="/payments"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Payments
            </Link>
          </li>

          <li>
            <Link
              to="/reports"
              className="hover:text-blue-300 cursor-pointer block"
            >
              Reports
            </Link>
          </li>

        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
