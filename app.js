const question = document.querySelectorAll('.question')
const reponse = document.querySelectorAll('.reponse')
const arrow = document.querySelectorAll('.arrow')

const bgPattern = document.getElementById('bg-pattern-desktop')
const illustrationWomen = document.getElementById('illustration-women-desktop')
const illustrationBox = document.getElementById('illustration-box')

const blocQuestions = document.querySelectorAll('.question-reponse')


for (let i = 0; i < question.length; i++){

    question[i].addEventListener('click', (e) => {
        reponse[i].classList.toggle('active-reponse')
        arrow[i].classList.toggle('rotate')
        question[i].classList.toggle('active-question')
    })

}

const TL = gsap.timeline()
// const TLfaq = gsap.timeline()

gsap.from(blocQuestions,{
    x: '+=200',
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.1
})

TL

.from(bgPattern, {opacity: 0, duration: 0.8})
.from(illustrationWomen, {opacity: 0, y: -400, duration: 0.4}, '-=0.6')
.from(illustrationBox, {opacity: 0, y: -400, duration: 0.4}, '-=0.4')



