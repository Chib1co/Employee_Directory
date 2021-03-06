import React from 'react';
import "./style.css";


function Table(props) {
    // const employees = props.employees;
     console.log(props.employees);
    return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Image</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email{" "}<button className='filter' onClick={props.sortEmail}><i className="fas fa-sort"></i></button></th>
                <th scope="col">Phone{" "}<button className='filter' onClick={props.sortPhone}><i className="fas fa-sort"></i></button></th>
            </tr>
        </thead>
        <tbody>
            {props.employees.map((employee) =>
                <tr key={employee.cell} value={employee}>
                    <td>
                        <img src={employee.picture.thumbnail} alt="profile" />
                    </td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.email}</td>
                    <td>{employee.cell}</td>
                </tr>
            )}
        </tbody>
    </table>
    )
}

export default Table