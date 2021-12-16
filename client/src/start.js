import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import Question from "./question";

ReactDOM.render(<FortuneTeller />, document.querySelector("main"));

function FortuneTeller() {
    const [ask, setAsk] = useState(false);
    const [stage, setStage] = useState(2);
    const [oracle, setOracle] = useState();
    const slowVideo = useRef();

    useEffect(() => {
        setTimeout(() => {
            setAsk(true);
        }, 8000);
    }, []);

    // useEffect(() => {
    //     slowVideo.current.playbackRate = 0.5;
    // }, []);

    const clickOracle = () => {
        setStage(3);
        fetch(`/api/oracle`)
            .then((data) => data.json())
            .then((data) => {
                console.log("data in fetch oracle", data);
                setOracle(data);
            })
            .catch((err) => {
                console.log("error fetching oracle from server:", err);
            });
    };

    const setPlayBack = () => {
        slowVideo.current.playbackRate = 0.8;
    };

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
                    <button onClick={clickOracle} className="choice">
                        Oracle Wisdom
                    </button>
                    <button onClick={() => setStage(4)} className="choice">
                        Ask a question
                    </button>
                </div>
            );
        } else if (stage === 3) {
            return (
                <div className="oracle-container">
                    <p className="oracle">{oracle}</p>
                    <video
                        src="smoke.mp4"
                        autoPlay
                        muted
                        onCanPlay={() => setPlayBack()}
                        ref={slowVideo}
                    ></video>
                </div>
            );
        } else if (stage === 4) {
            return <Question />;
        }
    };

    return <>{showStage()}</>;
}
