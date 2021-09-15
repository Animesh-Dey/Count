let container=document.querySelector('.container');
// let values=document.querySelector('.value');
// let btns=document.querySelectorAll('button');
let count=0;
// console.log(container);
let firstContainer=document.createElement('div');
firstContainer.classList.add('h1');
let countValue=document.createElement('h1');
countValue.textContent=0;
countValue.classList.add('value');
firstContainer.appendChild(countValue);

let secondContainer=document.createElement('div');
secondContainer.classList.add('button');


let decreaseButton=document.createElement('button');
decreaseButton.classList.add('decrease');
decreaseButton.textContent=" - ";
decreaseButton.type="button";
decreaseButton.title="Click Here to Increase the value";
let retryButton=document.createElement('button');
retryButton.classList.add('retry');
retryButton.textContent=" Retry ";
retryButton.type="button";
retryButton.title="Click Here to Increase the value";
let increaseButton=document.createElement('button');
increaseButton.classList.add('increase');
increaseButton.textContent=" + ";
increaseButton.type="button";
increaseButton.title="Click Here to Increase the value";
secondContainer.append(decreaseButton,retryButton,increaseButton);

container.append(firstContainer,secondContainer);


let btns=[];
btns[0]=increaseButton;
btns[1]=retryButton;
btns[2]=decreaseButton;
// console.log(btns);

btns.forEach((value)=>{
//    console.log(value);
   value.addEventListener('click',(e)=>{
       e.preventDefault();
    //  const style=e;
    // console.log(e.currentTarget.classList);
    const style=e.currentTarget.classList;
    if(style.contains("increase"))
     count++;
    else if(style.contains("decrease"))
      count--;
    else
      location.reload();

    countValue.textContent=count;


    if(countValue.textContent<0)
    {
        countValue.style.color="red";
    }
    else
    {
        countValue.style.color="black";
    }

   });
});