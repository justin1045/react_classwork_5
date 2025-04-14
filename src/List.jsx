import React from 'react';

function List({ arr , handleEdit }) {
  return (
    <div className="mt-8 p-6 bg-white shadow-lg rounded-xl max-w-3xl mx-auto">
      {/* Headings for Subject, Hours, and Update Time */}
      <div className="mb-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="text-lg font-semibold text-gray-900">Subject</div>
          <div className="text-lg font-semibold text-gray-900 text-center">Hours</div>
          <div className="text-lg font-semibold text-gray-900 text-center">Update Time</div>
        </div>
      </div>

      <ul className="space-y-4">
        {arr.length > 0 ? (
          arr.map((obj) => (
            <li key={obj.id} className="grid grid-cols-3 gap-6 items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300">
              {/* Subject Section */}
              <div className="text-lg font-medium text-gray-800">{obj.subject}</div>

              {/* Hours Section */}
              <div className="text-lg font-medium text-gray-800 text-center">{obj.hours} Hours</div>

              {/* Update Time Section with + and - */}
              <div className="flex items-center justify-center space-x-4">
                <span className="text-lg font-medium text-gray-800">{obj.updateTime}</span>
                <span onClick={()=>handleEdit(obj.id , "+")}  className="bg-green-600 text-white px-5 py-2 text-lg font-bold rounded-lg cursor-pointer hover:bg-green-700 active:bg-green-800 transition-all shadow-md hover:shadow-lg">
                  +
                </span>
                <span onClick={()=>handleEdit(obj.id ,"-")} className="bg-red-600 text-white px-5 py-2 text-lg font-bold rounded-lg cursor-pointer hover:bg-red-700 active:bg-red-800 transition-all shadow-md hover:shadow-lg">
                  -
                </span>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No subjects added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default List;
