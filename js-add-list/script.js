const button = document.querySelector('button');

button.addEventListener('click',() => {

console.log('tıklandı');
})

 const liElemanlari = document.querySelectorAll('li');
liElemanlari.forEach(eleman => {

    eleman.addEventListener('click',e=>{ //burda yazdığımız e nin hiç bir önemi yok event listeneri çağırıyor. genel kullanım e ile.
       // console.log(e);
       // console.log(e.target);
       // console.log('li ye tıklandı');
       // e.target.style.color="blue" // mesela burada e.target ile tıkladığımız şeyi mavi yaptık..
    })
})



const ul = document.querySelector('ul');
ul.addEventListener('click',e =>{
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})

liElemanlari.forEach(eleman =>{

eleman.addEventListener('click',e=>{
   
    //e.target.remove();// tıkladığımız hedeftekini çıkar.
})
})

button.addEventListener('click',()=>{
    const li=document.createElement('li');
    li.textContent='JavaScript';
    ul.prepend(li)
})