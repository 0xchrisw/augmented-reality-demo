class Display {
  constructor(target) {
    // Hide the help elements.
    document.querySelectorAll(".help").forEach(
      (element, index) => {
        element.style.visibility = "hidden";
        element.style.display = "none";
      }
    );
    target.classList.toggle("hidden");
  }

  toggle_visibility(element) {
    if( element.style.display == "none" ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

}


const content    = document.getElementById('content'),
      viewer     = document.getElementById("model-viewer"),
      aframe     = document.getElementById("ar-viewer"),
      ctrl_model = document.getElementById("ctrl-model"),
      ar_model   = document.getElementById("ctrl-marker");


ctrl_model.addEventListener("click", function(e) {
  let View = new Display(viewer);
  View.toggle_visibility(webcam);
  aframe.classList.add("hidden");
});


ar_model.addEventListener("click", function(e) {
  window.location.href = "/ar";
});
