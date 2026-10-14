/* =========================================================
   GSAP
========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   MUSIC
========================================================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;


function startMusic() {

    if (!music) return;

    music.play()
        .then(() => {

            playing = true;

            if (musicBtn) {
                musicBtn.textContent = "Ⅱ";
            }

        })
        .catch(() => {

            console.log(
                "Music playback waiting for interaction."
            );

        });
}


if (musicBtn) {

    musicBtn.addEventListener(
        "click",
        () => {

            if (!music) return;

            if (playing) {

                music.pause();

                playing = false;

                musicBtn.textContent = "♪";

            } else {

                music.play();

                playing = true;

                musicBtn.textContent = "Ⅱ";

            }

        }
    );

}


/* =========================================================
   INTRO ELEMENTS
========================================================= */

const intro =
    document.getElementById("intro");

const startBtn =
    document.getElementById("startBtn");

const age18 =
    document.getElementById("age18");

const age19 =
    document.getElementById("age19");

const balloonStage =
    document.getElementById("balloonStage");

const balloons =
    gsap.utils.toArray(
        ".balloon-letter"
    );

const introFinal =
    document.getElementById("introFinal");


/* =========================================================
   INTRO RESET
========================================================= */

if (age18) {

    gsap.set(
        age18,
        {
            display: "block",
            visibility: "visible",

            opacity: 1,

            xPercent: -50,
            yPercent: -50,

            scale: 1,

            filter:
                "blur(0px)"
        }
    );

}


if (age19) {

    gsap.set(
        age19,
        {
            display: "block",
            visibility: "visible",

            opacity: 0,

            xPercent: -50,
            yPercent: -50,

            scale: .65,

            filter:
                "blur(18px)"
        }
    );

}


if (balloonStage) {

    gsap.set(
        balloonStage,
        {
            opacity: 0
        }
    );

}


if (balloons.length) {

    gsap.set(
        balloons,
        {
            opacity: 0,

            bottom: "-220px",

            scale: .7
        }
    );

}


if (introFinal) {

    gsap.set(
        introFinal,
        {
            opacity: 0,

            y: 30,

            pointerEvents:
                "none"
        }
    );

}


/* =========================================================
   FIRE
========================================================= */

let fire = null;

if (age18) {

    fire =
        document.createElement(
            "div"
        );

    fire.className =
        "fire-glow";

    age18.parentElement.appendChild(
        fire
    );

    gsap.set(
        fire,
        {
            opacity: 0,
            scale: .4
        }
    );

}


/* =========================================================
   INTRO TIMELINE
========================================================= */

const birthdayIntro =
    gsap.timeline({
        paused: true,

        defaults: {
            overwrite: "auto"
        }
    });


/* =========================================================
   01 — 18 APPEARS
========================================================= */

if (age18) {

    birthdayIntro.fromTo(

        age18,

        {
            opacity: 0,
            scale: .85
        },

        {
            opacity: 1,
            scale: 1,

            duration: .8,

            ease:
                "power3.out"
        }

    );

}


/* =========================================================
   02 — FIRE
========================================================= */

if (fire) {

    birthdayIntro.to(

        fire,

        {
            opacity: .85,

            scale: 1.1,

            duration: .7,

            ease:
                "power2.out"
        }

    );

}


/* =========================================================
   03 — 18 SHAKE
========================================================= */

if (age18) {

    birthdayIntro.to(

        age18,

        {

            keyframes: [

                {
                    xPercent: -50,
                    x: -5
                },

                {
                    xPercent: -50,
                    x: 5
                },

                {
                    xPercent: -50,
                    x: -4
                },

                {
                    xPercent: -50,
                    x: 4
                },

                {
                    xPercent: -50,
                    x: 0
                }

            ],

            duration: .55,

            ease: "none"

        }

    );

}


/* =========================================================
   04 — FIRE STRONG
========================================================= */

if (fire) {

    birthdayIntro.to(

        fire,

        {

            opacity: 1,

            scale: 1.8,

            duration: .5,

            ease:
                "power2.in"

        },

        "<"

    );

}


/* =========================================================
   05 — 18 DISAPPEARS
========================================================= */

if (age18) {

    birthdayIntro.to(

        age18,

        {

            opacity: 0,

            scale: 1.5,

            filter:
                "blur(18px) brightness(2.5)",

            duration: .9,

            ease:
                "power3.in"

        }

    );

}


/* =========================================================
   06 — FIRE DISAPPEARS
========================================================= */

