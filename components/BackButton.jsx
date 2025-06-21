"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="hidden bg-blue-500 rounded-md p-3 tranistion-colors duration-200 hover:bg-blue-700 text-white cursor-pointer"
    >
     <div className="flex items-center space-x-2">
         <IoIosArrowRoundBack className="size-6 group group-hover:transition-transform transition-all duration-200" /><span>Back</span>
     </div>
    </button>
  );
}
