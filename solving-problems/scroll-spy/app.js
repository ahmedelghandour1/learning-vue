// import "./node_modules/gumshoejs/dist/gumshoe.polyfills.js"
import  "./node_modules/gumshoejs/src/js/gumshoe/_closest.polyfill.js";
import  "./node_modules/gumshoejs/src/js/gumshoe/_customEvent.polyfill.js";
import  "./node_modules/gumshoejs/src/js/gumshoe/gumshoe.js";

Vue.config.productionTip = false;
let xxx;
new Vue({
  el: "#app",
  data: {
    items: [
      { name: "item 1", id: 1 },
      { name: "item 2", id: 2 },
      { name: "item 3", id: 3 },
      { name: "item 4", id: 4 },
      { name: "item 5", id: 5 },
      { name: "item 6", id: 6 },
      { name: "item 7", id: 7 },
    ],
  },
  mounted() {
    // Init Smooth Scroll
    smoothScroll.init({
      // This `offset` is the `height` of fixed header
      offset: 0,
    });

    const spy = new Gumshoe("#nav-header a", {
      offset: () => {
        return 150;
      },
      navClass: "active", // applied to the nav list item
      contentClass: "active", // applied to the content
      reflow: true, // if true, listen for reflows
      // Event support
      events: true, // if true, emit custom events
    });

    // Listen for activate events
document.addEventListener('gumshoeActivate', function (event) {

    console.log(event);

	// The list item
	var li = event.target;

	// The link
	var link = event.detail.link;

	// The content
	var content = event.detail.content;

}, false);

  },
});
