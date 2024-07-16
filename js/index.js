window.onload = function () {
    // 이벤트 스와이퍼
    const swevent = new Swiper (".sw-event",{
        navigation: {
            nextEl: ".event .sw-next",
            prevEl: ".event .sw-prev",
        },
            loop: true,
            slidesPerView: 1,
            grid: {
              rows: 1,
              fill: "row",
            },

        })
    }
