import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import './Booking.css'
import useAuth from '../../Hooks/useAuth';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth()

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
  axios.post('http://localhost:5000/bookings', data)
  .then(res =>{
if(res.data.insertedId){
 alert('Order processed successfully');
 reset();
}
  })
  };

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div className="text-center my-5">

            <Container className='my-5'>
      <Row>
        <Col>
        <Card style={{width:"350px"}}>
        <Card.Img  variant="top" src={service?.img} />
        <Card.Body >
          <Card.Title>{service?.name}</Card.Title>
          <Card.Text>
            {service?.description}
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
        <div className='text-center add-booking container'>
      <h2>Add a Booking</h2>
      <p>Booking Price: {service?.price}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' defaultValue={user?.displayName} readOnly/>
      <input {...register("email", { required: true})} placeholder='Email'
        defaultValue={user?.email} readOnly
      />
      <input {...register("destination", { required: true})} placeholder='Destination'
        defaultValue={service?.name}
      />
      <textarea {...register("Valid Address")} placeholder='Address'/>
      <input type="number" {...register("phone")} placeholder='Valid Phone Number'/>
      <input type="text" {...register("Status")} placeholder=''
      defaultValue='pending' readOnly/>
      
      <input className='bg-warning border-0 py-2 mt-3 rounded' type="submit" value='Place the Booking' />
    </form>
    </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Booking;