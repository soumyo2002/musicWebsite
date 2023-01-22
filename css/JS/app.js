

const songs=[
    {
        id:'1',
        songName:`On my way <br>
        <div class="singer">Alan Walker</div>`,
        poster: "/img/1.jpg"
    },
    {
        id:'2',
        songName:`Alan Walker-Fade <br>
        <div class="singer">Alan Walker</div>`,
        poster: "/img/2.jpg"
    },
    {
        id:"3",
        songName:`Cartoon <br>
        <div class="singer">Alan Walker</div>`,
        poster: "/img/3.jpg"
    },
    {
        id:"4",
        songName:`Warriyo <br>
        <div class="singer">Mortals</div>`,
        poster: "/img/4.jpg"
    },
    {
        id:"5",
        songName:`Gazi <br>
        <div class="singer">Ertugrul</div>`,
        poster: "/img/5.jpg"
    },
    {
        id:"6",
        songName:`Electronic music <br>
        <div class="singer">Electro</div>`,
        poster: "/img/6.jpg"
    },
    {
        id:"7",
        songName:`Agar tum sath ho <br>
        <div class="singer">Tamasha</div>`,
        poster: "/img/7.jpg"
    },
    {
        id:"8",
        songName:`Suna Hai <br>
        <div class="singer">Neha Kakakar</div>`,
        poster: "/img/8.jpg"
    },
    {
        id:"9",
        songName:`Dilber <br>
        <div class="singer">Satyameva jayeta</div>`,
        poster: "/img/10.jpg"
    },
    {
        id:"10",
        songName:`Duniya <br>
        <div class="singer">Lukka Chippi</div>`,
        poster: "/img/11.jpg"
    },
    {
        id:"11",
        songName:`Lagdi Lahore <br>
        <div class="singer">Street dancer</div>`,
        poster: "/img/9.jpg"
    },
    {
        id:"12",
        songName:`Putt Jaat Da <br>
        <div class="singer">Putt Jaat Da</div>`,
        poster: "/img/12.jpg"
    },
    {
        id:"13",
        songName:`Barishein <br>
        <div class="singer">Atif Aslam</div>`,
        poster: "/img/13.jpg"
    },
    {
        id:"14",
        songName:`Vaste <br>
        <div class="singer">Divya Bhanushali</div>`,
        poster: "/img/14.jpg"
    },
    {
        id:"15",
        songName:`Lut Gaye <br>
        <div class="singer">Jubin Nautiyal</div>`,
        poster: "/img/15.jpg"
    },
    {
        id:"16",
        songName:`Tu meri zindagi hai <br>
        <div class="singer">Jubin Nautiyal</div>`,
        poster: "/img/16.jpg"
    },
    {
        id:"17",
        songName:`Batao yaad hai <br>
        <div class="singer">Fateh Ali Khan</div>`,
        poster: "/img/17.jpg"
    },
    {
        id:"18",
        songName:`Passori <br>
        <div class="singer">Ali Sethi</div>`,
        poster: "/img/18.jpg"
    },
    {
        id:"19",
        songName:`Munde pagal <br>
        <div class="singer">Ap Dhillon</div>`,
        poster: "/img/19.jpg"
    },
    {
        id:"20",
        songName:`Dunny 82K <br>
        <div class="singer">Ap Dhillon</div>`,
        poster: "/img/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})


let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=300;
})
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=300;
})

let pop_artist_left=document.getElementById('pop_artist_left');
let pop_artist_right=document.getElementById('pop_artist_right');
let item=document.getElementsByClassName('item')[0];

pop_artist_left.addEventListener('click',()=>{
    item.scrollLeft-=300;
})
pop_artist_right.addEventListener('click',()=>{
    item.scrollLeft+=300;
})