import axios from "axios";
import React, { useState ,useEffect} from "react";
import { useParams, Link} from "react-router-dom";
function Countrydetails(){
    var [details,setDetails]=useState(null)
    var x=useParams()
    useEffect(()=>{axios.get("https://restcountries.com/v3/name/"+x.cname).then((res)=>{
        //console.log(res.data[0].name.common)
        setDetails({...res.data[0]});
    })},[x.cname])
    console.log(details)

    return (
             <div className="mybox">
                 {details && (<div className="divEl">
                               <div className="partOne">
                                  <img src={details.flags[0]} width="100%"/><br/>
                                  <Link to="/countries"><button style={{width:"90px", color:"blue",backgroundColor:"lightgreen",height:"30px",marginLeft:"5px"}}>Back</button></Link>
                                </div>
                              <div className="partTwo">
                              <h1 style={{color:"red"}}>Country Name:{details.name.common}</h1>
                              <h2 style={{color:"red"}}>Capital:{details.capital}</h2>
                              <h3 style={{color:"red"}}>Population:{details.population}</h3>
                              </div>
                              
                    </div>)}
                    
            </div>

    )
}
export default Countrydetails;