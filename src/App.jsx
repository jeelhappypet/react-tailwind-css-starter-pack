import "./App.css";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const Copy = () => toast.success("Password copied successfully");

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";
    let char = "";
    if (useUppercase) char += uppercaseChars;
    if (!useLowercase) char += lowercaseChars;
    if (!useNumbers) char += numberChars;
    if (!useSymbols) char += symbolChars;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * char.length);
      newPassword += char.charAt(randomIndex);
    }
    setPassword(newPassword);
  };

  const GenBtn = () => toast.success("Password generated successfully");
  const GenBtnErr = () => toast.error("Password not generated ");

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <Toaster position="top-right" />
      <div className="flex flex-col gap-8 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">
            Password Generator
          </h1>
        </div>

        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/20 p-8 space-y-6">
          <div className="bg-slate-950 rounded-lg p-4 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <input
              type="text"
              placeholder="Your password will appear here"
              readOnly
              className="w-full bg-transparent text-white text-2xl font-mono font-bold outline-none placeholder-slate-500 tracking-widest"
              value={password}
            />
            <button
              className="w-full mt-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
              onClick={() =>
                navigator.clipboard.writeText(
                  document.querySelector("input").value,
                )
              }
              onMouseDown={Copy}
            >
              Copy
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-white font-semibold text-lg">Length</label>
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                {length}
              </span>
            </div>
            <input
              type="range"
              defaultValue={8}
              min="8"
              max="32"
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
              onChange={(e) => setLength(e.target.value)}
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>8</span>
              <span>32</span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
              <input
                type="checkbox"
                name="uppercase"
                id="uppercase"
                className="w-5 h-5 rounded cursor-pointer accent-purple-600"
                checked={useUppercase}
                onChange={() => setUseUppercase(!useUppercase)}
              />
              <label
                htmlFor="uppercase"
                className="text-white font-medium flex-1 cursor-pointer group-hover:text-purple-300 transition-colors"
              >
                Uppercase Letters
              </label>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
              <input
                type="checkbox"
                name="lowercase"
                id="lowercase"
                className="w-5 h-5 rounded cursor-pointer accent-purple-600"
                onChange={() => setUseLowercase(!useLowercase)}
              />
              <label
                htmlFor="lowercase"
                className="text-white font-medium flex-1 cursor-pointer group-hover:text-purple-300 transition-colors"
              >
                Lowercase Letters
              </label>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
              <input
                type="checkbox"
                name="symbol"
                id="symbol"
                className="w-5 h-5 rounded cursor-pointer accent-purple-600"
                onChange={() => setUseSymbols(!useSymbols)}
              />
              <label
                htmlFor="symbol"
                className="text-white font-medium flex-1 cursor-pointer group-hover:text-purple-300 transition-colors"
              >
                Symbols
              </label>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer group">
              <input
                type="checkbox"
                name="number"
                id="number"
                className="w-5 h-5 rounded cursor-pointer accent-purple-600"
                onChange={() => setUseNumbers(!useNumbers)}
              />
              <label
                htmlFor="number"
                className="text-white font-medium flex-1 cursor-pointer group-hover:text-purple-300 transition-colors"
              >
                Numbers
              </label>
            </div>
          </div>

          <button
            className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 hover:from-purple-500 hover:via-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg text-lg mt-6"
            onMouseDown={() => {
              if (
                !useUppercase ||
                useLowercase ||
                useNumbers ||
                useSymbols === false
              ) {
                GenBtn();
              } else {
                GenBtnErr();
              }
            }}
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
