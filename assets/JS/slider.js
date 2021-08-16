
const slider = {
    slides: [
        {
            heading: 'Nổi bật trong tuần',
            name: 'Joker T-Shirts',
            detail: 'Hơn 150 mẫu áo phông được thiết kế từ những nhà thiết kế tài năng của chúng tôi',
            btnContent: 'Tùy Chỉnh Áo Phông',
            slideImg: '/assets/img/tricou-joker.png'

        },
        {
            heading: 'Duyệt qua chữ áo phông',
            name: 'Clever Word',
            detail: 'Chúng tôi sẽ chọn những ý tưởng độc đáo nhất để thiết kế cho bạn',
            btnContent: 'Xem Cửa Hàng Ngay',
            slideImg: './assets/img/girl-king.png'

        },
        {
            heading: 'Tùy chỉnh sản phẩm của bạn',
            name: 'Print Demoand',
            detail: 'In thiết kế của bạn lên ốp lưng điện thoại,áo phông,balo hay bất kì sản phẩm nào khác',
            btnContent: 'Chọn 1 Sản Phẩm',
            slideImg: './assets/img/printivity.ro-huse-personalizate-nasa.png'
        },
        {
            heading: 'Tùy chỉnh ốp lưng điện thoại',
            name: 'Printany Design',
            detail: 'Tự tay thiết kế cho mình 1 chiếc ốp lưng điện thoại từ hơn 200 mẫu có sẵn',
            btnContent: 'Thiết Kế Ốp Lưng',
            slideImg: './assets/img/girl-case-0.png'
        },
        {
            heading: 'Valar Morghulis',
            name: 'Fanboy Design',
            detail: 'Dyệt qua các sản phẩm có trong kho của chúng tôi được các fanboy thiết kế',
            btnContent: 'Duyệt qua danh mục',
            slideImg: './assets/img/dracaris.png'
        }


    ],
    render: function () {
        var htmls = this.slides.map(function (item) {
            return ` 
             <div class="slide">
                 <img src="${item.slideImg}" alt="" class ="slide-img">
             </div>
             <ul class="description">
                 <li class="description-heading">
                    ${item.heading}
                 </li>
                 <li class="description-name">
                     ${item.name}
                 </li>
                 <li class="description-detail">
                     ${item.detail}

                 </li>
                  <li >
                     <button class="description-btn">
                        ${item.btnContent}
                   </button>
                  </li>
             <ul>
                `

        })
        return (htmls)

    }

}
var sliderElement = document.querySelector('.slider')
sliderElement.innerHTML = slider.render()[0]
var i = 1;
var changeSlide = sliderElement.onclick = function () {
    var htmls = slider.render();
    sliderElement.innerHTML = htmls[i]
    i++
    if (i > 4) {
        i = 0;
    }
}
setInterval(changeSlide, 5000)
var sliderElement = document.querySelector('.slider')
var changeBackground = sliderElement.onclick = function () {
    sliderElement.classList.toggle('slider-next')
};
setInterval(changeBackground, 5000)
//active icon heart
var iconHeart = Array.from(document.querySelectorAll('.product-image-icon'))
iconHeart.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('icon-active')
    }

})


// validate form
var inputElement = document.querySelector('#form-input')
var check = inputElement.onblur = function () {
    return inputElement.value
}


var btnElement = document.querySelector('#form-btn')
console.log(btnElement)
btnElement.onclick = function (e) {

    if (check() == '') {

        alert('Mời bạn nhập email')
        e.preventDefault();

    }



}
var slides = document.querySelector('.main__product-limited')
var listSlide = document.querySelector('.product-limited-list')
var leftBtn = document.querySelector('.left-btn')
var rightBtn = document.querySelector('.right-btn')
var size = 490
max = (document.querySelectorAll('.product-limited-img').length - 1) * size;
console.log(size)
var sizeStart = 0;


function handleClick(direction) {

    if (direction === 'left') {
        if (sizeStart === 0) {
            sizeStart = max + size;
        }

        sizeStart -= size
        listSlide.style.marginLeft = `-${sizeStart}px`
        console.log(sizeStart)

    }





    if (direction === 'right') {


        if (sizeStart === max) {
            sizeStart = 0;
            listSlide.style.marginLeft = `-${sizeStart}px`
        }
        sizeStart += size
        listSlide.style.marginLeft = `-${sizeStart}px`

    }
}




