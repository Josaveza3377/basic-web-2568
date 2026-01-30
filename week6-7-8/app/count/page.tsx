"use client";
import { useState } from "react";

function CountPage() {
  const [count, setCount] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          บทเรียนที่ 2: State ของการเพิ่มลดตัวเลข
        </h1>
       </div>
      <div className="flex justify-center my-10">
        <div className="bg-white shadow-xl rounded-2xl p-12  text-center border border-gray-100">
          <h1 className="text-8xl font-black text-blue-600 leading-none">{count}
          </h1>
        </div>
      </div>
       <div className="flex justify-center items-center gap-6">
        <button
          className="px-10 py-4 text-2xl font-semibold bg-blue-500 hover:bg-blue-600 active:scale-95 transition-all rounded-2xl cursor-pointer text-white shadow-lg shadow-red-200"
          onClick={() => setCount(count + 1)}  >
          เพิ่ม +
        </button>
        <button
          className="px-10 py-4 text-2xl font-semibold bg-red-500 hover:bg-red-600 active:scale-95 transition-all rounded-2xl cursor-pointer text-white shadow-lg shadow-blue-200"
          onClick={() => setCount(count -1)}>
          ลด -
        </button>
      </div>
    </div>
  );
}
export default CountPage;