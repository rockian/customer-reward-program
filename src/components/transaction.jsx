import React, { Component } from 'react';

class Transaction extends Component {
    state = {  }

    render() { 
       const {monthData} = this.props;
        return ( 
        <table className="table">
            {this.createTable(monthData)}
        </table>
        
         );
         
    }
    createTable = (data) => {
        let table = []
        const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    
        for (let d in data) {
            console.log(data[d].month);
          let children = []
          
            children.push(<td>{monthNames[data[d].month]}</td>)
            children.push(<td>{data[d].total}</td>)

          table.push(<tr>{children}</tr>)
        }
        return table
      }
}
 
export default Transaction;