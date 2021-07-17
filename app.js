const music = document.querySelector('audio')
const play = document.getElementById('play')


let isplaying = false; 
const playmusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace('fa-play', 'fa-pause');
}

const pausemusic = () => {
    isplaying = false;
    music.pause()
    play.classList.replace('fa-pause', 'fa-play')
}

play.addEventListener('click',  ()=> {
    isplaying ? pausemusic() : playmusic();
})

// music change 
const audio = document.querySelector('audio');
const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const Play = document.getElementById('play');
const Prev = document.getElementById('prev');
const Forward = document.getElementById('forward');


const songs = [
    {
    title: 'Let Me Love You',
    artist: 'Justin Bieber',
    name: 'Let Me Love You.mp3',
    },
    {
        title: ' Dance Monkey ',
        artist: 'Tones and I ',
        name: 'Dance Monkey.mp3', 
    },
    {
        title: ' My heart stereo ',
        artist: 'Adam Levine',
        name: 'My heart stereo.mp3',
    },
    {
        title: ' MINECRAFT SKELETON RAP ',
        artist: 'Dan Bull',
        name: 'MINECRAFT SKELETON RAP.mp3',
    },
    {
        title: 'Dont Wanna Know ',
        artist: 'Maroon 5',
        name: 'Dont Wanna Know.mp3',
    },

];

const loadSong = (song) => {
     title.textContent = song.title;
     artist.textContent = song.artist;
     music.src = song.name;
    
    //  img.src = 'images/' + songs.title +',jpg'
};


(loadSong(songs[0]));

songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playmusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playmusic(); 
}


Forward.addEventListener('click', nextSong);
Prev.addEventListener('click', prevSong);