

let sounds = ['alarm', 'dog', 'bird', 'gasp', 'punch', 'roar'];

sounds.forEach(sound => {
    let btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').append(btn);
});

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause();
        song.currentTime = 0;
    });
}