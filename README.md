 Fortuneteller is a web application made with React and Node.js/Express.
 
 This was my final project at Spiced Academy in December 2021 and I wanted to experiment with machine learning, so I used Tensorflow to have two independent AIs in the project. One generates quotes based on a database of almost 45.000 motivational quotes. The model is a <a href="https://www.tensorflow.org/text/tutorials/text_generation">character-based RNN</a> that was trained through 200 epochs. Given the short deadline for the project, it wasn't possible to train it for longer, so the text generated contains proper words but still senseless sentences, which was fitting to the goal of the project. <br>
 The second AI was generated from a <a href="https://github.com/tensorflow/tfjs-models/tree/master/qna">pre-trained QnA model</a>. I gave it three different text inputs chategorized by theme. The user can choose a theme and ask a question, then the AI will look through the input text and potentially find an apropriate answer. 
 
 ![Recording 2022-02-28 at 16 21 34](https://user-images.githubusercontent.com/90277346/156009010-40c6701c-3db9-466a-acaf-107e67d96d83.gif)
![Recording 2022-02-28 at 16 24 14](https://user-images.githubusercontent.com/90277346/156009453-ad387756-bdf6-49b1-9720-cdf270abd83a.gif)
![Recording 2022-02-28 at 16 27 07](https://user-images.githubusercontent.com/90277346/156009935-0ff25efa-b1b8-4628-be3c-ecf7dcf35740.gif)
