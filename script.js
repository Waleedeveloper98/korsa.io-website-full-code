function navbar() {
    var menuIcon = document.querySelector(".menu-icon")
    var phoneMenu = document.querySelector(".phone-menu")
    var flag = 1
    menuIcon.addEventListener("click", function () {
        if (flag === 1) {
            phoneMenu.style.transform = "translateY(0%)"
            flag = 0
        } else {
            flag = 1
            phoneMenu.style.transform = "translateY(-120%)"
        }
    })

    var crossIcon = document.querySelector(".cross-icon")
    crossIcon.addEventListener("click", function () {
        phoneMenu.style.transform = "translateY(-120%)"
    })


    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !phoneMenu.contains(event.target)) {
            if (flag === 0) {
                phoneMenu.style.transform = "translateY(-120%)";
                flag = 1;
            }
        }
    })
}


function heroPage() {
    // Create a matchMedia instance
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
        // Add animations for viewports with a max width of 600px
        var tl = gsap.timeline()
        tl.from(".anim", {
            duration: .8,
            stagger: .2,
            opacity: 0,
            y: -20,
        }, 'a')
        tl.from(".btn-anim", {
            opacity: 0,
            duration: 1
        })
        tl.to(".heading-container h1", {
            y: 0,
            rotate: 0,
            duration: 1,
            delay: .6
        }, 'a')
        tl.to(".paragraph-text p", {
            y: 0,
            rotate: 0,
            duration: 1,
            delay: .5
        }, 'a')

    });
}


function page2() {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
        // Add animations for viewports with a max width of 600px
        var tl = gsap.timeline()
        tl.to(".page2 img", {
            x: "-150%",
            scrollTrigger: {
                trigger: ".page2",
                scroller: "body",
                start: "top 0%",
                end: "top -100%",
                pin: true,
                scrub: 2
            }
        })

    });
}



function discoverPage() {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1100px)", () => {
        // Add animations for viewports with a max width of 600px
        gsap.to(".discoverPage .cards-container", {
            x: "-45%",
            stagger: .3,
            scrollTrigger: {
                trigger: ".discoverPage",
                scroller: "body",
                start: "top 0%",
                end: "bottom bottom",
                pin: true,
                scrub: 1
            }
        })
    });
}

function servicesPage() {
    gsap.set(".service img", { width: "0%", opacity: 0 })

    let mm = gsap.matchMedia();

    mm.add("(min-width: 780px)", () => {
        // Add animations for viewports with a max width of 780px
        var serviceBox = document.querySelectorAll(".service")
        serviceBox.forEach(function (service) {
            service.addEventListener("mousemove", function (dets) {
                var rect = service.getBoundingClientRect();
                var yPos = dets.clientY - rect.top;
                gsap.to(service.querySelector(".service img"), {
                    width: "28%",
                    opacity: 1,
                    duration: .4,
                    y: yPos - (service.querySelector(".service img").offsetHeight / 1.3)
                })
            })
            service.addEventListener("mouseleave", function () {
                gsap.to(service.querySelector(".service img"), {
                    width: "0%",
                    opacity: 0,
                    duration: .4
                })
            })
        })
    });
}

function page6() {
    var processBoxes = document.querySelectorAll(".process-box")
    var upDownIcon = document.querySelectorAll(".updownIcon")
    var processBoxBtm = document.querySelectorAll(".process-box-btm")
    var rightBox = document.querySelectorAll(".process-box-right div")

    processBoxes.forEach(function (processBox, index) {
        processBox.addEventListener("click", function () {
            processBoxBtm.forEach(function (btmBox, idx) {
                if (idx !== index) {
                    btmBox.classList.add("hidden")
                    upDownIcon[idx].style.transform = "rotate(0deg)"
                    rightBox[idx].style.backgroundColor = `transparent`
                }
            })



            if (processBoxBtm[index].classList.contains("hidden")) {
                processBoxBtm[index].classList.remove("hidden")
                upDownIcon[index].style.transform = "rotate(180deg)"
                rightBox[index].style.backgroundColor = `blue`
                processBox.style.color = "white"
            }
            else {
                processBoxBtm[index].classList.add("hidden")
                upDownIcon[index].style.transform = "rotate(0deg)"
                rightBox[index].style.backgroundColor = `transparent`
                processBox.style.color = "#9CA3AF"
            }
        })





    });
}

function page8() {
    var processBoxes = document.querySelectorAll(".p8-process-box ");
    var p8Inner = document.querySelectorAll(".p8-inner")
    var upDownIcon = document.querySelectorAll(".p8-inner .updownIcon");
    var processBoxBtm = document.querySelectorAll(".p8-process-box-btm");
    var rightBox = document.querySelectorAll(".p8-process-box-right div");

    processBoxes.forEach(function (processBox, index) {
        processBox.addEventListener("click", function () {
            processBoxBtm.forEach(function (btmBox, idx) {
                if (idx !== index) {
                    btmBox.classList.add("hidden");
                    rightBox[idx].style.backgroundColor = `transparent`;
                    p8Inner[idx].style.backgroundColor = "transparent"
                    p8Inner[idx].style.paddingLeft = "0px"
                    p8Inner[idx].style.paddingRight = "0px"
                    rightBox[idx].style.transform = `rotate(0deg)`;
                    processBoxes[idx].style.color = "#9CA3AF";
                    upDownIcon[idx].style.color = "#9CA3AF"
                }
            });

            if (processBoxBtm[index].classList.contains("hidden")) {
                p8Inner[index].style.backgroundColor = "#F7FAFC";
                p8Inner[index].style.paddingLeft = "10px"
                p8Inner[index].style.paddingRight = "10px"
                processBoxBtm[index].classList.remove("hidden");
                rightBox[index].style.backgroundColor = `blue`;
                rightBox[index].style.transform = `rotate(180deg)`;
                processBox.style.color = "black";
                upDownIcon[index].style.color = "white"
            } else {
                processBoxBtm[index].classList.add("hidden");
                p8Inner[index].style.backgroundColor = "transparent"
                p8Inner[index].style.paddingLeft = "0px"
                p8Inner[index].style.paddingRight = "0px"
                rightBox[index].style.backgroundColor = `transparent`;
                rightBox[index].style.transform = `rotate(0deg)`;
                processBox.style.color = "#9CA3AF";
                upDownIcon[index].style.color = "#9CA3AF"
            }
        });
    });

}



navbar()
heroPage()
page2()
discoverPage()
servicesPage()
page6()
page8()