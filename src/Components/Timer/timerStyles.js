import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Wrapper = styled.div`
    width: 50%;
    height: 50%;
    @media screen and (max-width: 800px){
        min-width: 100%;
    }
`;
export const TimerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #80b3ff;
`;
export const Time = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;
`;
export const TimeSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 50%;
    font-size: 5rem;
    padding: 20px;
    margin: 10px;
    background: #4d94ff;
    @media screen and (max-width: 800px){
        margin: 2px;
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 20%;
    border: none;
    background: #005ce6;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    &:hover{
        background: #1a75ff;
    }
`;



