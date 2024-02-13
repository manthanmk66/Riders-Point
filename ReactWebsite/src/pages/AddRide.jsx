import React from 'react'

const AddRide = () => {
  return (
    <div className="container mx-auto p-96 text-3xl flex-row font-roboto">
    {/* <h1 className="text-3xl font-bold mb-8">Add Ride</h1> */}
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="destination" className="block text-gray-700  font-bold mb-2">Destination</label>
        <input type="text" id="destination" name="destination" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="origin" className="block text-gray-700 font-bold mb-2">Origin</label>
        <input type="text" id="origin" name="origin" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
        <input type="date" id="date" name="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Ride
      </button>
    </form>
  </div>
  )
}

export default AddRide