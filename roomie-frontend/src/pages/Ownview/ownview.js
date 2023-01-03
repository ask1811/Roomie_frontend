import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router'
import SolidButton from '../../components/Solidbutton/solidbutton'
import './ownview.css'

const baseURL = "http://localhost:8000"

const Ownview = (props) => {

const [logdata,setData] = useState({
  gas:'',
  water:'',
  electricity:''
})


const addData = (e)=>{
  // console.log(e.target);
  const {name,value} = e.target;
  setData(()=>{
      return{
          ...logdata,
          [name]:value
      }
          
  })
}

  let {id} = useParams();
  console.log(id);
  const [property,setProperty] = useState([]);
  const [owner,setOwner] = useState([]);
  const [propertycost,setCost] = useState([]);
  const [tenant,setTenant] = useState([]);  
  useEffect(()=>{
    fetchData();
   },[])
   async function fetchData(){
    var owner_id;
    var curroccupant
    await axios.get(`${baseURL}/property/${id}`).then((response)=>{
      console.log(response.data.property)
      owner_id = response.data.property[0].Owner_id
      setProperty(response.data.property[0]);
      curroccupant=response.data.property[0].Current_occupant
      
  });
    console.log(owner_id)
    await axios.get(`${baseURL}/owner/${owner_id}`).then((response)=>{
      console.log(response.data.user);
      setOwner(response.data.user[0])
    })
    await axios.get(`${baseURL}/property/propertyCost/${id}`).then((response)=>{
      console.log(response.data.propertyCost);
      setCost(response.data.propertyCost[0]);
    })
    console.log(property)
    if(curroccupant!=0){
      await axios.get(`${baseURL}/tenant/rentproperty/${id}`).then((response)=>{
        console.log(response.data.Tenant);
        setTenant(response.data.Tenant);
      })
    }
    // setData({
    //   gas:propertycost.Gas,
    //   electricity:propertycost.Electricity,
    //   water:propertycost.Water,
    //   rent:property.rent
    // })
    // logdata.gas=propertycost.Gas;
    // logdata.electricity=propertycost.Electricity;
    // logdata.water=propertycost.Water;
    // logdata.rent=property.Rent;
  }

  async function deleteProperty(){
    await axios.delete(`${baseURL}/owner/deleteproperty/${id}`).then(respnse=>{
    })
  }
  
  async function updateCost(){
    await axios.put(`${baseURL}/owner/${id}/updatecost`,{
      Gas:logdata.gas,
      Water:logdata.water,
      Electricity:logdata.electricity
    }).then((response)=>{
      console.log(response.data)
    });
    window.location.reload();
  }


  return (
    <div className="ownview-container">
      <div id="main-section" className="ownview-main">
        <nav data-role="Header" className="ownview-navbar">
          <div className="ownview-right-side">
          </div>
          <div data-role="BurgerMenu" className="ownview-burger-menu">
            <svg viewBox="0 0 1024 1024" className="ownview-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="ownview-mobile-menu">
            <div className="ownview-nav">
              <div className="ownview-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="ownview-close-menu">
                  <svg viewBox="0 0 1024 1024" className="ownview-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="ownview-right-side1">
                <div className="ownview-links-container">
                  <span className="ownview-text">Home</span>
                  <span className="ownview-text01">About</span>
                  <span className="ownview-text02">Tour Packages</span>
                  <span>Contact</span>
                </div>
                <a href="#main-section" className="ownview-link">
                  <SolidButton button="Explore places"></SolidButton>
                </a>
              </div>
            </div>
            <div className="ownview-follow-container">
              <span className="ownview-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="ownview-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ownview-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="ownview-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ownview-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="ownview-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ownview-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="ownview-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="ownview-container1">
          <div className="ownview-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="ownview-image"
            />
            <SolidButton
              button="Update"
              rootClassName="solid-button-root-class-name"
              click = {(e)=>{e.preventDefault();console.log(logdata); {updateCost()}}}
            ></SolidButton>
            <SolidButton
              button="Delete"
              rootClassName="solid-button-root-class-name"
              click = {(e)=>{e.preventDefault();console.log(logdata); {deleteProperty()};window.location.href='/landingpage';}}
            ></SolidButton>
            <div className="ownview-container3">
              <span className="ownview-text05">Property Name       : {property.Name}</span>
              <span className="ownview-text06">
                Location                    : {property.Location}
              </span>
              {
                tenant.map(t=>{
                  return(
                    <span className="ownview-text07">Tenant Name           : {t.Name}</span>
                  )
                })
              }
              
              <span className="ownview-text08">
                Contact                     :
              </span>
            </div>
            <div className="ownview-container4">
              <span className="ownview-text09">
                Gas                             : 
                {propertycost.Gas}    
                {<input
                  type="text"
                  name="gas"
                  onChange={addData}
                  value={logdata.gas}
                />}
              </span>
              <span className="ownview-text10">
                Electricity                   : 
                {propertycost.Electricity}    
                {<input
                  type="text"
                  name="electricity"
                  onChange={addData}
                  value={logdata.electricity}
                />}
              </span>
              <span className="ownview-text11">
                Water                          : 
                {propertycost.Water}    
                {<input
                  type="text"
                  name="water"
                  onChange={addData}
                  value={logdata.water}
                />}
              </span>
              <span className="ownview-text12">
                Rent                             : 
                {property.Rent}    
              </span>
              <span className="ownview-text13">
                Total                            : {propertycost.Gas + propertycost.Water + propertycost.Electricity + property.Rent}
              </span>
            </div>
            <h1 className="ownview-text14">Charges</h1>
            <h1 className="ownview-text15">Overview</h1>
          </div>
        </div>
      </div>
      <div className="ownview-footer">
        <div className="ownview-menu">
          <h1>Roomie</h1>
          <div className="ownview-links-container1"></div>
          <div className="ownview-follow-container1">
            <span className="ownview-text16">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="ownview-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="ownview-link4"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="ownview-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="ownview-link5"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="ownview-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="ownview-link6"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="ownview-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ownview
