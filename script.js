document.addEventListener("DOMContentLoaded", () => {
    //Part 1
    const myName="Sandra Koskei";
    const myAge=21;
    let canDrive=false;

    if(myAge>=18){
        canDrive=true;
    }else{
        canDrive=false;
    }

    console.log(`${myName} is ${myAge} years old.` );
    console.log(`Can they drive? ${canDrive? "Yes" : "No"}` );
    
    //Part 2
    function updateHeading(newText){
        document.getElementById("main-heading").textContent=newText;
    }
    function addNumbers(a, b){
        return a + b;
    }
    const sumResult=addNumbers(10, 5);
    console.log(`The sum of 10 and 5 is ${sumResult}` );

    //Part 3
    const loopList=document.getElementById("loop-list");
    //Example 1
    const fruits=["Apple", "Banana", "Cherry", "Pineapple", "Blueberry"];
    console.log("For Loop: ")
    for(let i=0; i<fruits.length; i++){
        const listItem=document.createElement("li");
        listItem.textContent= `For loop item: ${fruits[i]}`;
        loopList.appendChild(listItem);
        console.log(fruits[i]);
    }
    //Example 2
    let count=0;
    console.log("While Loop: ")
    while(count<3){
        const listItem=document.createElement("li");
        listItem.textContent=`While loop count: ${count}`;
        loopList.appendChild(listItem);
        console.log(`Count is: ${count}`);
        count++;
    }

    //Part 4
    //Interaction 1
    const headingElement=document.getElementById("main-heading");
    headingElement.textContent="Welcome to My JavaScript Page!";

    //Interaction 2
    const actionButton=document.getElementById("action-button");
    actionButton.addEventListener("click",()=>{

        const infoParagraph=document.getElementById("info-text");
        infoParagraph.textContent="Button Clicked! You found the magic in DOM interaction!";
        infoParagraph.style.color="blue";
        infoParagraph.style.fontWeight="bold";
        updateHeading("Magic Complete!");
    });
});