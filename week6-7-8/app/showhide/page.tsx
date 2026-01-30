'use client'
import { useState } from "react";

function ShowHidePage() {
    const [isVisible, setIsVisible] = useState(false);               

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="p-4 justify-center items-center text-center ">
            <h1 className="text-3xl font-bold mb-4">แบบฝึกหัดแสดงหรือซ่อนข้อความ</h1>
            <button onClick={toggleVisibility} className="bg-green-500 text-white p-2 rounded mb-4 text-4xl ">
                {isVisible ? "ซ่อน" : "แสดง"}
            </button>
            {isVisible && <p className="text-xl text-red-600 ">Deekub dek inter</p>}              
                      
 </div>          
    );
}
export default ShowHidePage