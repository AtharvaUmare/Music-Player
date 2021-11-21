console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Insane -AP Dhillon", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Mere Yarra - Sooryavanshi", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tum se Bhi zyada -Tadap", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bijlee - Hardy sandhu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Tera Naam -Darshan Raval", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ranjha - Shershah", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Rataa Lambiyan-Shershah", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Brown Munde -AP Dhillon", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Wafa Na Raas-Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Rabba Mehar Kari-Darshan raval", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Jan Ban Gaye-Khuda Hafiz", filePath: "songs/1.mp3", coverPath: "covers/11.jpg"},
    {songName: "Aabaad Barbaad- Ludo", filePath: "songs/1.mp3", coverPath: "covers/12.jpg"},
    {songName: "Lagdi Lahore Di-Guru R", filePath: "songs/1.mp3", coverPath: "covers/13.jpg"},
    {songName: "Khairiyat-Arijit Singh", filePath: "songs/1.mp3", coverPath: "covers/14.jpg"},
    {songName: "Tu mila to haina-Arijit Singh", filePath: "songs/1.mp3", coverPath: "covers/15.jpg"},
    {songName: "Chale Aana - Armaan Malik", filePath: "songs/1.mp3", coverPath: "covers/16.jpg"},
    {songName: "Kalank - Arijit Singh", filePath: "songs/1.mp3", coverPath: "covers/17.jpg"},
    {songName: "Bekhayali - Kabir Singh", filePath: "songs/1.mp3", coverPath: "covers/18.jpg"},
    {songName: "Mere Shoneya - Kabir Singh", filePath: "songs/1.mp3", coverPath: "covers/19.jpg"},
    {songName: "Mehrama - Darshan Raval", filePath: "songs/1.mp3", coverPath: "covers/20.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

