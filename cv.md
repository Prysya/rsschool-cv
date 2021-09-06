# [rsschool-cv](https://prysya.github.io/rsschool-cv/cv)

## Stas Stakhovskiy

## My contacts

[![Twitter](https://raw.githubusercontent.com/prysya/prysya/main/icons/icons8-twitter.png)](https://twitter.com/prysya_webdev)
[![Github](https://raw.githubusercontent.com/prysya/prysya/main/icons/icons8-github.png)](https://github.com/prysya)
[![Telegram](https://raw.githubusercontent.com/prysya/prysya/main/icons/icons8-telegram.png)](https://t.me/prysya_webdev)

## Summary

Let me introduce myself, my name is Stas, I'm 26 years old, I'm from Moscow. I've been working as a Software Engineer 
at <a href="http://istokmw.ru/">JSC "RPC "Istok" named after Shokin"</a> (Rostec) for a year. I started learning 
javascript 3 years ago on freeCodeCamp, youtube and udemy. Then, in October 2020 I've successfully completed 
web-developer course at Yandex.Praktikum. Before I got Software Engineer offer, I worked as a senior technical 
support engineer. My recent achievement is that the app, that I worked on, called [IIoT Istok](http://it.istokmw.ru/iiot/),
took the second place on ["digital breakthrough" nomination on CIPR DIGITAL 2021](https://award.cipr.ru/final-results/).
At rc-school I want to consolidate my knowledge on vanilla js and learn something new.

## Skills

- JavaScript 
- Git 
- Typescript 
- ReactJS 
- Webpack 
- Node.js 
- Redux 
- Recoil 
- NextJS 
- MongoDB

## Code example

[Codewars "Turn String Input into Hash" cata](https://www.codewars.com/kata/52180ce6f626d55cf8000071)

````javascript
const strToHash = (str) => str === ""
  ? {} 
  : str
    .split(", ")
    .map(item => item.split("="))
    .reduce((acc, item) => ({...acc, [item[0]]: Number(item[1])}), {});
````

[Codewars "Decipher this!" cata](https://www.codewars.com/kata/581e014b55f2c52bb00000f8)

````javascript
function decipherThis(str) {
  return str.split(" ").map(item => {
    return item.replace(/([a-z])([a-z]*)?([a-z])/i, (match, p1, p2, p3) => {
      return p2 ? `${p3}${p2}${p1}` : `${p3}${p1}`
    }).replace(/\d+/g, match => String.fromCharCode(+match));
  }).join(" ");
}; 
````

## Education

* **Russian State University of Tourism and Services Studies**
  * Faculty of Services Studies (Department of Information systems)
* **Yandex.Praktikum**
  * Web-developer
  * React-developer
* **Udemy**
  * The Web Developer Bootcamp
  * React Native (in process...)
* **freeCodeCamp**
  * Responsive Web Design
  * JavaScript Algorithms and Data Structures 

## Languages

* **Russian** - Native speaker
* **English** - A2+ (B1 in process…)
