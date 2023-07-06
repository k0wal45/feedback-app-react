import {useState,useEffect} from 'react'

function Response() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://restcountries.com/v3.1/all'
    ,{
      // headers : { 
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      //  }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


  return data
}

export default Response
