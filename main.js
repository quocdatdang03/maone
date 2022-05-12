// Chờ load hết phần html mới thực hiện JS 
window.addEventListener('DOMContentLoaded', function() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // Xử lý headerSticky 
    const headerNavBar = $('.header__nav-bar');
    const headerTopBar = $('.header__top-bar');
    window.addEventListener('scroll', scrollHeader);
    function scrollHeader() {
        // if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //     headerNavBar.classList.add('scroll');
        //     headerTopBar.classList.add('hide');
        // }
        // else {
        //     headerNavBar.classList.remove('scroll');
        //     headerTopBar.classList.remove('hide');
        // }

        
        // Cách 2 :
        var x = window.pageYOffset;
        if(x > 20) {
            headerTopBar.classList.add('notfixed');
            headerNavBar.classList.add('scroll');
        }
        else {
            headerTopBar.classList.remove('notfixed');
            headerNavBar.classList.remove('scroll');
        }
    }

    // Xử lý khi click vào các item trong nav bar 
    const navItems = $$('.header__nav-item');
    const showBorder = $('.showBorder');
    const border = $('.header__nav-list .border');
    console.log(border);

    // // Lấy ra thằng đang có border :
    // const navBorderActive = $('.header__nav-item.showBorder');
    // console.log([navBorderActive]);
    // border.style.left = navBorderActive.offsetLeft + 'px';
    // border.style.width = navBorderActive.offsetWidth + 'px';

    navItems.forEach(function(navItem) {
        navItem.onclick = function() {
            // Có thằng nào có class showBorder thì xóa đi
            $('.header__nav-item.showBorder').classList.remove('showBorder');
        this.classList.add('showBorder');

            // border.style.left = this.offsetLeft + 'px';
            // border.style.width = this.offsetWidth + 'px';    
        }
    })


    // Xử lý khi click vào nút search 
    const btnSearch = $('.nav-search__icon');
    const boxSearch = $('.header__nav-search');
    const inputSearch = $('.box-search-input');
    btnSearch.onclick = function() {
        boxSearch.classList.toggle('active');
        inputSearch.focus();
        inputSearch.onkeydown = function(e) {
            if(e.code == 'Enter') {
                boxSearch.classList.remove('active');
                inputSearch.value = '';
            }
        }
    }


    // Xử lý khi click vào button bar 
    const btnBar = $('#menu__open');
    console.log(btnBar);
    const navSearch = $('.header__nav-search');
    const btnClose = $('.header__bar-close');
    const overlay = $('.overlay');
    console.log(btnClose);
    btnBar.onclick = function() {
        navSearch.classList.add('open');
        
    }

    overlay.onclick = function() {
        navSearch.classList.remove('open');
    }

    btnClose.onclick = function() {
        navSearch.classList.remove('open');
    }




    // Xử lý khi click vào từng item trong bar 
    const itemBars = $$('.header__bar-item');
    itemBars.forEach(function(itemBar) {
        itemBar.onclick = function() {
            $('.header__bar-item.active').classList.remove('active');
            this.classList.add('active');
        }
    })


    // Xử lý khi click vào các item trong transport 
    const transportItems = $$('.transport__item');
    transportItems.forEach(function(item) {
        item.onclick = function() {
            $('.transport__item.active').classList.remove('active');
            this.classList.add('active');
        }
    })



    // Xử lý form
    const form = $('form');
    form.onsubmit = function(e) {
        e.preventDefault();
    }



    // Xử lý scroll Top :

    // Xử lý quay lại đầu trang
    var scrollOnTop = function() {
        var header = $('.header');
        header.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
    // Xử lý khi ấn nút arrow up thì quay lại đầu trang
    const btnScrollTop = $('.scroll__top');
    btnScrollTop.onclick = function() {
        scrollOnTop();
    }

    // Xử lý ẩn hiện nút arrow up
    window.addEventListener('scroll', scrollBtnDisplay);
    function scrollBtnDisplay() {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            btnScrollTop.style.display = 'flex';
        }
        else {
            btnScrollTop.style.display = 'none';
        }
    }


    // Xử lý khi scroll thì làm hiệu ứng cho các mục trong trang web 
    const place = document.querySelector('.place');
    // Lấy ra vị trí của place 
    var vitriPlace = place.offsetTop - 400;
    const placeBodyItem = document.querySelectorAll('.place__body-item');
    var trangthaiPlaceItem  = 'duoivitri';


    const package = document.querySelector('.package');
    // Lẩy ra vị trí của package
    var vitriPackage = package.offsetTop-450;
    const packageBox = document.querySelector('.package__box');
    var trangthaiPackage = 'duoivitri';

    const offer = document.querySelector('.offer');
    // Lấy ra vị trí của offer 
    var vitriOffer = offer.offsetTop - 450;
    const offerItems = document.querySelectorAll('.offer__item');

    const opinion = document.querySelector('.opinion');
    // Lấy ra vị trí của opinion trừ đi 
    var vitriOpinion = opinion.offsetTop - 450;
    const opinionBackgrounds = document.querySelectorAll('.opinion__background');
    console.log(opinionBackgrounds);

    window.addEventListener('scroll', function() {
        // Xử lý khi scroll thì mục place trượt từ trái sang cho mục place
        for(var i = 0; i < placeBodyItem.length; i++) {
            if(window.pageYOffset > vitriPlace) {
                // if(trangthaiPlaceItem == 'duoivitri') {
                    // trangthaiPlaceItem  = 'trenvitri';
                    placeBodyItem[i].classList.add('hieuungtruotsang');
                // }
            }
        }

        // Xử lý khi scroll thì mục offer trượt từ dưới lên cho mục offer
        for(var i = 0; i < offerItems.length; i++) {
            if(window.pageYOffset > vitriOffer) {
                offerItems[i].classList.add('truottrenxuong');
            }
        }

        // Xử lý khi scroll trượt lên xuông lên cho mục opinion 
        for(var i = 0; i < opinionBackgrounds.length ; i++) {
            if(window.pageYOffset > vitriOpinion) {
                // Xử lý làm tk thứ 2 trượt từ dưới lên
                opinionBackgrounds[1].classList.add('truotduoilen');
                // Xử lý làm tk thứ nhất vs tk thứ 3 trượt từ trên xuống 
                opinionBackgrounds[0].classList.add('truottrenxuong');
                opinionBackgrounds[2].classList.add('truottrenxuong');
            }
        }

        // Đoạn này đang làm2 chiều
        // Xử lý khi scroll thì scale cho mục packageBox 
        if(window.pageYOffset > vitriPackage) {
            if(trangthaiPackage == 'duoivitri') {
                trangthaiPackage = 'trenvitri';
                packageBox.classList.add('scale');
            }
        }
        else if(window.pageYOffset < vitriPackage) {
            if(trangthaiPackage == 'trenvitri') {
                trangthaiPackage = 'duoivitri';
                packageBox.classList.remove('scale');
            }
        }
    })
})

