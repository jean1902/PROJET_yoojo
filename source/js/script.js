$('.section5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 1000,
  });
  let btn_prev =document.querySelector('.slick-prev').innerHTML=`<div class="arrow_section5 ">
  <img src="/source/image/left-arrow_left.png" alt="left_arrow" class="size-arrow_section5">
</div>
`
let btn_next =document.querySelector('.slick-next').innerHTML=`<div class="arrow_section5 ">
  <img src="/source/image/left-arrow_right.png" alt="left_arrow" class="size-arrow_section5" >
</div>
`