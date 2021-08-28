import React, { Component } from 'react';


class Content extends Component {
    constructor(){
        super();
        this.state = {
            data:
            [
                {
                
                    id: 0,
                    fname: 'Jose',
                    lname: 'Lopez',
                    status: 'Completed',
                    time: '02/14/2021'
                },
                {
                    id: 1,
                    fname: 'Juan',
                    lname: 'Gonzalez',
                    status: 'Completed',
                    time: '02/19/2021' 
                },
                {
                    id: 2,
                    fname: 'Gabriel',
                    lname: 'Robles',
                    status: 'In process',
                    time: '03/05/2021'
                },
                {
                    id: 3,
                    fname: 'Ricardo',
                    lname: 'Palacios',
                    status: 'In process',
                    time: '03/12/2021' 
                }

            ]
        }

    }
   

    


    render(){
        const cases =this.state.data.map(name =>{
           return(
                <tr key={name.id}>
                    <td>{name.time}</td>
                    <td>{name.fname} {name.lname} </td>
                    <td>{name.status}</td>
                </tr>
           ) 
            
        });
     

        return(
            <div>
                <div className="content-container">
                    <div className="content-tabs">
                        <div>Case Status</div>
                        <div>Unassigned Cases</div>
                        <div>Pending Tasks</div>
                    </div>
                    <div className="content-body">
                        <table className="pending-cases">
                            <thead>
                                <tr>
                                   <th>Last Update</th>
                                   <th>Name</th>
                                   <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cases}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        )
    }
}





export default Content;