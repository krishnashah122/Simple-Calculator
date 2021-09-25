let screen = document.getElementById('screen');
    let buttons = document.querySelectorAll('button');
    let onScreen = '';
    for(items of buttons){
       items.addEventListener('click', (key)=>{
           btnText = key.target.innerText;
           
           if (btnText == '='){
               screen.value = eval(onScreen);
           }
           else if (btnText == 'C'){
               onScreen = '';
               screen.value = onScreen;
           }
           else{
               onScreen += btnText;
               screen.value = onScreen;
           }
       })
    }