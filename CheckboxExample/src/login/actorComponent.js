import React , { Component } from 'react';

class ActorComponent extends Component{

    render(){
        return(
            <table className="">
                            <thead>
                                <th>Sr No</th>
                                <th>Name</th>
                            </thead>
                            <tbody>
                                {this.props.actorarr.map((items, key) =>(
                                    <tr>
                                        <td>{key}</td>
                                        <td>{items.name}</td>
                                    </tr>
                                ))}
                            </tbody>
            </table>
                        
        )
    }
}
export default ActorComponent;