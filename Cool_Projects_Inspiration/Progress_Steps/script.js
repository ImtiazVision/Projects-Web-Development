const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let activeCurrently = 1

next.addEventListener('click', () => {
    activeCurrently++

    if (activeCurrently > circles.length) {
        activeCurrently = circles.length

    }

    update()
})

prev.addEventListener('click', () => {
    activeCurrently--

    if (activeCurrently > 1) {
        activeCurrently = 1

    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < activeCurrently) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (activeCurrently === 1) {
        prev.disabled = true
    } else if (activeCurrently === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}

