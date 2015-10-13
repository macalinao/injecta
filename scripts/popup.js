$(function() {
  var libraries = [
    {
      name: 'jQuery',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.js'
    },
    {
      name: 'Ramda',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.18.0/ramda.min.js'
    },
    {
      name: 'Lodash',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js'
    }
  ];

  libraries.map(function(lib) {
    var el = $('<li>'
      + '<input type="checkbox" id="' + lib.name + '" value="' + lib.url + '">'
      + '<label for="' + lib.name + '">' + lib.name + '</label>'
      + '</li>');

    return el;
  }).map(function(el) {
    $('#libraryList').append(el);
  });

});
