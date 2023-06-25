import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addbooks = (props) => {
  var navigate = useNavigate();

  console.log("props data",props.data)
  console.log("props method",props.method)
  var [inp,setInp] = useState (props.data);


    const inputHandler = (e)=>{
      const{name,value}=e.target;
      setInp((inp)=>({...inp,[name]:value}));
      console.log(inp)
    }

    const readHandler = ()=>{
      console.log("Clicked");

      if(props.method=="post"){
      axios.post("/api/addbooks", inp)
      .then((response)=>{
        alert("Data Added");
        navigate('/')
      })
      .catch(err=>console.log(err))
    }

    if(props.method == 'put'){
      axios.put("/api/edit/" + inp._id , inp)
      .then((response)=>{
        alert("Updated");
        window.location.reload(false)
      })
      .catch(err=>console.log(err))
    }
  }

  return (
    <div style={{paddingTop:'100px'}}>
      <TextField name="bookName" value={inp.bookName} onChange={inputHandler} label="User Name"/><br/><br/>
      <TextField name="author" value={inp.author} onChange={inputHandler} label="Author"/><br/><br/>
      <TextField name="language" value={inp.language} onChange={inputHandler} label="Language"/><br/><br/>
      <TextField name="genre" value={inp.genre} onChange={inputHandler} label="Genre"/><br/><br/>
      <TextField name="bookNum" value={inp.bookNum} onChange={inputHandler} label="Number of Books"/><br/><br/>
      <Button variant='contained' onClick={readHandler}>Submit</Button>
    </div>
  )
}

export default Addbooks