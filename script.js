console.log('script.js says "I\'m here"');



// // fade in <div> on scroll


// // add the "data-scroll" attribute to all the elements in the body
// 		// you may need to change where this points, or maybe even add the classes manually ;-)
// 		document.querySelectorAll("#page > *:not(.footer-box):not(.header-wrapper)").forEach(elem => {
// 			elem.setAttribute("data-scroll", "");
// 			elem.setAttribute("data-scroll-class", "onscreen");
// 		});


// // Spinning smile on scroll



// ;(function() {
//     var throttle = function(type, name, obj) {
//         var obj = obj || window;
//         var running = false;
//         var func = function() {
//             if (running) { return; }
//             running = true;
//             requestAnimationFrame(function() {
//                 obj.dispatchEvent(new CustomEvent(name));
//                 running = false;
//             });
//         };
//         obj.addEventListener(type, func);
//     };
//     throttle ("scroll", "optimizedScroll");
// })();

// var spinnersmile = document.getElementById("spinnersmile");

    
// // to use the script *without* anti-jank, set the event to "scroll" and remove the anonymous function.

// window.addEventListener("optimizedScroll", function() {
//     spinnersmile.style.transform = "rotate("+(window.pageYOffset/5)+"deg)";

// });

