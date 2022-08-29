let menu = document.getElementById("menu1");
let sideBar = document.querySelector(".side_bar");
let container = document.querySelector(".container");

menu.onclick = () => {
    sideBar.classList.toggle("small_sidebar")
    container.classList.toggle("large_container")
}



let api = "AIzaSyAI_67DutYCz5HOxYyrEcRDTFSteSLMQO4"

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=trending&key=AIzaSyAI_67DutYCz5HOxYyrEcRDTFSteSLMQO4`

let getData = async(url) => {
    let res =await fetch(url)
    let data = await res.json();
    console.log(data.items)
    append(data.items)
}
let allData="";
let append = (data) => {
    data.forEach((el)=>{
        allData+=`<div class="video_list">
        <a href=""><img src=${el.snippet.thumbnails.medium.url} class="thumbnail"></a>
    <div class="flex">
        <img src="./images/Jack.png">
        <div class="vid_info">
            <a href="">${el.snippet.title}</p>
            <p>${el.snippet.channelTitle}</p>
            <p>15k views &bull; 2 days</p>
        </div>
    </div>
</div>`

    })  
    document.getElementById("list").innerHTML=allData;
}

getData(url)

// https://www.googleapis.com/youtube/v3/channels?part=snippet&UC2Z2M3HR-yAbUpAdyXEGBOQ&fields=items%2Fsnippet%2Fthumbnails&key=AIzaSyAI_67DutYCz5HOxYyrEcRDTFSteSLMQO4


