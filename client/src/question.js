import { useState, useEffect, useRef } from "react";
import money from "./money";
import love from "./love";
import health from "./health";

export default function Question() {
    const [question, setQuestion] = useState();
    const [model, setModel] = useState();
    const [passage, setPassage] = useState();
    const [fail, setFail] = useState(false);
    const [reply, setReply] = useState();

    const smokeVideo = useRef();

    useEffect(() => {
        qna.load().then((model) => {
            setModel(model);
        });
    }, []);

    const setPlayBack = () => {
        smokeVideo.current.playbackRate = 0.8;
    };

    const handleChange = (e) => setQuestion(e.target.value);
    const sendQuestion = () => {
        setFail(false);
        setReply("");
        console.log("question sent:", question);
        model
            .findAnswers(question, passage)
            .then((answers) => {
                console.log("Answers: ", answers);
                if (!answers.length) {
                    return setFail(true);
                }
                let i = Math.floor(Math.random() * answers.length);
                setReply(answers[i].text);
            })
            .catch((err) => console.log("err on getting answer", err));
    };

    const moneyClick = () => {
        console.log("passage is money");
        setReply();
        setFail(false);
        setPassage(money);
    };

    const loveClick = () => {
        console.log("passage is love");
        setReply();
        setFail(false);
        setPassage(love);
    };

    const healthClick = () => {
        console.log("passage is health");
        setReply();
        setFail(false);
        setPassage(health);
    };

    return (
        <div className="stage4-container">
            <video
                className="question-smoke"
                src="smoke3.mp4"
                autoPlay
                muted
                loop
                onCanPlay={() => setPlayBack()}
                ref={smokeVideo}
            ></video>
            {/* <img className="loading" src="smoke.gif"></img> */}
            {model && (
                <div className="question-container">
                    <p className="prompt">What do you want to know about?</p>
                    <div className="question-btns">
                        <button onClick={moneyClick}>Money</button>
                        <button onClick={loveClick}>Love</button>
                        <button onClick={healthClick}>Health</button>
                    </div>
                    {passage && (
                        <div className="question-input-container">
                            <div className="ask-a-question">
                                {passage === money &&
                                    "ASK A QUESTION ABOUT MONEY"}
                                {passage === love &&
                                    "ASK A QUESTION ABOUT LOVE"}
                                {passage === health &&
                                    "ASK A QUESTION ABOUT HEALTH"}
                            </div>
                            <textarea
                                className="textarea"
                                onChange={(e) => handleChange(e)}
                                type="text"
                            />
                            <button className="ask-btn" onClick={sendQuestion}>
                                Ask
                            </button>

                            <div>
                                {/* {!reply && !fail && (
                                    <img
                                        className="loading"
                                        src="smoke.gif"
                                    ></img>
                                )} */}
                                {fail && (
                                    <p className="answer">
                                        please try another question
                                    </p>
                                )}
                                {reply && <p className="answer">{reply}</p>}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
