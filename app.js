function isMobileDevice() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    return screenWidth < 768 || screenHeight < 768; // Adjust the threshold as per your requirements
}


    const opacityObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry)
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
            // console.log(entry)
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
            // console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('showlist')
            } else {
                entry.target.classList.remove('showlist')
            }
        })
    })
    
    
    const hiddenSlideListElements = document.querySelectorAll(".hiddenlist")
    hiddenSlideListElements.forEach((el) => slideListObserver.observe(el))


