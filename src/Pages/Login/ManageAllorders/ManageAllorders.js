import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllorders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/bookings')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])
    return (
        <div className="container my-5">
            <h1 className="my-3">Welcome to Admin Panel</h1>
            <h4 className="my-3">Manage All Orders </h4>

                    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Email</th>
      <th>Username</th>
      <th>Destination</th>
      <th>Status</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
                orders.map(order => <tr key={order._id}>
    
      <td>{order.email}</td>
      <td>{order.name}</td>
      <td>{order.destination}</td>
      <td><button>{order.Status}</button></td>
      <td><button>Cancle</button></td>
    </tr> 
    )}
  </tbody>
</Table>
               
            
        </div>
    );
};

export default ManageAllorders;