if (fire) {

    birthdayIntro.to(

        fire,

        {

            opacity: 0,

            scale: 2.4,

            duration: .7,

            ease:
                "power3.out",

            onComplete: () => {

                if (age18) {

                    gsap.set(
                        age18,
                        {
                            display: "none",

                            visibility:
                                "hidden",

                            opacity: 0
                        }
                    );

                }

                gsap.set(
                    fire,
                    {
                        display: "none",

                        visibility:
                            "hidden",

                        opacity: 0
                    }
                );

            }

        },

        "<"

    );

}


/* =========================================================
   07 — EMPTY PAUSE
========================================================= */

birthdayIntro.to(
    {},
    {
        duration: .45
    }
);


/* =========================================================
   08 — PREPARE 19
========================================================= */

if (age19) {

    birthdayIntro.set(

        age19,

        {

            display: "block",

            visibility:
                "visible",

            opacity: 0,

            scale: .65,

            filter:
                "blur(18px)",

            xPercent: -50,

            yPercent: -50

        }

    );

}


/* =========================================================
   09 — 19 APPEARS
========================================================= */

if (age19) {

    birthdayIntro.to(

        age19,

        {

            opacity: 1,

            scale: 1.08,

            filter:
                "blur(0px)",

            duration: 1.5,

            ease:
                "power3.out"

        }

    );

}


/* =========================================================
   10 — 19 SETTLES
========================================================= */

if (age19) {

    birthdayIntro.to(

        age19,

        {

            scale: 1,

            duration: .45,

            ease:
                "power2.out"

        }

    );

}


/* =========================================================
   11 — HOLD
========================================================= */

birthdayIntro.to(
    {},
    {
        duration: .8
    }
);


/* =========================================================
   12 — 19 LEAVES
========================================================= */

if (age19) {

    birthdayIntro.to(

        age19,

        {

            opacity: 0,

            scale: 1.2,

            filter:
                "blur(12px)",

            duration: .9,

            ease:
                "power3.in",

            onComplete: () => {

                gsap.set(
                    age19,
                    {

                        display: "none",

                        visibility:
                            "hidden",

                        opacity: 0

                    }
                );

            }

        }

    );

}


/* =========================================================
   13 — BALLOON STAGE
========================================================= */

if (balloonStage) {

    birthdayIntro.to(

        balloonStage,

        {

            opacity: 1,

            duration: .3

        }

    );

}


/* =========================================================
   14 — BALLOONS RISE
========================================================= */

if (balloons.length) {

    birthdayIntro.to(

        balloons,

        {

            bottom: "58%",

            opacity: 1,

            scale: 1,

            duration: 1.7,

            stagger: {

                each: .13,

                from: "start"

            },

            ease:
                "back.out(1.5)"

        }

    );

}


/* =========================================================
   15 — FLOAT
========================================================= */

if (balloons.length) {

    birthdayIntro.call(

        () => {

            balloons.forEach(
                balloon => {

                    balloon.classList.add(
                        "floating"
                    );

                }
            );

        }

    );

}


/* =========================================================
   16 — HOLD
========================================================= */

birthdayIntro.to(
    {},
    {
        duration: .8
    }
);


/* =========================================================
   17 — AMIT THANDAR
========================================================= */

if (introFinal) {

    birthdayIntro.to(

        introFinal,

        {

            opacity: 1,

            y: 0,

            pointerEvents:
                "auto",

            duration: 1.2,

            ease:
                "power3.out"

        }

    );

}


/* =========================================================
   START INTRO
========================================================= */

birthdayIntro.play();


/* =========================================================
   ENTER WEBSITE
========================================================= */

if (startBtn) {

    startBtn.addEventListener(
        "click",
        () => {

            if (intro) {

                intro.classList.add(
                    "hidden"
                );

            }

            startMusic();

        }
    );

}


/* =========================================================
   HERO ANIMATION
========================================================= */

gsap.from(
    ".hero .eyebrow",
    {

        y: 30,

        opacity: 0,

        duration: 1,

        delay: .3,

        ease:
            "power3.out"

    }
);


gsap.from(
    ".hero h1",
    {

        y: 100,

        opacity: 0,

        duration: 1.2,

        delay: .5,

        ease:
            "power4.out"

    }
);


gsap.from(
    ".hero h2",
    {

        y: 40,

        opacity: 0,

        duration: 1,

        delay: .8

    }
);


gsap.from(
    ".hero-text",
    {

        y: 30,

        opacity: 0,

        duration: 1,

        delay: 1

    }
);


gsap.from(
    ".scroll-hint",
    {

        y: 20,

        opacity: 0,

        duration: .8,

        delay: 1.2

    }
);


