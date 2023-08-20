import {Container, Row, Col , Form, Button} from 'react-bootstrap'
import img from '../imgs/img.jpeg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from './Error'


export const Home = () => {

    const[name , setName]=useState('')
    const[categories , setCategories]=useState('')
    const[difficulty, setDifficulty]= useState('')
    const[error, setError]=useState(false);

    const navigate = useNavigate()

   

  const handleSubmit = () => {

    if(!name || !categories || !difficulty){
        setError(true )
        return;

    }
     else{
        setError(false)
        
        navigate('/quiz', { 
            
         } );

     }

    }


  return (
    <div>
        <Container>
            <Row>
                <Col>
                 
                <img
                src={img}
                height = '600'
                width='600'
                
                
                
                
                />
                
                
                </Col>

                <Col>

                 <h2 className='setting'>QUIZ SETTING</h2>  
                 {error &&  <Error />}
             

                <Form.Control
                    type="text"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    placeholder='Enter your Name'
                    className='form'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />
               

                <Form.Select className='form'  aria-label="Default select example" onChange = {(e) => setCategories(e.target.value)} value={categories} >
                    <option>Categories</option> 
                    <option value="1">General Knowledge</option>
                    <option value="2">Entertainment: Books</option>
                    <option value="3">Entertainment:Film</option>
                    <option value="4">Entertainment:Music</option>
                    <option value="5">Entertainment:Musicals &Theatres</option>
                    <option value="6">Entertainment:Television</option>
                    <option value="7">Entertainment:Video Games</option>
                    <option value="8">Entertainment:Board Games</option>
                    <option value="9">Science and Nature</option>
                    <option value="10"> Science : Computers</option>
                    <option value="11">Science :Mathematics</option>
                    <option value="12">Mythology</option>
                    <option value="13">Sports</option>
                    <option value="14">Geography</option>
                    <option value="15">History</option>
                    <option value="16">Politics</option>
                    <option value="17">Art</option>
                    <option value="18">Celebrity</option>
                    <option value="19">Animals</option>
                    <option value="20">Entertainment: Comics</option>
                    <option value="21">Science :Gardgets</option>
                    <option value="22">Entertainment:Japanese Amime &Manga</option>
                    <option value="23">Entertainment : Cartoon and Animation</option>
                    
                   

                </Form.Select>

                <Form.Select className='form' aria-label="Default select example" onChange={((e)=>setDifficulty(e.target.value))} >
                    <option> Select Difficulty </option>
                    <option value="1">Easy</option>
                    <option value="2">Intermediate</option>
                    <option value="3">Hard</option>
                </Form.Select>

                <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick = {handleSubmit}>
                START QUIZ
                </Button></div>
                            
                  
                
                
                </Col>
            </Row>
        </Container>

    </div>
  )
} 

