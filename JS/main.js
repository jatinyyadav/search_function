const searchFun = () =>{
    let filter = document.getElementById('user-input').value.toUpperCase();
    
    const item = document.getElementsByClassName('card');
    for(var i=0;i<item.length;i++){
       const name = item[i].getElementsByTagName('li')[0];

       if(name){
        let textValue = name.textContent || name.innerHTML;
        
        if(textValue.toUpperCase().indexOf(filter) > -1){
            item[i].style.display = "";
        }else{
            item[i].style.display = "none";
        }
       }
    }
}