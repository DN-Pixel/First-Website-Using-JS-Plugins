const slideParameters = {
    type: 'carousel',
    perView: 2,
    focusAt: 'center',
    autoplay: 2500,
    hoverpause : true,
    gap:310,
    breakpoints:{
        1660:{
            perView:1
        }
    }
};
new Glide('.glide',slideParameters).mount()

