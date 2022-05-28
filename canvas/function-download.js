var canvas = document.querySelector("canvas");
c = canvas.getContext("2d");

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL())
  );
