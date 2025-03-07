import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { Fragment } from 'react';


function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,{name: uName, age:uAge, college:uCollege, id: Math.random().toString()} ];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
      </React.Fragment>
  );
}

export default App;
