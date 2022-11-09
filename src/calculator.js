let action=0;
let dotCounter=0;

let screen = document.getElementById('screen');

let maxFl = (n1, n2) => {
  let fl1 = n1.length - n1.indexOf(".") - 1;
  let fl2 = n2.length - n2.indexOf(".") - 1;
  if (fl1>fl2){
    return fl1;
  } else{
    return fl2;
  }
}

btn0.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "0";
  }
};
btn1.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "1";
  }
};
btn2.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "2";
  }
};
btn3.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "3";
  }
};
btn4.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "4";
  }
};
btn5.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "5";
  }
};
btn6.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "6";
  }
};
btn7.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "7";
  }
};
btn8.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "8";
  }
};
btn9.onclick = function () {
  if(screen.innerText.length<17){
    screen.innerText += "9";
  }
};
btnDot.onclick = function () {
  if((screen.innerText.length<17) && (dotCounter==0) && (screen.innerText[screen.innerText.length-1]!=="%") && (screen.innerText.length>0) && (screen.innerText[screen.innerText.length-1]!=="+")&& (screen.innerText[screen.innerText.length-1]!=="*")&& (screen.innerText[screen.innerText.length-1]!=="/")&& (screen.innerText[screen.innerText.length-1]!=="-")){
    screen.innerText += ".";
    dotCounter++;
  }
};
btnPlus.onclick = function () {
  if(action==0){
    if(screen.innerText.length<17 && (screen.innerText[screen.innerText.length - 1]!==".")){
      screen.innerText += "+";
      action++;
      dotCounter=0;
    }
  }
  
};
btnMinus.onclick = function () {
  if(action==0){
    if(screen.innerText.length<17 && (screen.innerText[screen.innerText.length - 1]!==".")){
      screen.innerText += "-";
      action++;
      dotCounter=0;
    }
  }
};
btnMult.onclick = function () {
  if(action==0){
    if(screen.innerText.length<17 && (screen.innerText[screen.innerText.length - 1]!==".")){
      screen.innerText += "*";
      action++;
      dotCounter=0;
    }
  }
};
btnDiv.onclick = function () {
  if(action==0){
    if((screen.innerText.length<17) && (screen.innerText[screen.innerText.length - 1]!==".")){
      screen.innerText += "/";
      action++;
      dotCounter=0;
    }
  }
};
btnMod.onclick = function () {
  if(action==0){
    if(screen.innerText.length<17 && (screen.innerText[screen.innerText.length - 1]!==".")){
      screen.innerText += "%";
      action++;
      dotCounter=0;
    }
  }
};
btnC.onclick = function () {
  action=0;
  screen.innerText = "";
  dotCounter=0;
};

btnCE.onclick = function () {
  screen.innerText = screen.innerText.slice(0, -1);
  if (screen.innerText.indexOf("%")==-1 && screen.innerText.indexOf("*")==-1 && screen.innerText.indexOf("/")==-1 && screen.innerText.indexOf("+")==-1 && screen.innerText.indexOf("-")==-1){
    action = 0;
    if (screen.innerText.indexOf(".")==-1 ){
      dotCounter=0;
    }else{
      dotCounter++;
    } 
    }
    else{
      let indx = Math.max(screen.innerText.indexOf("%"), screen.innerText.indexOf("*"), screen.innerText.indexOf("/"), screen.innerText.indexOf("+"), screen.innerText.indexOf("-"));
      if (screen.innerText.slice(indx, screen.innerText.length).includes(".")){
        dotCounter++;
      }else{
        dotCounter=0;
    }
  }
};

btnIs.onclick = function (){
  action=0;
  let n1, n2;
  if (screen.innerText.includes("%")){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("%"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("%")+1);
    screen.innerText = parseFloat(n1) * parseFloat(n2) / 100;
  }
  if (screen.innerText.includes("*")){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("*"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("*")+1);
    if (n1.includes(".") && n2.includes(".")){
      let count1 = (n1.length - n1.indexOf(".")) + (n2.length - n2.indexOf(".") -2);
      let r = (parseFloat(n1) * parseFloat(n2));
      if ((r.toString()).includes("e")){
        let s =r.toString();
        let ii = 0;
        let numS='';
        while (s[ii] != 'e'){
          if(s[ii] != "."){
            numS+=s[ii];
          }
          ii++;
        }
        let resS='0.';
        for (ii=0; ii<(parseInt(s[s.length-1])-numS.length+1); ii++){
          resS+="0";
        }
        screen.innerText = resS+numS;
      } else{
        screen.innerText = +(r).toFixed(count1);
      }
    }
    else{
      screen.innerText = parseFloat(n1) * parseFloat(n2);
    }
  }
  if (screen.innerText.includes("+")){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("+"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("+")+1);
    if ((n1.includes(".")) && n2.includes(".")){
      let count1 = maxFl(n1,n2);
      screen.innerText = +(parseFloat(n1) + parseFloat(n2)).toFixed(count1);
    }
    else{
      screen.innerText = parseFloat(n1) + parseFloat(n2);
    }
  }
  if (screen.innerText.includes("-")){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("-"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("-")+1);
    if (n1.includes(".") && n2.includes(".")){
      let count1 = maxFl(n1, n2);
      screen.innerText = +(parseFloat(n1) - parseFloat(n2)).toFixed(count1);
    }
    else{
      screen.innerText = parseFloat(n1) - parseFloat(n2);
    }
  }
  if (screen.innerText.includes("/")){
    n1 = screen.innerText.substring(0, screen.innerText.indexOf("/"));
    n2 = screen.innerText.substring(screen.innerText.indexOf("/")+1);
    if (n2=="0"){
      screen.innerText = "err"
    }
    else{
    
      screen.innerText = +(parseFloat(n1) / parseFloat(n2)).toFixed(10);
  }
  }
  screen.innerText = screen.innerText.slice(0, 18);
  if (screen.innerText.includes(".")){
    dotCounter++;
  }else{
    dotCounter=0;
  }
}
