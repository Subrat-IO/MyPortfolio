const video1 = document.getElementById('projectvid-1');
const video2 = document.getElementById('projectvid-2');
const video3 = document.getElementById('projectvid-3');

const vidlist = [video1,video2,video3];

vidlist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
    })
    video.addEventListener('mouseout',function(){
        video.pause()
    })
})
