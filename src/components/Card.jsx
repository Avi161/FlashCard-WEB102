import { useState } from "react";
import Button from '@mui/material/Button';
import { ArrowUp } from 'lucide-react';

function Card(props){
    const [check, setCheck] = useState(true);

    function flip(){
        setCheck(!check);
    }

    return(
        <div className="card">
            <h2>Joke</h2>
            <p>{check ? props.question : props.answer}</p>
            <Button onClick={flip} variant="contained">{check ? "Answer":"Question"}</Button>
        </div>
    );
}

export default Card;