/* =========================================================
   SPIRAL — 25 PHOTOS
========================================================= */

const spiralPhotos =
    gsap.utils.toArray(
        ".spiral-photo"
    );

const totalPhotos =
    spiralPhotos.length;


/* =========================================================
   SPIRAL INITIAL SETUP
========================================================= */

if (spiralPhotos.length > 0) {

    spiralPhotos.forEach(
        (photo, index) => {

            const angle =
                (
                    index /
                    totalPhotos
                ) *
                Math.PI *
                2;


            const radius =
                80 +
                index * 8;


            /*
             * GSAP controls ONLY
             * the outer photo card.
             */

            gsap.set(
                photo,
                {

                    x:
                        Math.cos(angle) *
                        radius,

                    y:
                        Math.sin(angle) *
                        radius,

                    z:
                        -index * 35,

                    rotation:
                        angle *
                        180 /
                        Math.PI,

                    scale:
                        .45 +
                        (
                            index /
                            totalPhotos
                        ) *
                        .35,

                    /*
                     * ALL PHOTOS
                     * SAME OPACITY
                     */

                    opacity: 1

                }
            );

        }
    );


    /* =====================================================
       SPIRAL SCROLL
    ===================================================== */

    const spiralTimeline =
        gsap.timeline({

            scrollTrigger: {

                trigger:
                    ".spiral-section",

                start:
                    "top top",

                end:
                    "bottom bottom",

                scrub: 1.5,

                pin:
                    ".spiral-sticky",

                anticipatePin: 1,

                invalidateOnRefresh:
                    true,

                onUpdate:
                    self => {

                        const progress =
                            self.progress;


                        const number =
                            Math.min(

                                totalPhotos,

                                Math.max(

                                    1,

                                    Math.floor(
                                        progress *
                                        totalPhotos
                                    ) + 1

                                )

                            );


                        const counter =
                            document.getElementById(
                                "photoNumber"
                            );


                        if (counter) {

                            counter.textContent =
                                String(
                                    number
                                ).padStart(
                                    2,
                                    "0"
                                );

                        }

                    }

            }

        });


    /* =====================================================
       PHASE 1
    ===================================================== */

    spiralTimeline.to(

        spiralPhotos,

        {

            rotation:
                "+=180",

            opacity: 1,

            duration: 1,

            stagger: {

                each: .015,

                from: "center"

            },

            ease:
                "none"

        }

    );


    /* =====================================================
       PHASE 2
    ===================================================== */

    spiralTimeline.to(

        spiralPhotos,

        {

            x: index => {

                const angle =
                    (
                        index /
                        totalPhotos
                    ) *
                    Math.PI *
                    2;


                const radius =
                    140 +
                    index * 15;


                return (
                    Math.cos(angle) *
                    radius
                );

            },


            y: index => {

                const angle =
                    (
                        index /
                        totalPhotos
                    ) *
                    Math.PI *
                    2;


                const radius =
                    140 +
                    index * 15;


                return (
                    Math.sin(angle) *
                    radius
                );

            },


            z:
                index =>
                    -index * 45,


            scale:
                index =>
                    .35 +
                    (
                        index /
                        totalPhotos
                    ) *
                    .55,


            /*
             * NEVER FADE PHOTOS
             */

            opacity: 1,


            duration: 1,

            stagger: {

                each: .01,

                from: "center"

            },

            ease:
                "power2.inOut"

        }

    );


    /* =====================================================
       PHASE 3
    ===================================================== */

    spiralTimeline.to(

        spiralPhotos,

        {

            rotation:
                index =>
                    360 +
                    index * 18,

            opacity: 1,

            duration: 1,

            stagger: {

                each: .012,

                from: "edges"

            },

            ease:
                "power2.inOut"

        }

    );


    /* =====================================================
       PHASE 4
    ===================================================== */

    spiralTimeline.to(

        spiralPhotos,

        {

            x: index => {

                const angle =
                    (
                        index /
                        totalPhotos
                    ) *
                    Math.PI *
                    2;


                return (
                    Math.cos(angle) *
                    35
                );

            },


            y: index => {

                const angle =
                    (
                        index /
                        totalPhotos
                    ) *
                    Math.PI *
                    2;


                return (
                    Math.sin(angle) *
                    35
                );

            },


            z:
                index =>
                    250 -
                    index * 18,


            scale:
                index =>
                    1.05 -
                    (
                        index /
                        totalPhotos
                    ) *
                    .45,


            rotation:
                index =>
                    720 +
                    index * 20,


            opacity: 1,


            duration: 1,

            stagger: {

                each: .008,

                from: "center"

            },

            ease:
                "power3.inOut"

        }

    );


    /* =====================================================
       PHASE 5
    ===================================================== */

    spiralTimeline.to(

        spiralPhotos,

        {

            x: index => {

                const angle =
                    (
                        index /
                        totalPhotos
                    ) *
                    Math.PI *
                    2;


                return (
                    Math.cos(angle) *
                    (
                        350 +
                        index * 12
                    )
                );

            },


            y: index => {

                const angle =
                    (
                        index /
                        totalPhotos
                    ) *
                    Math.PI *
                    2;


                return (
                    Math.sin(angle) *
                    (
                        280 +
                        index * 10
                    )
                );

            },


            z:
                index =>
                    -index * 25,


            scale: .55,


            opacity: 1,


            rotation:
                index =>
                    900 +
                    index * 25,


            duration: 1,

            stagger: {

                each: .008,

                from: "center"

            },

            ease:
                "power3.out"

        }

    );

}


