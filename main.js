
let a=document.getElementById("container").children;
let hidden=document.getElementById("p1");
let div=document.getElementById("div2");

console.log(a)
let board=[[a[0],a[1],a[2]],
[a[3],a[4],a[5]],
[a[6],a[7],a[8]]];
function checkdiag(){
    if(board[0][0].value===board[1][1].value&& board[1][1].value===board[2][2].value&&board[1][1].value!==''||board[0][2].value===board[1][1].value&&board[1][1].value===board[2][0].value&&board[1][1].value!==''){
return true;
    }
    return false;
}
function chekrow(){
    for(let i=0;i<3;i++){
        if(board[i][0].value===board[i][1].value&&board[i][1].value===board[i][2].value&&board[i][0].value!==''){
        return true;
        }
    }
    return false;
}
    function chekcol(){
    for(let i=0;i<3;i++){
        if(board[0][i].value===board[1][i].value&&board[1][i].value===board[2][i].value&&board[0][i].value!=='')
      {
        return true;
         
      }
    }
    return false;
}
function checkWinner(){

    if(board[0][0].value===board[1][1].value&& board[1][1].value===board[2][2].value&&board[1][1].value!==''){
if(board[0][0].value==='X')
return 2;
else
return -2;
    }
       if( board[0][2].value===board[1][1].value&&board[1][1].value===board[2][0].value&&board[1][1].value!==''){
if(board[1][1].value=='X')
return 2;
else
return -2;
};
   
    for(let i=0;i<3;i++){
        if(board[i][0].value===board[i][1].value&&board[i][1].value===board[i][2].value&&board[i][0].value!==''){
            if(board[i][0].value==='X')
        return 2;
    else
return -2;
        }
    }

    for(let i=0;i<3;i++){
        if(board[0][i].value===board[1][i].value&&board[1][i].value===board[2][i].value&&board[0][i].value!=='')
      {if(board[0][i].value==='X')
        return 2;
         else
         return -2; 
      }}
      let tie=true;
      for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
if(board[i][j].value==='')
tie =false;
        }
      }
      if(tie)
      return 0;
    else
    return 1;
}

let currentplayer='X';
let compplayer='O';
let count=0;
let b1=document.getElementById("x");
let b2=document.getElementById("o");
function stopButtonb1(){
b1.disabled=true;
b2.disabled=true;
b1.style.background=" rgb(86, 153, 246)";
b1.style.boxShadow= "5px 5px 10px rgb(0, 25, 54)";
}function stopButtonb2(){
b2.disabled=true;
b1.disabled=true;
b2.style.background=" rgb(86, 153, 246)"
b2.style.boxShadow= "5px 5px 10px rgb(0, 25, 54)";
}
let divlevel=document.getElementById("div1")
function clickx(){
divlevel.style.display='block';
    stopButtonb1();
}

function clicko(){
   addclick2();
    stopButtonb2();
}
let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");
let level=500;
function stopedlevel(){
l1.disabled=true;
l2.disabled=true;
l3.disabled=true
}
function clicklevel0(){
level=0;
addclick1()
l1.style.background='rgb(85, 146, 203) '
stopedlevel()
}function clicklevel1(){
level=1;
addclick1()
l2.style.background='rgb(85, 146, 203) '
stopedlevel()
} 
function clicklevel2(){
level=2;
addclick1();
l3.style.background='rgb(85, 146, 203) '
stopedlevel()
}

let btt,y;
let buttons=document.querySelectorAll("#b1");
function addclick1(){
    if(level===500)
    alert`please choose level`
    buttons.forEach(button =>{
        button.addEventListener("click",function(event){
            
           
if(!button.disabled &&button.value===''){
button.value=currentplayer;
button.style.color='rgb(214, 17, 17,0.7)'
console.log(checkdiag())
if(chekrow()||chekcol()||checkdiag()){
    div.style.display='block';
    div.firstChild.textContent=`The Winer is Human`
    disableAllButtons();
}

compmove()
}

unwiner();
    })
})
}
let emptycells=[];
function compmove(){
 ;
if(gameover())
return;
if(checkdiag() ||chekcol()||chekrow()||checkWinner()===0)
return;
count++;

console.log(buttons[0])
for(let i=0;i<buttons.length;i++){
    if(buttons[i].value==='')
    emptycells.push(buttons[i]);
}
console.log(level)
if(level===0)
minmax(1,false,true)
else if(level===1)
minmax(3,false,true);
else if(level===2)
minmax(6,false,true)

    if(chekrow()||chekcol()||checkdiag()){
        div.style.display='block';
        div.firstChild.textContent=`The Winer is Computer`
        disableAllButtons();
    }
    
}  
function disableAllButtons(){
    buttons.forEach(button=>{
        button.disabled=true;
    })
}
function unwiner(){
    if(checkWinner()===0){
    div.style.display='block';
    div.firstChild.textContent=`No One Winer`
}
}
function gameover(){
    let end=true;
    buttons.forEach(button=>{
if(!button.disabled)
end=false;
    });
    return end;
}function minmax(depth,isMaximaizing,firsttime){
    let fi,fj;
    let result=checkWinner();
    if(result!==1 || depth===0){
        return result;
    }
    if(isMaximaizing){
        let bestscore=-Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
               
                if(board[i][j].value===''){
                board[i][j].value=currentplayer;
            
            let score=minmax(depth-1,false,false);

            board[i][j].value='';
            console.log(board[i][j].value)
          
       if(score>bestscore){
        bestscore=score;
        
       }}}}
      
        return bestscore;
     
    }
    else{
       
        let bestscore=Infinity;
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i][j].value===''){
                board[i][j].value=compplayer;
            
            let score=minmax(depth-1,true,false);
            board[i][j].value='';
            console.log(board[i][j].value)
       if(score<bestscore){
        bestscore=score;
        fi=i;
        fj=j;
       }}}}
       
       if(firsttime)
       board[fi][fj].value=compplayer;
    board[fi][fj].style.color='rgb(64, 64, 73)'
        return bestscore;
    }
}
function addclick2(){
    buttons.forEach(button =>{
        button.addEventListener("click",function(event){
            if(!button.disabled &&button.value===''){
             button.value=currentplayer;
            if(currentplayer=='X')
            button.style.color='rgb(214, 17, 17,0.7)'
        else
        button.style.color='rgb(64, 64, 73)'

             if(chekrow()||chekcol()||checkdiag()){
                div.style.display='block';
                div.firstChild.textContent=`The Winer is ${currentplayer}`
                disableAllButtons();

            }
unwiner();
currentplayer=(currentplayer==='X')?'O':'X';
        }
})

    })
}

console.log(level)