
function locationChangeByLoad(event){
    event.preventDefault()
    let location=event.target['baseURI']
    let htmlName=location.split('/')
    htmlName=htmlName[htmlName['length']-1] 
    let name=sessionStorage.getItem('name')
    name==null?htmlName=htmlName:htmlName=name
    history.pushState({},'','index.html')
    history.pushState({},'','pages/'+htmlName)
    let title
    htmlName=='index.html'?title='Главная':htmlName=='map.html'?title='Map':title='Timer'
    document.title=title
    sendRequet(htmlName).then(data=>loadCode(data))
}
function locationChangeByLink(event,location){
    event.preventDefault();
    let htmlName
    htmlName=location.split('/')
    htmlName=htmlName[htmlName['length']-1] 
    history.pushState({},'',htmlName)
    let title
    htmlName=='index.html'?title='Главная':htmlName=='map.html'?title='Map':title='Timer'
    document.title=title
    sendRequet(htmlName).then(data=>loadCode(data))
}
function sendRequet(htmlName){
    let app=document.getElementById("app")
    return fetch(htmlName).then(respone=>{
      return respone.text()
    })
}

function loadCode(response){
  let app=document.getElementById("app")
  app.innerHTML=response
}

