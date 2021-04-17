import React from 'react';
import "./style.css";

function Table(props) {
    console.log(props);
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>
        <tbody>
            {props.results.map(result =>
                <tr>
                    <td>
                        <img src={result.picture.thumbnail} alt="profile" />
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            )}
        </tbody>
    </table>

}

export default Table