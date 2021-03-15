

$(document).ready(function () {


  var typed = new Typed("#title2",{
    strings: [,"<mark>Computer Engineer.</mark>", "<mark>Student.</mark>", "<mark>Game Developer.</mark>", "<mark>Android Developer.</mark>"],
    smartBackspace:true,
    typeSpeed: 50,
    loop:true,
    showCursor:false,

  })


  let progress = document.getElementById('progressbar');
  let totHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totHeight) * 100;
    progress.style.height = progressHeight + "%";
  }

  $('.owl-carousel').owlCarousel({
      loop:false,
      item:4,
      responsive:{
          0:{
              items:1
          },
          480:{
              items:2
          },
          768:{
              items:3
          },
          938:{
              items:4
          },

      }
  })


      var skillsTopOffset = $(".skill").offset().top;
      $(window).scroll(function(){
        if (window.pageYOffset > skillsTopOffset - $(window).height() * 1000) {
          $('.chart').easyPieChart({
                  easing:"easeInOut",
                  barColor: "#F5d300",
                  trackColor:false,
                  scaleColor:false,
                  lineWidth: 4,
                  size:152,
                  onStep: function (from, to, percent) {
                    $(this.el).find(".percent").text(Math.round(percent));
                  }


              });
        }
      });





});
