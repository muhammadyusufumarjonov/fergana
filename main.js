let div = document.querySelector('div');
let back = document.querySelector('.background');
let h1 = document.querySelector('h1');
let clickBtn = document.querySelector('.clickBtn');
let remove = document.querySelector('.remove');
let rate = document.querySelector('.rate')

div.setAttribute('class','box');


div.style.margin = '0px 450px';
clickBtn.style.background = 'green';
clickBtn.style.color = '#fff';
clickBtn.style.padding = '20px 40px';


remove.style.background = 'red'
remove.style.color = '#fff';
remove.style.padding = '20px 40px';


rate.style.padding = '20px 45px 20px 50px'

let count = 0;
h1.innerText = count;
clickBtn.addEventListener('click', () => {
    if(count < 10){
        count++ 
    }else{
        clickBtn.style.background = 'darkgreen';
        clickBtn.style.color = '#fff';
        h1.style.color = 'black';
        alert(`Balkim to'xtatarsiz bu ishni qilishni`)
    }
        h1.innerText = count;
})
remove.addEventListener('click', () => {
    if(count > 0){
        count--
    }else{
        remove.style.background = 'black'
        h1.style.color = 'red'
        alert(`Bo'ldi boshqa remove tugmasi bosilmasin aks
        holda sizning qurilmangiz ishdan chiqishi mumkin`)
    }
    h1.innerText = count;
})
    rate.addEventListener('click', () => {
    alert(`Sizning har qanday fikringiz biz uchun muhim buni be'tibor qoldirmang`)
})