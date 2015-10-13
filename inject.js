if (typeof document.injectaLoaded === 'undefined') {
  document.injectaLoaded = [];
  console.log('Injecta: Injecting scripts...');

  function addScript(src) {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    document.body.appendChild(s);
  }

  document.addEventListener('injecta_injected', function(e) {
    e.detail.libraries.map(function(lib) {
      if (!!~document.injectaLoaded.indexOf(lib.name)) {
        console.warn('Warning: Library `' + lib.name + '` was not loaded again.');
        return;
      }
      console.log('Injected ' + lib.name);
      document.injectaLoaded.push(lib.name);
      addScript(lib.url);
    });
  });

}
