//DOM Elements

const input = document.getElementById("user-input")
const calculate = document.getElementById("submit")

function vowel_Counter(input){
    let result = 0;
    let vowels = ["a","e","i","o","u"]
    let input_LC = input.toLowerCase();
    for (let i = 0; i < input_LC.length; i++){
        if(vowels.includes(input_LC[i])){
            result++;
        }
    }
    return `Total Vowel is: ${result}`
}

calculate.addEventListener('click', (e) =>{
    if (input.value === ""){
        alert('Input text first')
        return
    }
    e.preventDefault()
    document.getElementById('result').innerHTML = vowel_Counter(input.value)
    input.value = ""
})