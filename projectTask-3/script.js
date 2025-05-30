const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");
const del = document.getElementById("del");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      display.value += value;
    }
  });
});

clear.addEventListener("click", () => {
  display.value = "";
});

equal.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});

del.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});
