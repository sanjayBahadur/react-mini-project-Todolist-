import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <>
    <div>
        <h1 className='mt-4'>TO-DO list</h1>
        <div>
            
        </div>
        <div className='d-flex, flex-column'>
        <Form.Label htmlFor="inputTaskLabel">Enter your task below:</Form.Label>
      <Form.Control
        id="inputTask"
        aria-describedby="inputTaskDescription"
        className='mx-auto w-75'
      />
      <Form.Text id="inputTaskDescription" muted>
        Your Task can be max 50 characters long, containg any letters and numbers,
        and must not contain special characters, or emoji.
      </Form.Text>
        
        </div>
        <Button className='mt-3 mx-auto w-25' variant="outline-primary">Add Task</Button>
    </div>
    </>
    
  )
}

export default Header