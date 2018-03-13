var controller = new Leap.Controller({enableGestures: true});

controller.on('gesture', function (gesture) {
  switch (gesture.type){
    case "circle":
        console.log("Circle Gesture");
        break;
    case "keyTap":
        console.log("Key Tap Gesture");
        break;
    case "screenTap":
        console.log("Screen Tap Gesture");
        break;
    case "swipe":
        console.log("Swipe Gesture");
        break;
  }
});


var controller = Leap.loop({enableGestures: true}, function(frame){
  //... handle frame data
});

controller.on("gesture", function(gesture){
  switch (gesture.type){
    case "circle":
        console.log("Circle Gesture");
        break;
    case "keyTap":
        console.log("Key Tap Gesture");
        break;
    case "screenTap":
        console.log("Screen Tap Gesture");
        break;
    case "swipe":
        console.log("Swipe Gesture");
        break;
  }
});


controller.connect();








var setupLeap = function(){

 var controller = Leap.loop({background: true, enableGestures: true}, function(frame){
      if(frame.hands.length > 0)
      {
          var hand = frame.hands[0];
          // var position = hand.palmPosition;
          // var velocity = hand.palmVelocity;
          // var direction = hand.direction;

          //hand.palmPosition[0]
          //hand.palmPosition[1]
          //hand.palmPosition[2]

          // when make a fist, it will reload the page
          if (hand.grabStrength>0.9){
          	closeCount++;
          	if (closeCount> 100){
          		console.log("fist");
          	}
          } else {
          	closeCount = 0;
          }

var extendedFingers = 0;
    for(var f = 0; f < hand.fingers.length; f++){
        var finger = hand.fingers[f];
        if(finger.extended) extendedFingers++;
}
console.log("Extended fingers: " + extendedFingers);

          if (extendedFingers == 2){
          	console.log("2 finger");					
					} else if (extendedFingers == 3){
						console.log("3 finger");
					} else if (extendedFingers == 4){
          	console.log("4 finger");
          } else {
          	
          }

          
      }  	
  })
    // .use('transform', {
    //   vr: 'desktop' // Switch to meters.
    // })
    // .use('boneHand', {
    //   targetEl: document.body,
    //   jointColor: new THREE.Color(0xffffff),
    //   rendererOps: {antialias: true}
    // })
    .use('proximity');

    controller.on("gesture", function(gesture){
  switch (gesture.type){
    case "circle":
        console.log("Circle Gesture");
        break;
    case "keyTap":
        console.log("Key Tap Gesture");
        break;
    case "screenTap":
        console.log("Screen Tap Gesture");
        break;
    case "swipe":
        console.log("Swipe Gesture");
        break;
  }
});



// 	var controller = new Leap.Controller();

// controller.on('connect', function(){
//    setInterval(function(){
//       var frame = controller.frame();

//       if(frame.hands.length > 0)
//       {
//           var hand = frame.hands[0];
//           // var position = hand.palmPosition;
//           // var velocity = hand.palmVelocity;
//           // var direction = hand.direction;

//           //hand.palmPosition[0]
//           //hand.palmPosition[1]
//           //hand.palmPosition[2]

// 					_movePrev.copy( _moveCurr );
// 					_moveCurr.copy( getMouseOnCircle( hand.palmPosition[0], hand.palmPosition[2]/10 ) );
          
//       }
//    }, 200);
// });
// controller.connect();

  // var controller = Leap.loop(function(frame){
  //     if(frame.hands.length > 0)
  //     {
  //         var hand = frame.hands[0];
  //         // var position = hand.palmPosition;
  //         // var velocity = hand.palmVelocity;
  //         // var direction = hand.direction;

  //         //hand.palmPosition[0]
  //         //hand.palmPosition[1]
  //         //hand.palmPosition[2]

		// 			_movePrev.copy( _moveCurr );
		// 			_moveCurr.copy( getMouseOnCircle( hand.palmPosition[0], hand.palmPosition[1] ) );
          
  //     }  	
  // }); 

// controller.connect();
};
