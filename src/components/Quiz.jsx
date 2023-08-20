
import { useState } from 'react'

import axios from 'axios'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




const Quiz = () => {
    

const[questions , setQuestions]=useState([])


 





    useEffect(() => {
        const fetchQuestions = async() =>{
            try {
        
                const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple`);
                const data = await response.data.results;
                setQuestions(data)
               
                 console.log(data)
                
            } catch (error) {
                console.log(error);
                
            }
            
        };
        fetchQuestions();

    },[])



  return (

    <div>
        <h1>Welcome   </h1>
        
         {
            questions.map((question)=>( 
                <div key='id'>

                    <p>{question.question}</p>
                    <ol>
                        <li><input type='radio'/>{question.incorrect_answers[0]}</li>
                        <li><input type='radio'/>{question.incorrect_answers[1]}</li>
                        <li><input type='radio'/>{question.correct_answer}</li>
                        <li><input type='radio'/>{question.incorrect_answers[2]}</li>
                        
                    </ol>
                  
                </div>


            ))
          
         }
         
   
       <Link to="/results"> <button className='resbtn'>Submit Results </button></Link> 


    </div>
  )
}

Quiz.propTypes = {
    name: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired

  };

export default Quiz