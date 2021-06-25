import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const first = "GOOD MORNING";
const second = "GOOD afternoon";
const third = "good evening";
const four = "good night";
var time = new Date().getHours();

let Greeting;
if (time >= 5 && time <= 12) {
    Greeting = "good morning  ☀️";

}
else if (time >= 1 && time <= 17) {

    Greeting = "good afternoon 🌞 ";
}
else if (time >= 17 && time <= 21) {
    Greeting = "good evening  ";
}
else {
    Greeting = "good night 🌛";
}


ReactDom.render(<>

    <div id="container" >

        <div id="box">
            <h1>Hello,{Greeting}</h1>
        </div>



    </div>

</>
    , document.getElementById("root"));