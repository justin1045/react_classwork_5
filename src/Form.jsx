import React from "react";

function Form({ setSubject, setHours, handleSubmit, subject, hours }) {
  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-xl">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        ✌️ Plan Your Study ✌️
      </h1>

      <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <input
            required
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className=" w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
          />
        </div>
        <div>
          <input
            required
            type="number"
            placeholder="Enter Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className=" w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200 ease-in-out"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