/* =========================================================
   MADE CARDS
========================================================= */

gsap.from(
    ".made-card",
    {

        y: 100,

        opacity: 0,

        stagger: .15,

        duration: 1,

        ease:
            "power3.out",

        scrollTrigger: {

            trigger:
                ".made-section",

            start:
                "top 70%",

            toggleActions:
                "play reverse play reverse"

        }

    }
);


/* =========================================================
   MESSAGE
========================================================= */

const messageTimeline =
    gsap.timeline({

        scrollTrigger: {

            trigger:
                ".message-section",

            start:
                "top 70%",

            end:
                "bottom 30%",

            scrub: 1

        }

    });


messageTimeline

    .from(
        ".message-inner .eyebrow",
        {

            y: 30,

            opacity: 0

        }
    )

    .from(
        ".message-inner h2",
        {

            y: 80,

            opacity: 0,

            scale: .9

        }
    )

    .from(
        ".message-body p",
        {

            y: 40,

            opacity: 0,

            stagger: .2

        }
    )

    .from(
        ".signature",
        {

            opacity: 0,

            y: 30

        }
    );


/* =========================================================
   SWIPE GALLERY
========================================================= */

const deck =
    document.getElementById(
        "photoDeck"
    );

const swipeCards =
    Array.from(
        document.querySelectorAll(
            ".swipe-card"
        )
    );

const currentSwipe =
    document.getElementById(
        "currentSwipe"
    );


let activeCard = 0;

let startX = 0;

let currentX = 0;

let dragging = false;

let swipeLocked = false;


/* =========================================================
   UPDATE DECK
========================================================= */

function updateDeck() {

    if (!swipeCards.length) {
        return;
    }


    swipeCards.forEach(
        (card, index) => {

            const position =
                (
                    index -
                    activeCard +
                    swipeCards.length
                )
                %
                swipeCards.length;


            if (position === 0) {

                card.style.zIndex =
                    100;

                card.style.opacity =
                    "1";

                card.style.pointerEvents =
                    "auto";

                card.style.transform =
                    "translate(0,0) rotate(0deg) scale(1)";

            }


            else if (
                position <= 5
            ) {

                const rotations = [
                    5,
                    -4,
                    7,
                    -6,
                    3
                ];


                const xOffsets = [
                    8,
                    -7,
                    10,
                    -9,
                    5
                ];


                const yOffsets = [
                    -3,
                    6,
                    2,
                    -4,
                    5
                ];


                card.style.zIndex =
                    100 - position;

                card.style.opacity =
                    "1";

                card.style.pointerEvents =
                    "none";


                card.style.transform = `

                    translate(
                        ${xOffsets[position - 1]}px,
                        ${yOffsets[position - 1]}px
                    )

                    rotate(
                        ${rotations[position - 1]}deg
                    )

                    scale(
                        ${1 -
                        position * .025}
                    )

                `;

            }


            else {

                card.style.zIndex =
                    0;

                card.style.opacity =
                    "0";

                card.style.pointerEvents =
                    "none";

                card.style.transform =
                    "translateY(30px) scale(.85)";

            }

        }
    );


    if (currentSwipe) {

        currentSwipe.textContent =
            String(
                activeCard + 1
            ).padStart(
                2,
                "0"
            );

    }

}


updateDeck();


/* =========================================================
   POINTER DOWN
========================================================= */

