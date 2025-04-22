import React from "react"
import useStore from "../../zustand/store";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

function AdminPage(props) {
  const allUsers = useStore((state) => state.allUsers);

  useEffect(() => {
    console.log(allUsers);
  },[]);

  const back = () => {
    navigate(-1);
  }
  return (
    <div id="background" >
      <h1>Welcome back admin!</h1>
      <h4>View users:</h4>
      <section className="users" >

            <div id='backgroundList'>
            <thead>
            <tr>
              <th>Name:</th>
              <th>Username:</th>
              <th>Password:</th>
              <th>Is admin?</th>
            </tr>
            </thead>
            <tbody>
            {allUsers?.map((user) => {
          return (
              <tr key={user.id} id={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.is_admin}</td>
              </tr>
             
          )
        }
      )}
      </tbody>
      </div>
      </section>
    <Button id='button' variant="dark" onClick={back} >Back</Button>
    </div>
  )
};

export default AdminPage;
