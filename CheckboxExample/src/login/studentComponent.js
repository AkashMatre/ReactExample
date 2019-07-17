import React , { Component } from 'react';

class StudentComponent extends Component{

    render(){
        return(
            <div>
                <div><h1>Student Info</h1></div>
            <table className="">
            <thead>
                <th>Sr No</th>
                <th>Name</th>
            </thead>
            <tbody>
                {this.props.studta.map((items, key) =>(
                    <tr>
                        <td>{key}</td>
                        <td>{items.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        )
    }
}

export default StudentComponent;