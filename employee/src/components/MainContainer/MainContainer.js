import React, { Component } from "react";
import API from "../../utils/API.js";
import Table from "../Table/table";

class Employees extends Component {
    state= {
        employees: []
         };
    comeponentDidMount(){
        API.getEmployees()
        .then(res => this.setState({employees: res.data.results}))
        // console.log({employees})
        .catch(err => console.log(err))
    }

    // handleInputChange = event => {
    //     this.setState({ search: event.target.value})
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.
    // }

    render(){
        return (
            <div>
                <Table style={{ minHeight: "80%" }}></Table>
            </div>
        )
    }

}


export default Employees;