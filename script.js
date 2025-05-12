const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// ✅ Only allow numbers and basic math ops (+, -, *, /, .)
function isValidInput(char) {
  return /^[0-9+\-*/.]$/.test(char);
}

// 🎯 Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      if (/^[0-9+\-*/.]+$/.test(display.value)) {
        display.value = eval(display.value);
      }
    } else {
      if (isValidInput(value)) {
        display.value += value;
      }
    }
  });
});

// ⌨️ Handle keyboard input
display.addEventListener("keydown", function (e) {
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Enter",
  ];

  if (!allowedKeys.includes(e.key)) {
    e.preventDefault(); // Block anything not allowed
  }

  if (e.key === "Enter") {
    e.preventDefault();
    if (/^[0-9+\-*/.]+$/.test(display.value)) {
      display.value = eval(display.value);
    }
  }
});
