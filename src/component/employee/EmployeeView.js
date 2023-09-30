import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const loadEmployees = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/employees");
    setEmployees(response.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/employees/delete/${id}`);
    loadEmployees();
  };

  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees
            .filter((em) => em.firstName.toLowerCase().includes(search))
            .map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
                <td className="mx-2">
                  <Link
                    to={`/employee-profile/${employee.id}`}
                    className="btn btn-primary"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-employee/${employee.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(employee.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeView;
