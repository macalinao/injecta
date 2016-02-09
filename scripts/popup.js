$(function() {
  var libraries = [
    {
      name: 'jQuery 3',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js'
    },
    {
      name: 'Ramda',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/ramda/0.19.0/ramda.min.js'
    },
    {
      name: 'Lodash',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js'
    },
    {
      name: 'Moment',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js'
    },
    {
      name: 'Zepto',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js'
    },
    {
      name: 'd3',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.14/d3.min.js'
    },
    {
      name: 'jQuery 1',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js'
    },
    {
      name: 'jQuery 2',
      url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js'
    },
  ];

  $('#libraryList').html(libraries.map(function(lib) {
    return '<li>'
      + '<input type="checkbox" id="' + lib.name + '" value="' + lib.url + '">'
      + '<label for="' + lib.name + '">' + lib.name + '</label>'
      + '</li>';
  }).join(''));

  $('#inject').click(function() {
    var selectedLibs = [];
    $('#libraryList li').each(function(el) {
      el = $(this);
      var checkbox = el.find('input').first();
      var name = checkbox.attr('id');
      var checked = checkbox.prop('checked');
      var url = checkbox.attr('value');
      if (checked) {
        selectedLibs.push({
          name: name,
          url: url
        });
      }
    });
    injectLibraries(selectedLibs);
  });

  function injectLibraries(selectedLibs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.extension.sendMessage({
        type: 'injectLibs',
        tab: tabs[0].id,
        selectedLibs: selectedLibs
      });
      window.close();
    });
  }

});
