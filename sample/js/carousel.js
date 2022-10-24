function carousel($container){
    const $slider = $container.querySelector('.slider');
    const $$item = $container.querySelectorAll('.item');
    const visWid = $slider.offsetWidth;
    const totalWid = get_total_items_width($$item);
}//carousel

function get_total_items_width($$item){
    const {left} = $$item[0].getBoundingClientRect();
    const {right} = $$item[$$item.length - 1].getBoundingClientRect();
    return right - left;
}//get_total_items_width

/* ❤ 실행 */
const $container = document.querySelector('.container'); 
carousel($container);