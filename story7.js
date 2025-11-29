var animationContainer = document.getElementById("animationContainer");
function addElement() {
  var element = document.createElement("img");
  element.src =
    "https://cdn.pixabay.com/photo/2017/10/23/10/14/idea-2880595_640.png";
  element.width = "450";
  element.height = "250";
  return element;
}

var count = 500;
var addArray = [];

for (var i = 0; i < count; i++) {
  var more = {
    top:
      Math.random() * animationContainer.getBoundingClientRect().height -
      Math.random() * 100,
    left:
      Math.random() * animationContainer.getBoundingClientRect().width -
      Math.random() * 100,
    rotate: Math.random() * 360 - 360,
    appearTime: 150 * i,
  };

  addArray.push(more);
}

var start = new Date().getTime();

requestAnimationFrame(drawPic);

function drawPic() {
  var currentTime = new Date().getTime() - start;

  for (var i = 0; i < count; i++) {
    var more = addArray[i];

    if (currentTime >= more.appearTime && more.appeared !== true) {
      var element = new addElement();
      element.style.top = more.top + "px";
      element.style.left = more.left + "px";
      element.style.transform = "rotate(" + more.rotate + "deg)";
      more.appeared = true;
      animationContainer.append(element);
    }
  }

  if (addArray[addArray.length - 1].appeared !== true) {
    requestAnimationFrame(drawPic);
  }
}
