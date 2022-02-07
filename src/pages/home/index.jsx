import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../apiCalls/getUser/index";
import Button from "../../components/button/button";
import Modal from "../../components/modal";
import { addUser, deleteUser, updateUser } from "../../reducers/users";
import "./index.css";
import UsersTable from "./table";

function HomePage() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [componentModal, setComponentModal] = useState(false);
  const [showCreateNewProject, setShowCreateNewProject] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    phone: "",
    email: "",
  });
  const [mode, setMode] = useState("CR");
  useEffect(() => {
    dispatch(getUsers("This is ana arg"));
    console.log(userList);
  }, []);

  const deleteUserFun = (data) => {
    dispatch(deleteUser(data));
    alert("User deleted");
  };

  const toggleModal = (type, data) => {
    if (type == "CR") {
      setNewUser({
        name: "",
        username: "",
        phone: "",
        email: "",
      });
    }
    setMode(type);
    setShowCreateNewProject(true);
    setComponentModal(!componentModal);
    if (type == "ED") {
      setNewUser(data);
    }
  };

  const createUserFun = (e) => {
    e.preventDefault();
    // basic validation to aviod user from inputing an empty field
    if (
      newUser.name == "" ||
      newUser.username == "" ||
      newUser.phone == "" ||
      newUser.email == ""
    ) {
      return alert("All fields are required");
    }
    toggleModal();
    if (mode == "CR") {
      dispatch(addUser(newUser));
      alert(`${newUser.name} has been added to users`);
    }

    if (mode == "ED") {
      dispatch(updateUser(newUser));
      alert(`${newUser.name} has been edited `);
    }
  };

  return (
    <div className="HomePage">
      <div className="table-wrap">
        <UsersTable
          users={userList}
          toggleModal={toggleModal}
          deleteUser={deleteUserFun}
        />
      </div>

      {showCreateNewProject ? (
        <Modal
          title={`${mode == "CR" ? "Create User" : "Edit User"}`}
          componentModal={componentModal}
          setComponentModal={setComponentModal}
        >
          <div className="createProject">
            <form action="" className="form">
              <div className="inputWrap">
                <label htmlFor="">Full name</label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => {
                    console.log(newUser);
                    setNewUser({ ...newUser, name: e.target.value });
                  }}
                />
              </div>

              <div className="inputWrap">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => {
                    console.log(newUser);
                    setNewUser({ ...newUser, email: e.target.value });
                  }}
                />
              </div>

              <div className="inputWrap">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(e) => {
                    console.log(newUser);
                    setNewUser({ ...newUser, username: e.target.value });
                  }}
                />
              </div>

              <div className="inputWrap">
                <label htmlFor="">Phone num</label>
                <input
                  type="text"
                  value={newUser.phone}
                  onChange={(e) => {
                    console.log(newUser);
                    setNewUser({ ...newUser, phone: e.target.value });
                  }}
                />
              </div>

              <Button
                value={`${mode == "CR" ? "Create User" : "Edit User"}`}
                action={(e) => createUserFun(e)}
              />
            </form>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default HomePage;
