import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";
import icons from "./icons";

export default function Table({ users, toggleModal, deleteUser }) {
  console.log(users);
  return (
    <MaterialTable
      components={{
        Container: (props) => <Paper {...props} elevation={0} />,
      }}
      icons={icons}
      options={{
        exportButton: true,
        pageSize: 13,
      }}
      columns={[
        { title: "ID", field: "ID" },
        { title: "Name", field: "name" },
        { title: "Username", field: "username" },
        { title: "Contact Phone", field: "phone" },
        { title: "Email", field: "email" },
        { title: "Actions", field: "action" },
      ]}
      data={users.map((data) => {
        return {
          ID: data.id,
          name: data.name,
          username: data.username,
          phone: data.phone,
          email: data.email,
          action: (
            <div className="app-table-btn">
              <button onClick={() => toggleModal("CR", null)}>
                Create user
              </button>
              <button onClick={() => toggleModal("ED", data)}>Edit</button>
              <button onClick={() => deleteUser(data)}>Delete</button>
            </div>
          ),
        };
      })}
      title="Users"
    />
  );
}
