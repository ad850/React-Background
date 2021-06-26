import React from 'react';
import './index.css';


function Time() {

    var time = new Date().getHours();
    let Greeting;

    console.log(time);
    if (time >= 5 && time <= 12) {
        Greeting = "good morning  ☀️";


    }
    else if (time >= 1 && time <= 17) {

        Greeting = "good afternoon 🌞 ";
    }
    else if (time >= 17 && time < 21) {
        Greeting = "good evening 🌄 ";
    }
    else {
        Greeting = "good night 🌛";
    }
    return (
        <>
            <div id="container" >

                <div id="box">
                    <h1>Hello,{Greeting}</h1>
                </div>
            </div>



            <h1></h1>

        </>
    );

}

export default Time;