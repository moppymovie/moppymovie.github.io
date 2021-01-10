console.log('test');
let body = document.body;
let topmovie = document.getElementById('topmovie');

window.addEventListener('load', function () {
  if (!sessionStorage.getItem('disp_popup')) {
    sessionStorage.setItem('disp_popup', 'on');

    topmovie.classList.toggle('hidden');
    topmovie.classList.toggle('show');

    topmovie.onclick = function () {
      console.log('ya');
      topmovie.classList.toggle('show');
      topmovie.classList.toggle('hidden');
    }
  }
}, false);
