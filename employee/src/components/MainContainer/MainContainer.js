import React, { useState, useEffect} from "react";
import {getEmployees} from "../../utils/API.js";
import Table from "../Table/table";


export default function MainContainer() {
    const[employees, setEmployees] = useState([]);
    // state= {
    //     employees: [],
    //     search: ""
    //      };
  
//switch to useEffect nomore componentDidMoubt
    useEffect(()=>{
        getEmployees()
        .then(res => setEmployees(res.data.results))
        .catch(err => console.log(err))
    }, []);


    // handleInputChange = event => {
    //     this.setState({ search: event.target.value})
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.
    // }

        return (
            <div>
                <Table employees={employees} style={{ minHeight: "80%" }}></Table>
            </div>
        )
    

}
