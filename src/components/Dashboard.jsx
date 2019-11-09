import React,{Component} from 'react';
import './Dashboard.css';
import axios from 'axios';
import { API_DOMAIN } from '../Constants';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from "react-bootstrap-table-next";

class Dashboard extends Component  {
    constructor(props){
        super(props);
        this.state={
        users:[],
        isLoaded: false,
        count: 0,

    }
}
componentDidMount=()=>{
this.showUsers();

}
showUsers = () =>{

axios({ 
 url:`${API_DOMAIN}/api/v1/users`,
 method : 'get',
})
.then((res) => {
    debugger
        this.setState({
            users: res.data.data.users,
            count: res.data.data.count,
        })
}).catch((error) => {
    console.log(error, 'error');
});


}
    
render(){
     const columns=[{
        dataField:'id',
        text: 'User ID',
        style: { width: '50px' }
     },{
        dataField:'first_name',
        text: 'First Name'

     },{
        dataField:'last_name',
        text: 'Last Name'

     },{
        dataField:'gender',
        text: 'Gender'

     },{
        dataField:'email',
        text: 'Email ID',
        hidden:'true'

     },{
        dataField:'mobile',
        text: 'Mobile Number'

     }]

console.log(this.state.users, 'users')
    
return(
    

<div className="dashboard">
    HI
    <h2>Status: {this.props.loggedInStatus}</h2>
    <BootstrapTable keyField='id' data={this.state.users} columns= {columns} striped
  hover
  condensed></BootstrapTable>
</div>
);


}

}

export default Dashboard;