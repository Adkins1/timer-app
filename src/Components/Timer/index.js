import React, { useState } from 'react'
import {
    Container,
    Wrapper,
    TimerContainer,
    Time,
    TimeSquare,
    Button
} from './timerStyles'

const Timer = () => {

    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    // status 0 - initial
    // status 1 - running 
    // status 2 - paused
    const start = () => {
        run()
        setStatus(1)
        setInterv(setInterval(run, 10))
    }
    const pause = () => {
        clearInterval(interv)
        setStatus(2)
    }
    const reset = () => {
        clearInterval(interv)
        setStatus(0)
        setTime({ms:0, s:0, m:0, h:0})
    }
    const resume = () => {
        start()
    }
    const save = () => {
        console.log("state saved to a file")
    }
    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 60){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    }

    return (
        <>
            <Container>
                <Wrapper>
                    <TimerContainer>
                        <Time>
                            <TimeSquare>{(time.h >=10)? time.h : "0" + time.h}</TimeSquare>
                            <TimeSquare>{(time.m >=10)? time.m : "0" + time.m}</TimeSquare>
                            <TimeSquare>{(time.s >=10)? time.s : "0" + time.s}</TimeSquare>
                            <TimeSquare>{(time.ms >=10)? time.ms : "0" + time.ms}</TimeSquare>
                        </Time>
                        {(status === 0)? 
                            <>
                                <Button onClick={start}>Start</Button>
                                
                            </> : ""
                        }
                        {(status === 1)? 
                            <>
                                <Button onClick={pause}>Pause</Button>
                                <Button onClick={reset}>Reset</Button>
                                <Button onClick={save}>Save</Button>
                            </> : ""
                        }
                        {(status === 2)? 
                            <>
                                <Button onClick={resume}>Resume</Button>
                                <Button onClick={reset}>Reset</Button> 
                                <Button onClick={save}>Save</Button>
                            </> : ""
                        }
                    </TimerContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Timer
