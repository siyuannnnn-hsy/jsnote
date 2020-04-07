(function () {
    var title = [],
        menus = [];
    for(let i =0;i<5;i++){
        title[i] = document.getElementsByClassName('title')[i];
        menus[i] = document.getElementsByClassName('menus')[i];
        title[i].onmouseover = function () {
            menus[i].setAttribute("class", "menus active")
            menus[i].onmouseover = function () {
                menus[i].setAttribute("class", "menus active")
              }
            menus[i].onmouseout = function () {
                menus[i].setAttribute("class", "menus")
            }
            
        }
        // title[i].onmouseout = function () {
        //     menus[i].setAttribute("class", "menus")
        // }
    }
   var font = document.getElementById('font');
   var web = document.getElementsByClassName('dialogbox')[0]
   font.onclick = function(){
       console.log(web)
       web.setAttribute("class", "active2")
   }
}())