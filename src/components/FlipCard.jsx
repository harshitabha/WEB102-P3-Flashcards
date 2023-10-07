import './FlipCard.css'

export default function FlipCard (props) {
    
    return (
        <div className={`flip-card ${props.cardFront ? null : "flip"}`} onClick={props.cardFlipedHandler}>
            <div className="card-inner">
                <div className={"card-front " + props.difficulty}>
                    <p className="ques card-text">
                        {props.question}
                    </p>
                </div>
                <div className={"card-back " + props.difficulty}>
                    <p className="ans card-text">
                        {props.ans}
                    </p>
                    <img src={props.imgSrc} alt={props.imgAlt} className="card-img" />
                </div>
            </div>
        </div>
    );
}