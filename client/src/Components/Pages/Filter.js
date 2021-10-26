import React  from 'react';
import {Form, FormControl} from "react-bootstrap"





const Filter = () => {
 
    return (
        <div>
 <h1 style={{marginBottom:'20px'}}>Movie App</h1>

    <Form style={{marginBottom:'20px'}} className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      
      />
     
     
    </Form>
 
        </div>
    )
}

export default Filter;
