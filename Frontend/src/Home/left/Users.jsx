import getAllUsers from "../../context/getAllUsers";
import User from "./User";
const Users = () => {
  const [allUsers, loading] = getAllUsers();
  console.log("allUsers:", allUsers);

  return (
    <div
      className=" py-2 flex-scroll overflow-y-auto"
      style={{ maxHeight: "calc(84vh - 1vh)" }}
    >
      {allUsers.map((user, index) => {
        return <User key={index} user={user} />;
      })}
    </div>
  );
};

export default Users;
