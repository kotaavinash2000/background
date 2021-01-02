const numbers=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const bodyclr=document.querySelector('body');
const clrbtn=document.querySelector('.btn-1');
const hex=document.querySelector('.hex');

clrbtn.addEventListener('click',function(){
    let color="#";
    for(let i=0;i<6;i++){
    let random=Math.floor(Math.random()*numbers.length);
     color+=numbers[random];
    }

hex.innerHTML=color;
bodyclr.style.backgroundColor=color;
});

