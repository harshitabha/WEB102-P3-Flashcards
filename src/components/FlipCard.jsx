import './FlipCard.css'

export default function FlipCard (props) {
    return (
        <div className={"flip-card " + props.difficulty}>
            <div className="card-inner">
                <div className="card-front">
                    <p className="ques">
                        {props.question}
                    </p>
                </div>
                <div className="card-back">
                    <p className="ans">
                        {props.ans}
                    </p>
                    <img src={props.imgSrc} alt={props.imgAlt} className="card-img" />
                </div>
            </div>
        </div>
    );
}