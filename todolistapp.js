input = document.querySelector('.inputclass');
btn = document.querySelector('.submited')
body = document.querySelector('body')
const inputHandlerFactory = (button,input)=> {
    const addText = () =>{
        const h2 = document.createElement('h2');
        h2.innerText  = input.value ;
        h2.style.backgroundColor = 'yellow';
        h2.style.justifyContent = 'space-between';
        h2.style.display = 'flex';
        x = document.createElement('span');
        x.setAttribute("class","Xspan")
        x.innerText = "×"
        body.append(h2);
        h2.append(x);
    }
    button.addEventListener('click',addText)
}
inputHandlerFactory(btn,input);
body.addEventListener('click',e =>{
    if(e.target.tagName === 'SPAN'){
        e.target.closest('H2').remove();
    }
});