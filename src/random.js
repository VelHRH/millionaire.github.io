function isEmpty(str) {
  return !str.trim().length;
}

function getRandoms() {
  resRand.value = '';
  let minVal = parseFloat(document.getElementById("begN").value);
  minVal = Math.ceil(minVal);
  let maxVal = parseFloat(document.getElementById("endN").value);
  maxVal = Math.floor(maxVal);
  let numb = parseFloat(document.getElementById("numb").value);
  if (minVal > maxVal) {
    resRand.value = "Мінімальне значення більше максимального";
    return;
  }
  if (numb > maxVal - minVal +1) {
    resRand.value = "Неправильна кількість";
    return;
  }
  if (isNaN(minVal) || isNaN(maxVal)){
    resRand.value = "Введіть числa";
    return;
  }
  if (numb<1){
    resRand.value = "Кількість чисел повинна бути додатньою";
    return;
  }
  let i = 0;
  let resArr = [];
  while (i<numb){
    let k = Math.round(Math.random() * (maxVal - minVal) + minVal);
    let check = 0;
    for (let j = 0; j<resArr.length; j++){
      if (resArr[j] == k){
        check++;
        break;
      }
    }
    if (check==0) {
      resArr.push(k);
      i++;
    }
  }

  for (let j = 0; j<resArr.length; j++){
    resRand.value += `${resArr[j]}  `;
  }
}

OKbtn.onclick = getRandoms;
