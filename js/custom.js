$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        // nav: true,
      },
      600: {
        items: 1,
        // nav: true,
      },
      1000: {
        items: 1,
        // nav: true,
        loop: false,
      },
    },
  });
  $(".owlCarousel").each(function (index) {
    $(this)
      .find(".owl-nav, .owl-dots")
      .wrapAll("<div class='owl-controls'></div>");
  });


  $(".approach-owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    // dots: true,
    responsive: {
      0: {
        items: 1,
        // nav: true,
      },
      600: {
        items: 1,
        // nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        // loop: false,
      },
    },
  });







  $(window).scroll(function () {
    var $mainsec = $("main");
    if ($(window).scrollTop() >= $mainsec.scrollTop() + 50) {
      $(".logo img").attr("src", "../styles/images/logo-light.png");

      $("nav").addClass("sticky");
    } else {
      $(".logo img").attr("src", "../styles/images/logo-white.png");
      $("nav").removeClass("sticky");
    }
  });

  $(".hidden-icon").click(function () {
      $(".navContainer nav ").toggleClass("active");
  });

  $(".design").click(function () {
    $(".service .galleryContent ul .fistGalleryImg").css({
      background:
        "url('../styles/images/corporate-07.jpg') no-repeat scroll -443px 0 ",
    });
    $(".service .galleryContent ul li .content-icon").replaceWith(
      "<i class='fas fa-tools content-icon'></i>"
    );
    $(".service .galleryContent ul li h3").text(
      "WE SPECIALISE IN CREATING SUCCESS BRANDS."
    );
    $(this).addClass("active").siblings().removeClass("active");
    $(".service .galleryContent .galleyContentImg .iformation span").text("02");
    $(".service .galleryContent .galleyContentImg .iformation p").text(
      "DESIGN"
    );
  });
  $(".dev").click(function () {
    $(".service .galleryContent ul .fistGalleryImg").css({
      background:
        "url('../styles/images/corporate-08.jpg') no-repeat scroll -443px 0 ",
    });
    $(".service .galleryContent ul li .content-icon").replaceWith(
      "<i class='fas fa-mobile-alt content-icon'></i>"
    );
    $(".service .galleryContent ul li h3").text(
      "INTELLIGENCE IS NOTHING WITHOUT AMBITION."
    );
    $(this).addClass("active").siblings().removeClass("active");
    $(".service .galleryContent .galleyContentImg .iformation span").text("03");
    $(".service .galleryContent .galleyContentImg .iformation p").text(
      "DEVELOPMENT"
    );
  });
  $(".camera").click(function () {
    $(".service .galleryContent ul .fistGalleryImg").css({
      background:
        "url('../styles/images/corporate-07.jpg') no-repeat scroll -443px 0 ",
    });
    $(".service .galleryContent ul li .content-icon").replaceWith(
      "<i class='fas fas fa-camera-retro content-icon'></i>"
    );
    $(".service .galleryContent ul li h3").text(
      "WE SPECIALISE IN CREATING SUCCES BRANDS."
    );
    $(this).addClass("active").siblings().removeClass("active");
    $(".service .galleryContent .galleyContentImg .iformation span").text("04");
    $(".service .galleryContent .galleyContentImg .iformation p").text(
      "PHOTOGRAPHY"
    );
  });
  $(".branding").click(function () {
    $(".service .galleryContent ul .fistGalleryImg").css({
      background:
        "url('../styles/images/corporate-06.jpg') no-repeat scroll -443px 0 ",
    });
    $(".service .galleryContent ul li .content-icon").replaceWith(
      "<i class='fas fas fa-image content-icon'></i>"
    );
    $(".service .galleryContent ul li h3").text(
      "INTELLIGENCE IS  NOTHING WITHOUT AMBITION."
    );
    $(this).addClass("active").siblings().removeClass("active");
    $(".service .galleryContent .galleyContentImg .iformation span").text("01");
    $(".service .galleryContent .galleyContentImg .iformation p").text(
      "BRANDING"
    );
  });
  //fas fa-tools


  $(".search").click(function () {
    $(".searchPage").css({ display: "block" }).addClass("active");
    $("html").css({overflowY:"hidden"})
  });
  $(".close").click(function () {
    $(".searchPage").css({ display: "none" }).removeClass("active");
    $("html").css({overflowY:"scroll"})
  });

  // scroll button
  $(window).scroll(function(){
    var sc = $(window).scrollTop();
    if(sc >= 700){
      $(".scrollButton").fadeIn(1000)
    }else{
      $(".scrollButton").fadeOut(1000)
    }
  })
  $(".scrollButton").click(function(){
    $("html,body").animate({scrollTop:0},1000,function(){
      $(".scrollButton").fadeOut(1000)
    })
  })
});

///// counting functions

(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals"),
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null, // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function ($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function (value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    },
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
});

// service functions

const buttons = document.querySelectorAll(".project");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay__inner img");

function open(e) {
  overlay.classList.add("open");
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove("open");
}

buttons.forEach((button) => button.addEventListener("click", open));
overlay.addEventListener("click", close);




