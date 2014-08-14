
$( document ).ready( function() {

  window.TO_RAD = Math.PI / 180;
  window.TO_DEG = 1 / TO_RAD;

  var content = document.getElementById('content');

  function setText(text) {
     if( $('h3').text() != text ) {
       $('h3').text( text );
     };
  };

  Leap.loop({

    hand: function(hand){

      palmVerticalThreshold = 0.4;
      palmN = hand.palmNormal[0];

      if (palmN >= palmVerticalThreshold ) {
        setText('Jugando...');

      } else {

        var thumbFinger = hand.fingers[0];
            indexFinger = hand.fingers[1];
            middleFinger = hand.fingers[2]
            ringFinger = hand.fingers[3]
            littleFinger = hand.fingers[4];

        if( indexFinger.extended && middleFinger.extended && ringFinger.extended && littleFinger.extended ) {
          setText('Papel');
        } else if (indexFinger.extended && middleFinger.extended && !ringFinger.extended ) {
          setText('Tijera');
        } else {
          setText('Piedra');
        };

      };
    }

  });
});
