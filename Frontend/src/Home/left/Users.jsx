import User from './User'
const Users = () => {
  return (
    <div className=' py-2 flex-scroll overflow-y-auto'  style={{maxHeight:"calc(84vh - 1vh)"}} >
      <User/> 
      <User/> 
      <User/> 
      <User/> 
      <User/> 
      <User/> 
      <User/> 
      <User/> 
    </div>
  );
};

export default Users;
