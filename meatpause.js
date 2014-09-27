( function() {

  document.addEventListener( 'click', function( event ) {

    var target = event.target || null;
    if ( !target || target.nodeName !== 'VIDEO' ) return;

    if ( target.paused ) {
      target.play();
    } else {
      target.pause();
    }

  });

})();
