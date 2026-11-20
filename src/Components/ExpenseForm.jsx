import React, { useState } from "react";

function ExpenseForm({ setExpenses }) {
  const ExpenseType = [
    "Food",
    "Transport",
    "Shoping",
    "Health",
    "Miscellanous"
  ];

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !amount || !category) return;

    const addExpense = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: title,
      amount: Number(amount),
      category: category
    };

    setExpenses((prevExpenses) => [
      ...prevExpenses,
      addExpense
    ]);

    setTitle("");
    setCategory("");
    setAmount("");
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-slate-800/90 border border-slate-700/80 p-6 sm:p-7 rounded-2xl shadow-xl space-y-4"
      >
        {/* Heading */}
        <h2 className="text-xl font-bold text-white text-center mb-5 tracking-wide">
          Add New Expense
        </h2>

        {/* Expense Title */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Expense Title
          </label>
          <input
            type="text"
            required
            value={title}
            placeholder="What's the expense?"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Amount (₹)
          </label>
          <input
            type="number"
            required
            min="1"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white placeholder-slate-400 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
            Category
          </label>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-700/80 border border-slate-600 text-white text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 cursor-pointer [color-scheme:dark]"
          >
            <option value="">Select Category</option>
            {ExpenseType.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-[0.99] text-white font-semibold text-sm transition duration-200 shadow-lg shadow-violet-600/30 cursor-pointer mt-2"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
