
let second = {
    picturesBlock: document.querySelector(".pictures"),
    picturesImg: [
       "image/1.jpg",
      
       
        
    
    ],  
}
for (let i = 0; i < second.picturesImg.length; i++) {
    let img = document.createElement("img")
    second.picturesBlock.append(img)
    img.src = second.picturesImg[i]
}


let videos = {
    vieosBlock: document.querySelector(".videos"),
    video: [
        "image/video/IMG_5964.MOV",
    ]
}
for (let i=0;i< videos.video.length; i++ ){
     let video=document.createElement("video")
     video.videosBlock.append(video)
     video.autoplay = video.videos[i]

}



