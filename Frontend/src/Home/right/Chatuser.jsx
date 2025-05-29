const Chatuser = () => {
  return (
    <>
      <div className="flex space-x-4 pl-5 pt-5 pb-5 h-[12vh] bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
        <div className="avatar avatar-online">
        <div className="w-14 rounded-full">
          <img src="https://img.freepik.com/premium-vector/8000-110_138676-7697.jpg?semt=ais_hybrid&w=740" />
        </div>
      </div>
      </div>

      <div>
        <h1 className="text-xl">Sahitya Singh</h1>
        <span className="text-sm">Online</span>
      </div>
      </div>
    </>
  );
};

export default Chatuser;
