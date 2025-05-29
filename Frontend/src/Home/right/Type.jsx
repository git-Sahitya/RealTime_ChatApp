import { BiSolidSend } from "react-icons/bi";
const Type = () => {
  return (
    <>
      <div className="flex space-x-2 pt-1 h-[8vh] text-center bg-gray-800" >
        <div className="w-[80%] mx-4 ">
          <input
            type="text"
            placeholder="Type here"
            className="input input-neutral border border-gray-600 py-3 px-3 
            w-full grow outline-none bg-slate-900 mt-1 rounded-lg"
          />
        </div>
        <button className="text-3xl mb-4 mr-5">
          <BiSolidSend />
        </button>
      </div>
    </>
  );
};

export default Type;
