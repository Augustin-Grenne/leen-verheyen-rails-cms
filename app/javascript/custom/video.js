window.onload = function(){

  // media query event handler
  if (matchMedia) {
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      var youtube = document.querySelectorAll(".youtube");

      for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/0.jpg";

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
          youtube[i].appendChild(image);
        }(i));

        var href = "https://youtube.com/watch?v=" + youtube[i].dataset.embed;
        youtube[i].addEventListener("click", function () {
          window.open(href, "_blank");
        });
      }
    }
    else {
      // lazy load for youtube video's
      var youtube = document.querySelectorAll(".youtube");

      for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/0.jpg";

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
          youtube[i].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {

          var iframe = document.createElement("iframe");

          iframe.setAttribute("frameborder", "0");
          iframe.setAttribute("allowfullscreen", "");
          iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

          this.innerHTML = "";
          this.appendChild(iframe);
        });
      }
    }
  }


  // lazy load for vimeo video's
  var vimeo = document.querySelectorAll(".vimeo");

  for (var i = 0; i < vimeo.length; i++) {
    var source = vimeo[i].dataset.src;
    vimeo[i].setAttribute("src", source);
  }
}