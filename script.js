let parent=document.querySelector('#container')
let grid=document.querySelector('.grid')

let size=prompt("enter")




function container(){


 let firstInnerCointainer=document.createElement('div')
 firstInnerCointainer.classList.add('div')
    parent.appendChild(firstInnerCointainer)

console.log("first container created")
let i=0;
while (i<=size){
i++
let secondInnercontainer=document.createElement('div')
secondInnercontainer.classList.add('divIn')
firstInnerCointainer.appendChild(secondInnercontainer)
let secondStyle=secondInnercontainer.style;


secondStyle.setProperty("border","solid black 0.1px")

 


secondInnercontainer.addEventListener('mouseover',function(e){
    

        secondStyle.setProperty("background-color","blue")
    
       
    


})



let colorRed=document.querySelector('.color')




let erase=document.querySelector('.erase')
erase.addEventListener('click',function(e){

    secondStyle.setProperty("background-color","")




})


}

}

for(i=0;i<size;i++){
    container();


    console.log("yandhi");
    
            }   

