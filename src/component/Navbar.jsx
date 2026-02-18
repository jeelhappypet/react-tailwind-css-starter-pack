import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementByAmount, multiply, reset } from "../redux/slice/counterSlice";



const Navbar = () => {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
const Amount = 10;

  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6 shadow-xl">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
          Redux Counter
        </h2>
        <button type="submit" onClick={() => dispatch(reset())} className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
          Reset
        </button>
      </div>

      <div className="mb-6 rounded-2xl bg-white/80 p-6 text-center shadow-inner">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Current Value
        </p>
        <h1 className="text-5xl font-black text-slate-900">{count}</h1>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => dispatch(decrement())}
          className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
        >
          - {count}
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(Amount))}
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
        >
          + {Amount}
        </button>
        <button
          onClick={() => dispatch(multiply())}
          className="rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100"
        >
          x 2
        </button>
      </div>
    </div>
  );
};

export default Navbar;
