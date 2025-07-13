const video1 = document.getElementById('projectvideo1');
const video2 = document.getElementById('projectvideo2');
const video3 = document.getElementById('projectvideo3');
const hoversign = document.querySelector(".hover-sign");

//sidebar elemnts//

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videolist = [video1, video2, video3];

videolist.forEach(function(video){
  video.addEventListener('mouseover', function(){
    video.play();
    hoversign.classList.add("active")
  })
  video.addEventListener('mouseout', function(){
    video.pause();
    hoversign.classList.remove("active")
  })
})


//sidebar elemnts//

menu.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar")
  sideBar.classList.add("open-sidebar")
})

close.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar")
  sideBar.classList.add("close-sidebar")
})

