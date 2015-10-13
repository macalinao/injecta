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
  $('#libraryList').html(libraries.map(function(lib) {
    return '<li>' + lib.name + '</li>';
  }).join(''));
});
