import { useState } from "react";
import Button from '@mui/material/Button';
import { ArrowRight } from 'lucide-react';

function Card(props){
    const [check, setCheck] = useState(false);

    function flip(){
        setCheck(!check);
    }

    return(
        <div className="card">
            <h2>Joke</h2>
            <p>{check ? props.answer : props.question}</p>
            <Button onClick={flip} variant="contained"><ArrowRight /></Button>
        </div>
    );
}

export default Card;