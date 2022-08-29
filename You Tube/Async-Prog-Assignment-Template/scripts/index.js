
let arr =[
   " https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  " https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWUlMjBwb3N0ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1597114214150-3f43079734df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdmllJTIwcG9zdGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"

];

let a = 0;
 let id = setInterval(function(){
    if(a === arr.length){
        a = 0;
    }

    let img = document.createElement("img");
    img.src = arr[a];
    document.getElementById("slideshow").innerHTML = null;
    document.getElementById("slideshow").append(img)
    a++
 },1000)