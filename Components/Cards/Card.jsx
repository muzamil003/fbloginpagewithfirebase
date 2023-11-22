import "./Card.css";
import  Btn  from "../Buttons/Button";
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

function Carddata() {
const [data, setData]=useState([])
const [isData, setIsData] = useState(false)
const {id} = useParams()
console.log(id)
const getData = async ()=>{
  const fetch = await axios.get(id ? 'https://fakestoreapi.com/products/'+id : 'https://fakestoreapi.com/products')
  
  try{
setData(id ? [fetch.data] : fetch.data);
setIsData(true)
}catch(err){
  console.log(err)
  setIsData(true)
  }
  
}

  useEffect(()=>{
   getData()
  },[])
  
  
  console.log(data)
  return (
    
    <div className='card-container' >
      {
       isData ? data.map((e,i)=>{
          const discrip = e.description.slice(0,150)
          const titlee = e.title.slice(0,20)
         
          return <div className='card' key={i}>
            <div className='images'>
          <img src={e.image} width={80}  />
          </div>
          <div className='matter' >
          <hr/>
            <h5>
              {
                titlee
              }
            </h5>
            <p>
              {
                discrip

              }
            </p>
            </div>
            <div className='buttons'>
            <Btn label={
              e.price}/>
          <Btn label={e.rating.count}/>
          </div>
          </div>

          

        }): <Skeleton variant="rounded" width={210} height={360}  />
      }
    </div>
  );
}

export default Carddata;
