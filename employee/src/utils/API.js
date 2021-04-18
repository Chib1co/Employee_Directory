import axios from "axios";

    function getEmployees(){
        return axios.get("https://randomuser.me/api/?results=100");
    }
    // function getEmployeesByName(){
    //     return axios.get("https://randomuser.me/api/" + name + /?result)
    // }




export{
    getEmployees
}