import React from "react";

function Summary({ total, count }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {/* Total Amount Card */}
      <div className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-lg">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Total Spent
        </p>
        <p className="text-2xl sm:text-3xl font-extrabold text-violet-400 mt-1">
          ₹{total.toLocaleString()}
        </p>
      </div>

      {/* Count Card */}
      <div className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl shadow-lg">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          Total Items
        </p>
        <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mt-1">
          {count}
        </p>
      </div>
    </div>
  );
}

export default Summary;
