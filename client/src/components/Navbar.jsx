import React from 'react'

const Navbar = () => {
  return (
  <>
      {/* <!-- Navbar (item-1) --> */}
    <header className="row-start-1 row-end-2 col-start-1 col-end-5 bg-blue-800 text-white flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Gym Management Dashboard</h1>
      <div className="flex items-center gap-4">
        <span>Admin</span>
        <img src="https://i.pravatar.cc/40" className="rounded-full" />
      </div>
    </header>
  </>
  )
}

export default Navbar
