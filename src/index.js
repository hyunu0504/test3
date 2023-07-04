import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    
);

// class 문법 consturctor 생략 버전

class humanTall{
        tall = "173CM"
    printTall = () => {
        console.log(this.tall)
    }
}


class human extends humanTall{
    name = "hong"
    height = "66kg"

    printName(){
        console.log(this.name)
    }
    printHeight(){
        console.log(this.height)
    }
}


const myInfo = new human;

myInfo.printName();
myInfo.printHeight();
myInfo.printTall();

// 구조분해

const numbers = [1,2,3];
const [num1, , num3] = numbers;
console.log(num1, num3)
 // = 1, 3 출력

  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
