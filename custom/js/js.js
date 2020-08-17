$('.navbar-nav li a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 68
        }, 800);
    }
});
$(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    if (scrollbarLocation >= 10) {
        $('.ftco-navbar').addClass('active');
    } else {
        $('.ftco-navbar').removeClass('active');

    }

    $('.navbar-nav li a').each(function() {
        var sectionOffset = $(this.hash).offset().top - 350;
        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
    });
});
$('.ftco-navbar2 a').on('click', function(e) {
    if (this.hash !== '') {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 800);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    }
});
$('#loginbtn').on('click', function() {
    $('#login-form').css('left', '50%');
    $('#signUp-form').css('left', '46rem');
    $('#ftco-btn').css('left', '0');
    $('#loginbtn').addClass('active');
    $('#registarbtn').removeClass('active');
});
$('#registarbtn').on('click', function() {
    $('#login-form').css('left', '-40rem');
    $('#signUp-form').css('left', '50%');
    $('#ftco-btn').css('left', '117.6px');
    $('#registarbtn').addClass('active');
    $('#loginbtn').removeClass('active');
});
$(function() {
    $('#datepicker').datepicker({
        'format': 'dd/mm/yyyy',
        'autoclose': true
    });
});

$('#btnCart').on('click', function() {
    const button = $('#btnCart');
    const cart = $('#ftco-cart');
    button.parent().parent().after(cart);
    cart.toggleClass('active');
    cart.toggleClass('animationOut');
    // const cartBox = $('#cartItemBox');
    // if (cartBox.children().length > 0) {
    //     $('.ftco-cart-title').hide();
    // } else {
    //     $('.ftco-cart-title').show();
    // }
});
// (function() {
//     const cartBtn = document.querySelectorAll('.price-cart .cart');
//     cartBtn.forEach(function(btn) {
//         btn.addEventListener('click', function(e) {
//             // console.log(e.target.parentElement.parentElement);

//             if (e.target.parentElement.classList.contains('cart')) {
//                 let fullPath = e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.childNodes[1].src;
//                 let pos = fullPath.indexOf('assest/images') + 13;
//                 let partPath = fullPath.slice(pos);
//                 const item = {};
//                 item.img = `assest/images${partPath}`;
//                 let name = e.target.parentElement.parentElement.previousElementSibling.children[0].textContent;
//                 item.name = name;
//                 let price = e.target.parentElement.previousElementSibling.textContent;
//                 // item.price = price;
//                 price = price.slice(3).trim();
//                 item.price = price;
//                 const cartItem = document.createElement('div');
//                 cartItem.classList.add('ftco-cart-item');
//                 cartItem.innerHTML = `
//                 <img src="${item.img}" alt="" srcset="">
//                 <div class="text-item">
//                     <p class="item-title">${item.name}</p>
//                     <div>
//                         <samp>$</samp>
//                         <samp class="item-price">${item.price}</samp>
//                     </div>
//                 </div>
//                 <div class="item-count-box">
//                     <samp id="minus-item" class="item-icon"><i class="fas fa-minus"></i></samp>
//                     <samp class="item-count">1</samp>
//                     <samp id="plus-item" class="item-icon"><i class="fas fa-plus"></i></samp>
//                 </div>
//                 <button class="ftco-btn-trash"><i class="fas fa-trash"></i></button>
//             </div>`;
//                 const cart = document.getElementById('cartItemBox');
//                 // const totalPrice = document.querySelector('.ftco-cart-price .ftco-totle');
//                 cart.appendChild(cartItem);
//                 const cartBox = $('#cartItemBox');
//                 showTotals();
//                 if (cartBox.children().length > 0) {
//                     $('.ftco-cart-title').hide();
//                 } else {
//                     $('.ftco-cart-title').show();
//                 }

//             }
//             const addItembtn = document.querySelectorAll('.item-icon');
//             let itemCount = 1;
//             addItembtn.forEach(function(btn) {
//                 btn.addEventListener('click', function(e) {
//                     var itemCo = e.target.parentElement.parentElement.previousElementSibling.textContent;
//                     itemCo = parseInt(itemCo);
//                     itemCount++;
//                     console.log(itemCount);
//                     showTotals(itemCount);
//                 });
//             });
//             const removeBtn = document.querySelectorAll('.ftco-btn-trash');
//             removeBtn.forEach(function(btn) {
//                 btn.addEventListener('click', function(e) {
//                     const prentItem = e.target.parentElement.parentElement.parentElement;
//                     prentItem.remove();
//                     showTotals();
//                 });
//             });
//         });
//     });
//     // totla
//     function showTotals(itemCo = 1) {
//         const total = [];
//         const items = document.querySelectorAll('.item-price');
//         items.forEach(function(item) {
//             total.push(parseInt(item.textContent));
//         });
//         const totalMoney = total.reduce(function(total, item) {
//             total += (item * itemCo);
//             return total;
//         }, 0);
//         document.querySelector('.ftco-totle').textContent = totalMoney;
//         document.getElementById('cartItemCount').textContent = total.length;

//     }
//     document.querySelector('.ftco-clear').addEventListener('click', function() {
//         $('#cartItemBox').empty();
//         $('.ftco-cart-title').show();
//         document.querySelector('.ftco-totle').textContent = '0.00';
//         document.getElementById('cartItemCount').textContent = 0;
//     });

// })();