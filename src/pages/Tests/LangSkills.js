import React, { useState } from 'react';
import './LangSkills.css';
import { data1 } from '../data/data1';

export default function LangSkills() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data1[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const option_array = [React.createRef(), React.createRef(), React.createRef(), React.createRef()];

    const checkAns = (e, ans) => {
        if (!lock) {
            e.target.classList.add("selected");
   
                setLock(true);
                const optionIndex = ans - 1;
        
                const optionScore = (optionIndex ) * (1/3); // Calculating score based on the index of the option
                setScore(prev => prev +  optionScore);
         
        }
    };
    
    
    const next = () => {
        if (lock) {
            if (index === data1.length - 1) {
                setResult(true);
                return;
            }
            setIndex(prevIndex => prevIndex + 1);
            setQuestion(data1[index + 1]);
            setLock(false);
            option_array.forEach(optionRef => {
                optionRef.current.classList.remove("selected");
            });
        }
    };

    const reset = () => {
        setIndex(0);
        setQuestion(data1[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <div className='container-quiz'>
            <h3>Language Skills Quiz</h3>
            <hr />
            {result ? (
                <>
                    <h4>You have successfully completed the quiz.</h4>
                    <button>Go back</button>
                    <button onClick={reset}>Reset</button>
                </>
            ) : (
                <>
                    <h4>{index + 1}.{question.question}</h4>
                     <div className='index'>{index + 1} of {data1.length} questions</div>
                    <ul>
                        <li ref={option_array[0]} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</li>
                        <li ref={option_array[1]} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</li>
                        <li ref={option_array[2]} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</li>
                        <li ref={option_array[3]} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next</button>
                   
                </>
            )}
        </div>
    );
}
