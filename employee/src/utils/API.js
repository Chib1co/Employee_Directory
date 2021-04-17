import axios from "axios";

    function getEmployees(){
        return axios.get("https://randomuser.me/api/?results=100");
    }
    // getEmployeesByName: function(){
    //     return axios.get("https://randomuser.me/api/" + name + )
    // }




export default getEmployees