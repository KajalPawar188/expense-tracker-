import { useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import Summary from "./Components/Summary";

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleDelete(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  const count = expenses.length;
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4">
      <div className="max-w-md mx-auto">
        {/* App Title */}
        <h1 className="text-3xl font-extrabold text-center text-white mb-6 tracking-tight">
          Expense <span className="text-violet-400">Tracker</span>
        </h1>

        {/* Add Expense Form */}
        <ExpenseForm setExpenses={setExpenses} />

        {/* Expense Summary (Total & Count) */}
        <Summary total={total} count={count} />

        {/* Expense List Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">Expense List</h3>
            <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </div>

          {expenses.length === 0 ? (
            <div className="text-center py-8 bg-slate-800/40 border border-dashed border-slate-700 rounded-2xl text-slate-400 text-sm">
              No expenses added yet.
            </div>
          ) : (
            <ul className="space-y-3">
              {expenses.map((e) => (
                <li
                  key={e.id}
                  className="flex items-center justify-between p-4 bg-slate-800/90 border border-slate-700/80 rounded-xl shadow-md hover:border-slate-600 transition"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-white text-base">
                      {e.title}
                    </span>
                    <span className="text-xs text-violet-400 font-medium mt-0.5">
                      {e.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-base font-bold text-emerald-400">
                      ₹{Number(e.amount).toLocaleString()}
                    </span>

                    <button
                      onClick={() => handleDelete(e.id)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-500/20 text-rose-300 hover:bg-rose-600 hover:text-white transition duration-200 cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
