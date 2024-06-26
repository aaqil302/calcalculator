function calculateCalories(){
  let age = document.getElementById('age').value;
  let gender = document.getElementById('Gender').value;
  let height = document.getElementById('Height').value;
  let weight = document.getElementById('Weight').value;
  let activity = document.getElementById('activity').value;


if(!age || !height || !weight){
  alert("Please fill in all fields");
  return;
}

let bmr;
if(gender == "male"){
   bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
}else{
   bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
}

const calories = bmr * activity;

const resultDiv = document.getElementById('result');
resultDiv.textContent = `You need approximately ${Math.round(calories)} calories per day`;
};
