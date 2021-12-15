import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

ReactDOM.render(<FortuneTeller />, document.querySelector("main"));

function FortuneTeller() {
    const [ask, setAsk] = useState(false);
    const [stage, setStage] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setAsk(true);
        }, 8000);
    }, []);

    const showStage = () => {
        if (stage === 1) {
            return (
                <>
                    <div className="ripple-background">
                        <div className="circle xxlarge shade1"></div>
                        <div className="circle xlarge shade2"></div>
                        <div className="circle large shade3"></div>
                        <div className="circle medium shade4"></div>
                        <div className="circle small shade5"></div>
                        <p className="breathe">TAKE A DEEP BREATH</p>
                    </div>

                    {ask && (
                        <button className="start" onClick={() => setStage(2)}>
                            START
                        </button>
                    )}
                </>
            );
        } else if (stage === 2) {
            return (
                <div className="stage2-container">
                    <button className="choice">Oracle Wisdom</button>
                    <button className="choice">Ask a question</button>
                </div>
            );
        } else if (this.state.stage === 3) {
            return <></>;
        }
    };

    return <>{showStage()}</>;
}
