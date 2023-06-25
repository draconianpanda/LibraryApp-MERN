import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Addbooks from './Addbooks';

const Viewbooks = () => {
  var [books, setBooks] = useState([]);
  var [update, setUpdate] = useState(false)
  var [singleValue, setSingleValue] = useState([])

  useEffect(()=>{
    axios.get("/api/viewbooks")
    // 'http://localhost:3008' to '/api
    .then((response)=>{
      setBooks(response.data)
    })
  },[])

  var deleteValues = (id) =>{
    console.log(id);
    axios.delete("/api/deletebooks/" + id)
    .then ((response) => {
      alert("Deleted")
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
  }

  var updateValues = (value) =>{
    console.log(value);
    setUpdate(true);
    setSingleValue(value)
    
  }

  var finalJSX = (
    <div style={{paddingTop:'100px'}}>
  <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Book Name</TableCell>
        <TableCell>Author</TableCell>
        <TableCell>Language</TableCell>
        <TableCell>Genre</TableCell>
        <TableCell>Book Number</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {books.map((val,i)=>{
        return(
          <TableRow key={i}>
            <TableCell>{val.bookName}</TableCell>
            <TableCell>{val.author}</TableCell>
            <TableCell>{val.language}</TableCell>
            <TableCell>{val.genre}</TableCell>
            <TableCell>{val.bookNum}</TableCell>
            <TableCell>
              <Button onClick={()=>deleteValues(val._id)}>Delete</Button>
            </TableCell>
            <TableCell>
              <Button onClick={()=>updateValues(val)}>Update</Button>
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  </Table>
</TableContainer>
</div>
  );
  if (update) finalJSX = <Addbooks data={singleValue} method ='put'/>
  return finalJSX;
};

export default Viewbooks