if (deck) {

    deck.addEventListener(
        "pointerdown",
        event => {

            if (swipeLocked) {
                return;
            }


            const card =
                swipeCards[activeCard];


            if (!card) {
                return;
            }


            dragging = true;

            startX =
                event.clientX;

            currentX = 0;

            card.style.transition =
                "none";

        }
    );


    /* =====================================================
       POINTER MOVE
    ===================================================== */

    deck.addEventListener(
        "pointermove",
        event => {

            if (!dragging) {
                return;
            }


            const card =
                swipeCards[activeCard];


            if (!card) {
                return;
            }


            currentX =
                event.clientX -
                startX;


            const rotation =
                currentX * .08;


            const vertical =
                Math.abs(currentX) * .04;


            card.style.transform = `

                translate(
                    ${currentX}px,
                    ${vertical}px
                )

                rotate(
                    ${rotation}deg
                )

            `;

        }
    );


    /* =====================================================
       POINTER UP
    ===================================================== */

    deck.addEventListener(
        "pointerup",
        finishSwipe
    );


    deck.addEventListener(
        "pointercancel",
        finishSwipe
    );

}


/* =========================================================
   FINISH SWIPE
========================================================= */

function finishSwipe() {

    if (!dragging) {
        return;
    }


    dragging = false;


    const card =
        swipeCards[activeCard];


    if (!card) {
        return;
    }


    const threshold =
        window.innerWidth < 600
            ? 70
            : 110;


    if (
        Math.abs(currentX) >
        threshold
    ) {

        removeCard(
            currentX > 0
                ? 1
                : -1
        );

    }


    else {

        card.style.transition =
            "transform .35s ease";

        card.style.transform =
            "translate(0,0) rotate(0deg)";

    }


    currentX = 0;

}


/* =========================================================
   REMOVE CARD
========================================================= */

function removeCard(
    direction
) {

    if (swipeLocked) {
        return;
    }


    const card =
        swipeCards[activeCard];


    if (!card) {
        return;
    }


    swipeLocked = true;


    const exitX =
        direction *
        window.innerWidth *
        .9;


    card.style.transition =
        "transform .55s ease, opacity .55s ease";


    card.style.transform = `

        translate(
            ${exitX}px,
            ${Math.abs(exitX) * .12}px
        )

        rotate(
            ${direction * 30}deg
        )

    `;


    card.style.opacity =
        "0";


    setTimeout(
        () => {

            activeCard++;


            if (
                activeCard >=
                swipeCards.length
            ) {

                activeCard = 0;

            }


            updateDeck();


            swipeCards.forEach(
                item => {

                    item.style.transition =
                        "";

                }
            );


            swipeLocked = false;

        },
        550
    );

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "ArrowRight"
        ) {

            removeCard(-1);

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            removeCard(1);

        }

    }
);


/* =========================================================
   FINAL SECTION
========================================================= */

gsap.from(
    ".final-content > *",
    {

        y: 70,

        opacity: 0,

        stagger: .15,

        scrollTrigger: {

            trigger:
                ".final-section",

            start:
                "top 70%",

            toggleActions:
                "play reverse play reverse"

        }

    }
);


/* =========================================================
   AGAIN BUTTON
========================================================= */

const againBtn =
    document.getElementById(
        "againBtn"
    );


if (againBtn) {

    againBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );

}


/* =========================================================
   SPIRAL PHOTO PREVIEW
========================================================= */

spiralPhotos.forEach(
    photo => {

        photo.addEventListener(
            "click",
            () => {

                const image =
                    photo.querySelector(
                        "img"
                    );


                if (!image) {
                    return;
                }


                const overlay =
                    document.createElement(
                        "div"
                    );


                overlay.className =
                    "photo-preview";


                overlay.innerHTML = `

                    <img
                        src="${image.src}"
                        alt="Memory"
                    >

                    <button>
                        ×
                    </button>

                `;


                document.body.appendChild(
                    overlay
                );


                requestAnimationFrame(
                    () => {

                        overlay.classList.add(
                            "active"
                        );

                    }
                );


                const close =
                    () => {

                        overlay.classList.remove(
                            "active"
                        );


                        setTimeout(
                            () => {

                                overlay.remove();

                            },
                            300
                        );

                    };


                overlay
                    .querySelector("button")
                    .addEventListener(
                        "click",
                        close
                    );


                overlay.addEventListener(
                    "click",
                    event => {

                        if (
                            event.target ===
                            overlay
                        ) {

                            close();

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   REFRESH
========================================================= */

window.addEventListener(
    "load",
    () => {

        ScrollTrigger.refresh();

    }
);


window.addEventListener(
    "resize",
    () => {

        ScrollTrigger.refresh();

    }
);