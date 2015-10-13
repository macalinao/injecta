console.log('Injecta: Injecting scripts...');

function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  document.body.appendChild(s);
}

document.addEventListener('injecta_injected', function(e) {
  e.detail.libraries.map(function(lib) {
    console.log('Injected ' + lib.name);
    addScript(lib.url);
  });
  console.log('Scripts injected!');
});
