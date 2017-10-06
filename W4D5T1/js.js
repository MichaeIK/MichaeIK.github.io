
var click1=1;
var click2=1;
var click3=1;

var box1=document.querySelectorAll('.box1');
box1[0].onclick=function(){
    click1++;
    var b=box1[0].firstElementChild.getAttribute('data');
    if(b==1){
        box1[0].firstElementChild.setAttribute('data', 0);
        box1[0].firstElementChild.style.left="1px";
        box1[0].firstElementChild.style.background="tomato";
    }
    else{
        box1[0].firstElementChild.setAttribute('data', 1);
        box1[0].firstElementChild.style.left="70px";
        box1[0].firstElementChild.style.background="lightgreen";
        close();
    }
}
var box2=document.querySelectorAll('.box2');
box2[0].onclick=function(){
    click2++;
    var b=box2[0].firstElementChild.getAttribute('data');
    if(b==1){
        box2[0].firstElementChild.setAttribute('data', 0);
        box2[0].firstElementChild.style.left="1px";
        box2[0].firstElementChild.style.background="tomato";
    }
    else{
        box2[0].firstElementChild.setAttribute('data', 1);
        box2[0].firstElementChild.style.left="70px";
        box2[0].firstElementChild.style.background="lightgreen";
        close();
    }
}

var box3=document.querySelectorAll('.box3');
box3[0].onclick=function(){
        click3++;
    var b=box3[0].firstElementChild.getAttribute('data');
    if(b==1){
        box3[0].firstElementChild.setAttribute('data', 0);
        box3[0].firstElementChild.style.left="1px";
        box3[0].firstElementChild.style.background="tomato";
    }
    else{
        box3[0].firstElementChild.setAttribute('data', 1);
        box3[0].firstElementChild.style.left="70px";
        box3[0].firstElementChild.style.background="lightgreen";
        close();
    }
}
function close(){
    if (click1 === 3){
        click1 = 2;
    }
    if (click2 === 3){
        click2 = 2;
    }
    if (click3 === 3){
        click3 = 2;
    }
    if (click1 === 2){
    box2[0].firstElementChild.setAttribute('data', 0);
    box2[0].firstElementChild.style.left="1px";
    box2[0].firstElementChild.style.background="tomato";
    click1 = 1;
} else if (click2 === 2){
    box3[0].firstElementChild.setAttribute('data', 0);
    box3[0].firstElementChild.style.left="1px";
    box3[0].firstElementChild.style.background="tomato";
    click2 = 1;
}   else if (click3 === 2){
    box1[0].firstElementChild.setAttribute('data', 0);
    box1[0].firstElementChild.style.left="1px";
    box1[0].firstElementChild.style.background="tomato";
    click3 = 1;
    }
    console.log(click1);
    console.log(click2);
    console.log(click3);
}


