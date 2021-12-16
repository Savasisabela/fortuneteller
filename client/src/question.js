import { useState, useEffect } from "react";
import money from "./money";
import love from "./love";
import health from "./health";

export default function Question() {
    const [question, setQuestion] = useState();
    const [model, setModel] = useState();
    const [passage, setPassage] = useState();
    const [fail, setFail] = useState(false);
    const [reply, setReply] = useState();

    useEffect(() => {
        qna.load().then((model) => {
            setModel(model);
        });
    }, []);

    const handleChange = (e) => setQuestion(e.target.value);
    const sendQuestion = () => {
        console.log("question sent:", question);
        model
            .findAnswers(question, passage)
            .then((answers) => {
                console.log("Answers: ", answers);
                if (!answers.length) {
                    return setFail(true);
                }

                setReply(answers[0].text);
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
        <>
            {model && (
                <div>
                    <p>What do you want to know about?</p>
                    <button onClick={moneyClick}>Money</button>
                    <button onClick={loveClick}>Love</button>
                    <button onClick={healthClick}>Health</button>
                    <div>
                        {passage === money && "ASK A QUESTION ABOUT MONEY"}
                        {passage === love && "ASK A QUESTION ABOUT LOVE"}
                        {passage === health && "ASK A QUESTION ABOUT HEALTH"}
                    </div>
                    <textarea onChange={(e) => handleChange(e)} type="text" />
                    <button onClick={sendQuestion}>Ask</button>

                    <div>
                        {fail && "please try another question"}
                        {reply}
                    </div>
                </div>
            )}
        </>
    );
}
