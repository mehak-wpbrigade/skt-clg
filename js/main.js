let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

/*---2nd popup--*/
let popupp = document.getElementById("popupp");

function openPopupp() {
    popupp.classList.add("open-popupp");
}
function closePopupp() {
    popupp.classList.remove("open-popupp");
}


// /--tabsslider
$(".tabs-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: ".privv_arrow",
    nextArrow: ".nextt_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});


// /--tabsslider
$(".tabs-slider2").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: ".privv_arrow",
    nextArrow: ".nextt2_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});


// /--tabsslider
$(".tabs-slider3").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: ".privv_arrow",
    nextArrow: ".nextt3_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// /--tabsslider
$(".tabs-slider4").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: ".privv_arrow",
    nextArrow: ".nextt4_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// /--tabsslider
$(".tabs-slider5").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: ".privv_arrow",
    nextArrow: ".nextt5_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// /--tabsslider
$(".tabs-slider6").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: ".privv_arrow",
    nextArrow: ".nextt6_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});



/*--tab items slider--*/
$(".tabs-nav").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: ".privv_arrow",
    nextArrow: ".nexttab_arrow",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});
/*---sliderlast---*/
$(".slider-last-sec").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: ".priv_arrow",
    nextArrow: ".next_arrow",
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

// --accordian--
var accItem = document.getElementsByClassName("accordian");
var accHD = document.getElementsByClassName("accordian-head");
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = "accordian close";
    }
    if (itemClass == "accordian close") {
        this.parentNode.className = "accordian open";
    }
}


$('.toggle').click(function(e) {
    e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('.accordian-para ').removeClass('show');
      $this.parent().parent().find('.accordian-para').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});

// nav-toggle--
function openNav() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("toggler-icon-opener").style.display = "none";
    document.getElementById("toggler-icon-closer").style.display = "flex";
}

function closeNav() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("toggler-icon-closer").style.display = "none";
    document.getElementById("toggler-icon-opener").style.display = "flex";
}
/*--search-bar--*/
document.getElementById('search-icon').onclick = function toggleText() {
    var x = document.getElementById("search-bar-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

document.getElementById('search-iconn').onclick = function toggleTextt() {
    var y = document.getElementById("search-bar-navv");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}


// tabs 
// function openTab(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }

//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
//   }

  // Show the first tab and hide the rest
  
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// ---nav-accordian
$('.accordian-head-nav').click(function() {
    $('#navbar').toggle();
});


// /form and thanks popup
$('.open-popupf').click(function(){
    $('html').addClass('active');
    $('.popupf').addClass('active');
})

$('.close-popupf').click(function(){
    $('html').removeClass('active');
    $('.popupf').removeClass('active');
})

$('.open-popupt').click(function(){
    $('.popupt').addClass('active');
})

$('.close-popupt').click(function(){
    $('.popupf , .popupt').removeClass('active');
})