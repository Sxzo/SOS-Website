const opacityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showo')
        } else {
            entry.target.classList.remove('showo')
        }
    })
})


const hiddenOpacityElements = document.querySelectorAll(".hiddeno")
hiddenOpacityElements.forEach((el) => opacityObserver.observe(el))


const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('shows')
        } else {
            entry.target.classList.remove('shows')
        }
    })
})


const hiddenSlideElements = document.querySelectorAll(".hiddens")
hiddenSlideElements.forEach((el) => slideObserver.observe(el))

const slideListObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showlist')
        } else {
            entry.target.classList.remove('showlist')
        }
    })
})


const hiddenSlideListElements = document.querySelectorAll(".hiddenlist")
hiddenSlideListElements.forEach((el) => slideListObserver.observe(el))