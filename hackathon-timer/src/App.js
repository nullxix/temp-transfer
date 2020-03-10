import React from 'react';
import Timer from './Timer.js'

class App extends React.Component{
    render(){
        return(
            <div id="container">
                <a href="https://vschool.io/"><img src="img/vschool.png" alt="vschool" id="vschool"></img></a>
                <img src="img/cropped.png" alt="vs" id="vs"></img>
                <img src="img/Vector.png" alt="v/0" id="vzero"></img>
                <h3 id="hackathon-header">hackath0n</h3>
                <Timer/>
            </div>
        )
    }
}

export default App;