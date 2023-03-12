$(document).ready(function(){
    // var count = $('[data-collection-count]').data('collection-count');   
    $('.product-image-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
       
        prevArrow: `<button class="slide-arrow prev-arrow">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="6" transform="matrix(-1 0 0 1 44 0)" fill="#045D96"/>
        <path d="M26 33L16 22L26 11" stroke="white" stroke-width="2.5"/>
        </svg>      
        </button>`,
        
        nextArrow: `<button class="slide-arrow next-arrow">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="6" fill="#045D96"/>
        <path d="M18 33L28 22L18 11" stroke="white" stroke-width="2.5"/>
        </svg>
 
        </button>`,
        
        
    });
    
  });