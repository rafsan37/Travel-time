import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Myorders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch('https://ghoulish-skull-44107.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])

    function cancel(id) {
        const confirmation = window.confirm('Are you sure to delete !')
        if(confirmation) {
          fetch(`https://ghoulish-skull-44107.herokuapp.com/delete/${id}`,{
          method: "delete",
        })
        .then(res=> res.json())
        .then(data => {
          if(data.deletedCount === 1){
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders)
          }else{
            alert("Something went worng");
          }
        })
        }
        
      }

    const myOrders = orders.filter(order => user.email  === order.email)
    return (
        <div className="text-center my-5 container">
            <h1 className="my-3">Welcome To Travel Time</h1>
        <div className="row">
           { 
             myOrders.map(myOrder => <div className="col-md-4 mx-auto" key={myOrder._id}>
                 
                
                 
                 
                 <Card className="my-3" style={{ width: '22rem' }}>
  <Card.Body>
    <Card.Title><h4>My Name: {myOrder.name}</h4></Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> <h5 className="text-info">Booking place: {myOrder.destination}</h5></ListGroupItem>
    <ListGroupItem> <p className="fw-bold">Price: {myOrder.price}</p></ListGroupItem>
    <ListGroupItem><p className="text-warning">My Booking Status: {myOrder.Status}</p></ListGroupItem>
    <ListGroupItem><button onClick={()=> cancel(myOrder._id)} className="btn btn-danger rounded">Cancel Booking</button></ListGroupItem>
  </ListGroup>
</Card>
             </div>)
           }
</div> 
</div>
    );
};

export default Myorders;