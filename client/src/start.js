import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

function HelloWorld() {
    const [ask, setAsk] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAsk(true);
        }, 8000);
    }, []);

    return (
        <>
            <div className="ripple-background">
                <div className="circle xxlarge shade1"></div>
                <div className="circle xlarge shade2"></div>
                <div className="circle large shade3"></div>
                <div className="circle medium shade4"></div>
                <div className="circle smal shade5"></div>
                <p className="breathe">TAKE A DEEP BREATH</p>
            </div>
            {ask && <button>Ask your question</button>}
        </>
    );
}
