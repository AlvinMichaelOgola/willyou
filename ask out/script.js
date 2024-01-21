// const wrapper = document.querySelector('.wrapper');
// const question = document.querySelector('.question');
// const yesBtn = document.querySelector('.yes-btn');
// const noBtn = document.querySelector('.No-btn');

// const wrapperRect = wrapper.getBoundingClientRect();
// const noBtnRect=noBtn.getBoundingClientRect();

// // yesBtn.addEventListener('click', ()=>{
// //     question.innerHTML='I love you, now click this link:';
// // });
// yesBtn.addEventListener('click', () => {
//     question.innerHTML = 'I love you so much: <a href="https://example.com" target="_blank">here!</a>';
// });
// noBtn.addEventListener('mouseover', () =>{
//   const i =Math.floor(Math.random() * (wrapperRect.width
//     - noBtnRect.width))+1
//     const j =Math.floor(Math.random() * (wrapperRect.height
//         - noBtnRect.height))+1

//         noBtn.style.left=i + 'px';
//         noBtn.style.top=j +'px';
// });
const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.No-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I love you so much: <a href="https://example.com" target="_blank">here!</a>';

    // Play a "ding" sound
    const audio = new Audio('path/to/ding-sound.mp3');
    audio.play();
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// Customized messages for No
noBtn.addEventListener('click', () => {
    // const audio = new Audio('path/to/ding-sound.mp3');
    question.innerHTML = 'Aww, that\'s okay!\n Maybe next time :(';
});

// Confetti animation on Yes using particles.js
yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I love you so much: <a href="https://youtube.com" target="_blank">here!</a>';

    // particlesJS('confetti', {
    //     particles: {
    //         number: {
    //             value: 100,
    //         },
    //         shape: {
    //             type: 'circle',
    //         },
    //         size: {
    //             value: 5,
    //         },
    //         move: {
    //             direction: 'random',
    //             speed: 3,
    //         },
    //     },
    // });
});
