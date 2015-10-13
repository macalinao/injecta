console.log('Injected scripts');

function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  document.body.appendChild(s);
}

addScript('https://cdnjs.cloudflare.com/ajax/libs/ramda/0.18.0/ramda.js');
