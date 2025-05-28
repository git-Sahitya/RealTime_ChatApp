import { TbLogout2 } from "react-icons/tb";


const Logout = () => {
  return (
    <div className=" w-[4%]  bg-slate-950 text-white flex flex-col justify-end">
      <div className="p-3">
        <div className="flex space-x-3">
          <button>
           <TbLogout2 className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
