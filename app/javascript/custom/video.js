document.addEventListener("turbolinks:load", function () {

  // media query event handler
  if (matchMedia) {
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    const youtube = document.querySelectorAll(".youtube");
    
    if (mq.matches) {
      for (let i = 0; i < youtube.length; i++) {
        let source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/0.jpg";
        let image = new Image();

        image.src = source;
        image.addEventListener("load", function () {
          youtube[i].appendChild(image);
        }(i));

        let href = "https://youtube.com/watch?v=" + youtube[i].dataset.embed;
        youtube[i].addEventListener("click", function () {
          window.open(href, "_blank");
        });
      }
    }
    else {
      // lazy load for youtube video's
      for (var i = 0; i < youtube.length; i++) {
        let source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/0.jpg";
        let image = new Image();

        image.src = source;
        image.addEventListener("load", function () {
          youtube[i].appendChild(image);
        }(i));

        youtube[i].addEventListener("click", function () {
          let iframe = document.createElement("iframe");

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
  const vimeo = document.querySelectorAll(".vimeo");

  for (let i = 0; i < vimeo.length; i++) {
    let source = vimeo[i].dataset.src;
    vimeo[i].setAttribute("src", source);
  }

})