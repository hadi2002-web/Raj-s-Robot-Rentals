/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
document.addEventListener('DOMContentLoaded', function () {
  var modelName = "XYZ";
  var duration = 0;

  var modelText = document.getElementById("model-text");
  var durationText = document.getElementById("duration-text");
  var costLabel = document.getElementById("calculated-cost");
  var modelButton = document.getElementById("model-button");
  var durationButton = document.getElementById("duration-button");

  /****************** helper function ******************/
  function recalc() {
    var rate = (modelName === "XYZ") ? 100 : 213;
    costLabel.textContent = (rate * duration).toFixed(2);
  }

  /****************** model button logic ******************/
  function changeModel() {
    if (modelName === "XYZ") {
      modelName = "CPRG";
      modelText.textContent = "Model CPRG";
    } else {
      modelName = "XYZ";
      modelText.textContent = "Model XYZ";
    }
    recalc();
  }
  modelButton.addEventListener("click", changeModel);

  /****************** duration button logic ******************/
  function changeDuration() {
    var v = prompt("Enter days (0–365):", String(duration));
    if (v === null) { return; }
    var n = Number(v);
    if (!isFinite(n) || Math.floor(n) !== n || n < 0 || n > 365) {
      alert("Whole number 0–365");
      return;
    }
    duration = n;
    durationText.textContent = duration;
    recalc();
  }
  durationButton.addEventListener("click", changeDuration);

  // Initial calculation
  recalc();
});
