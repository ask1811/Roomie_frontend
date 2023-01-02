import React, { useState,useEffect } from 'react';
import axios from "axios";
import './discover.css'
import Footer from '../../components/Footer/footer';

const baseURL = "http://localhost:8000"

const Discover = () => {
  const [properties, setData] = useState([]);


    useEffect(()=>{
      fetchData();
     },[])
     async function fetchData(){
      await axios.get(`${baseURL}/property/availproperty`).then((response)=>{
        setData(response.data.properties);
        
    });
    }
    console.log(properties);

    return(
    <>          
    <div className="wrapper">
    {properties.map(property => {
      return(
          <Card
          id = {property.Id}
          img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
          title= {property.Name}
          description={property.Location}
          price={property.Rent}
        />
      );})}
    
    </div>
    <Footer/>
    </>
    )

    return (  
      <>          
      <div className="wrapper">
        <Card
          img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
          title="Slot available"
          description="Click to rent"
          price="45.00"
        />
  
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
          description="Click to rent"
          price="45.00"
        />
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
        description="Click to rent"
        price="45.00"
        />
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
          description="Click to rent"
          price="45.00"
        />
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
          description="Click to rent"
          price="45.00"
        />
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
          description="Click to rent"
          price="45.00"
        />
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
          description="Click to rent"
          price="45.00"
        />
        <Card
        img="https://img.freepik.com/premium-photo/white-wooden-little-toy-houses-gray-background-minimalist-scandinavian-decorative-design_136930-1076.jpg?w=1480&q=85&fm=jpg&crop=entropy&cs=srgb&h=1000"
        title="Slot available"
          description="Click to rent"
          price="45.00"
        />
      </div>
      <Footer/>
      </>
    );
  }
  
  function Card(props) {
    return (
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <h3 className="card__price">{props.price}</h3>
          <button className="card__btn" onClick={()=>{console.log("test"); window.location.href = `/tview/${props.id}`}}>Show more</button>
        </div>
      </div>
    );
  }
        export default Discover;
