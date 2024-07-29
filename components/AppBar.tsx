"use client"
import { useRouter } from "next/navigation";
import { Avatar } from "./BlogCard";

export const AppBar = () => {
    const router=useRouter()
  return (
    <div className="border-b flex justify-between px-10 py-2">
      <button onClick={()=>{router.push("/blogs")}} className="flex justify-center flex-col">
        Medium
      </button>
      <div>
        <button
        onClick={()=>{router.push("/publish")}}
          type="button"
          className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
          font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Create a Blog
        </button>
        <Avatar name="harkirat" size={10} />
      </div>
    </div>
  );
};