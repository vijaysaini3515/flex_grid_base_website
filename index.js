const mobileMeny = document.querySelector('.mobile_menu');
const scrollBtn = document.querySelector('.scroll_top');

mobileMeny.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')
})

window.addEventListener('scroll',function(){
    if(this.document.body.scrollTop==100 || this.document.documentElement.scrollTop>100){
        scrollBtn.style.display = 'block';
    }else{
        scrollBtn.style.display = 'none'
    }
})

scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})