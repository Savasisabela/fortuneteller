importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs");
importScripts("https://cdn.jsdelivr.net/npm/@tensorflow-models/qna");

console.log("worker one");

let model;

qna.load().then((m) => {
    model = m;
});

self.addEventListener("message", (e) => {
    if (!e) return;

    onMessage = ([question, passage]) => {
        console.log("worker 2");

        model
            .findAnswers(question, passage)
            .then((answers) => {
                console.log("Answers: ", answers);
                if (!answers.length) {
                    return setFail(true);
                }

                postMessage(answers);

                let i = Math.floor(Math.random() * answers.length);
                setReply(answers[i].text);
            })
            .catch((err) => console.log("err on getting answer", err));
    };
});
