function dropNavigationClick(event){
    let element=event.getElementsByTagName('img')[0];
    let array=element.src.split("/")
    let name=array[array.length-1]
    if(name=="arrowDown.png"){
        element.src="/images/arrowUp.png"
    }
    else{
        element.src="/images/arrowDown.png"
    }
   

    
    
}