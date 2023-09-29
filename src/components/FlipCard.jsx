import { useState } from 'react';
import './FlipCard.css'

export default function FlipCard (props) {
    const [isFront, setCardFront] = useState('true');
    const flipCard = () => {
        setCardFront(!isFront);
    }
    return (
        <div className={`flip-card ${isFront ? null : "flip"}`} onClick={flipCard}>
            <div className="card-inner">
                <div className={"card-front " + props.difficulty}>
                    <p className="ques">
                        {props.question}
                    </p>
                </div>
                <div className={"card-back " + props.difficulty}>
                    <p className="ans">
                        {props.ans}
                    </p>
                    <img src={props.imgSrc} alt={props.imgAlt} className="card-img" />
                </div>
            </div>
        </div>
    );
}