const userWeight  = document.getElementById('weight');
const userHeight = document.getElementById('height');
const userName  = document.getElementById('name');
const userGender = document.querySelector('select');


const result = document.getElementById("result")

const submit = document.querySelector('.btn')



submit.addEventListener('click' , function BMI(){
    const weight = userWeight.value
    const height = userHeight.value
    const BMI = (weight/(height*height)).toFixed(1)
   const Name = userName.value
   const gender = userGender.value


  
    
    if(gender === 'Male'){
        result.innerHTML = `Hi ${Name} your favourite color is Blue and your BMI is ${BMI}ft/m`
    }else if(gender === "Female"){
        result.innerHTML = `Hi ${Name} your favourite color is Pink and your BMI is ${BMI}ft/m`
    }
    
})










