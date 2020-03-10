import React, {useState, useEffect} from 'react';

export default props => {
        const [time, setTime] = useState([0,0,0])
        const [notRendered, setNotRendered] = useState(true)

        useEffect(() => {
            const eventSource = new EventSource('http://nick.pink/v/0/countdown/event-source')
            eventSource.onerror = event => {
                console.log(event)
            }
            console.log('---ES---')
            console.log(eventSource)
            eventSource.onmessage = event => {
                const data = JSON.parse(event.data)
                console.log('---receiving---')
                console.log(data)
                const {hack, time, destination} = data
                if(hack && notRendered){
                    console.log('READY')
                }
                if(time){
                    setTime(time)
                }
            }
            
        },[])

        return(
            <div id="timer">
                <h3 id="timer-countdown">COUNTDOWN</h3>
                <h2 id="hours">{time[0]}</h2>
                <h2 id="min">{time[1]}</h2>
                <h2 id="sec">{time[2]}</h2>
                <div id="units">
                    <h4>{`{ hours }`}</h4>
                    <h4>{`{ mins }`}</h4>
                    <h4>{`{ secs }`}</h4>
                </div>
            </div>
        )

}