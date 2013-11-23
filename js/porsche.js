---
---

{% include js/jquery.nivo.slider.pack.js %}
$(window).load(function() {
    $('#slider').nivoSlider();
});


{% include js/modernizr.custom.04457.js %}
$(window).load(function() {
    $('#modernizr').modernizer ();
});


{% include js/masonry.pkgd.min.js %}
var container = document.querySelector('#container');
var msnry = new Masonry( container, {
  // options
  columnWidth: 200,
  itemSelector: '.unit'
});
