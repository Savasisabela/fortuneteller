import { useState, useEffect } from "react";
import money from "./money";

export default function Question() {
    const [question, setQuestion] = useState();
    const [model, setModel] = useState();
    const [passage, setPassage] = useState();

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
            })
            .catch((err) => console.log("err on getting answer", err));
    };

    const moneyClick = () => {
        console.log("passage is money");
        setPassage(money);
        console.log("money:", money);
    };

    return (
        <>
            {model && (
                <div>
                    <div>ASK A QUESTION ABOUT</div>
                    <button onClick={moneyClick}>Money</button>
                    <button onClick={() => setPassage(love)}>Love</button>
                    <button onClick={() => setPassage(health)}>Health</button>
                    <textarea onChange={(e) => handleChange(e)} type="text" />
                    <button onClick={sendQuestion}>Ask</button>
                </div>
            )}
        </>
    );
}
