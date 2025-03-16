let progress = document.getElementById('progress');
let volume = document.getElementById('volume');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

const songs = [
    { src: "Media/Aawara - (Raag.Fm).mp3", img: "Media/Aawara_King,_Zaeden,KSHMR.webp", title: "Aawara", artist: "King, Zaeden, KSHMR" },
    { src: "Media/Sarkaare - (Raag.Fm).mp3", img: "Media/Sarkaare.png", title: "Sarkaare", artist: "King" },
    { src: "Media/Stay - (Raag.Fm).mp3", img: "Media/Stay.jpg", title: "Stay", artist: "King" },
    { src: "Media/STILL THE SAME - (Raag.Fm).mp3", img: "Media/Way_Bigger.webp", title: "Still The Same", artist: "King" }
];

let currentSongIndex = 0;

// Play / Pause Function
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        song.pause();
        ctrlIcon.classList.replace('fa-pause', 'fa-play');
    }
}

// Update Progress Bar
song.addEventListener('timeupdate', function () {
    let progressValue = (song.currentTime / song.duration) * 100;
    progress.value = progressValue || 0; // Prevent NaN issue
});

// Seek Function (Drag progress bar to change position)
progress.addEventListener('input', function () {
    let seekTime = (progress.value / 100) * song.duration;
    song.currentTime = seekTime;
});

// Change Songs
function playSong(index) {
    currentSongIndex = index;
    let selectedSong = songs[index];

    song.src = selectedSong.src;
    document.querySelector(".song-img").src = selectedSong.img;
    document.querySelector(".song-name").innerText = selectedSong.title;
    document.querySelector(".artist-name").innerText = selectedSong.artist;

    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
}

// Next & Previous Functions
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
}

// Volume Control
volume.addEventListener('input', function () {
    song.volume = volume.value / 100;
});
