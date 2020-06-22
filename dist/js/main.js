function burger(selector){
    let menu = $(selector);
    let button = menu.find('.burger__menu');
    let item = menu.find('.menu');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    item.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger_active');
    }
}

burger('.burger')