import React, { useState, useEffect} from "react";
import {getEmployees} from "../../utils/API.js";
import Table from "../Table/table";


export default function MainContainer() {
    const[employees, setEmployees] = useState([]);
    const[search, setSearch] = useState("");
  
//switch to useEffect no more componentDidMoubt
    useEffect(()=>{
        getEmployees()
        .then(res => setEmployees(res.data.results))
        .catch(err => console.log(err))
    }, []);


    const handleInputChange = event => {
        setSearch(event.target.value)
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        setEmployees(employees.filter(employee => search.indexOf(employee.name.first)> -1 || search.indexOf(employee.name.last)> -1))
    };

    const sortEmail = event => {
        setEmployees(...employees.sort(function(item1, item2){
            if(item1.email < item2.emalt){
                return -1
            }
            if(item1.email > item2.email){
                return 0
            }
        })
        )
    }

    const clearSearch = event => {
        setSearch("");
        getEmployees()
        .then(res => setEmployees(res.data.results))
        .catch(err => console.log(err))
    };

        return (
            <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
            {/* search function */}
            <div className="input-group mb-3 float-center">
                <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee by Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-danger" onClick={clearSearch}><i className="fas fa-sort"></i></button>
                <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
            </div>
            <div style={{display: "flex", justifyContent: "center",  margin: "auto", color: "gray"}}>
                <p><small>Click sort button next to Email to sorting employees by Email</small></p>
            </div>        
                <Table employees={employees} style={{ minHeight: "80%" }} list={employees} sortEmail={sortEmail}></Table>
            </div>
        )
    
        

}
