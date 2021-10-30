import { axios } from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/services', {
          method: "POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          reset()
        }
        
      })
      
            
    }
    return (
        <div className="addservice mb-5 pb-5">
            <h2 className="text-center my-5">Please Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("price")} placeholder='price' />
      <input  {...register("duration")} placeholder='Duration' />
      <input {...register("img")} placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewService;