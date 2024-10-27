document.addEventListener("DOMContentLoaded", function() {
  function fadeOutAndRedirect() {
      let body = document.body;
      body.style.transition = "opacity 1s";
      body.style.opacity = 0;

      setTimeout(function() {
          window.location.href = "./login.html";
      }, 1000); //1秒で遷移しな！
  }

  setTimeout(function() {
      fadeOutAndRedirect();
  }, 3000); //3秒間待ってやる
});
