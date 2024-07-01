let rate = document.querySelector('#rate')
let amount = document.querySelector('#Amount')
let btn = document.querySelector('button')
let ans = document.querySelector('span')
let clear = document.querySelector('#clear')

function interestCalculation(amounT,percentage){
    let percent = parseInt(percentage)/100
    let interestAmount = (amounT*percent)
    return interestAmount;
}
btn.addEventListener('click',()=>{
    ans.innerText = interestCalculation(amount.value,rate.value)
})
clear.addEventListener('click',()=>{
    amount.value = ''
    rate.value = ''
    ans.innerText = ''
})

