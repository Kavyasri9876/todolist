import React from 'react';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

const UseStateDemo = () => {
    const [count,setCount]= useState(0)
    //let count=0;
    const incrementCounter = () => {
        setCount((preCount) => preCount+1);
    }
    const decrementCounter = () => {
        setCount((preCount) => {
            preCount=preCount-1;
            return preCount<0 ? 0 : preCount;

        });
    }
  return (
    <>
        <Button onClick={()=>incrementCounter()}>+</Button>
        <span>{count}</span>
        <Button onClick = {() => decrementCounter()}>-</Button>
    </>
  )
}

export default UseStateDemo
