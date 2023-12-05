import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Outlet} from 'react-router-dom';
function Countries(){
     var [countries,setCountries]=useState([])
     useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
        setCountries([...res.data])
     },[])
     })
    return (
        <div className='mybox'>
            <h1 style={{color:"brown"}}>Welcome to countries</h1>
            <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
            <ul>{
                countries.map((country)=>{
                    return <li className='liEl'>
                        <Link to={"/countries/countrydetails/"+country.name.common}><h1>{country.name.common}</h1></Link>
                        <img src={country.flags[0]} style={{padding:"2px",width:"200px"}} alt="countryImg"/><br/>
                        <i>{country.population}</i>
                        <h4>{country.capital}</h4>
                    </li>
                })
                }
            </ul>
            </div>
            <div style={{width:"45%"}}>
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    )
}
export default Countries