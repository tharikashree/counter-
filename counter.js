let countNo=document.getElementById("count");
let counter=0;
function incFunc()
{
    counter+=1;
    countNo.textContent=counter;
}
function decFunc(){
    if(counter!=0){
    counter-=1;
    countNo.textContent=counter;
}
}
let saveIt=document.getElementById("entries");
function saveFunc(){
    let str= counter+",";
    saveIt.innerHTML+=str;
}
