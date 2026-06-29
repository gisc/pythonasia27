const prompts = [
  "Render the website as a live markdown graph with SOUL.md as the central core.",
  "Connect memory, people, and programme back to culture in one readable visual system.",
  "Blend Singapore hospitality with an AI-agent interface built from linked documents."
];

const typeTarget = document.getElementById("type-line");

let promptIndex = 0;
let charIndex = 0;
let deleting = false;

function tickType() {
  if (!typeTarget) return;

  const current = prompts[promptIndex];

  if (!deleting) {
    charIndex += 1;
    typeTarget.textContent = current.slice(0, charIndex);

    if (charIndex === current.length) {
      deleting = true;
      setTimeout(tickType, 1800);
      return;
    }
  } else {
    charIndex -= 1;
    typeTarget.textContent = current.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      promptIndex = (promptIndex + 1) % prompts.length;
    }
  }

  const delay = deleting ? 22 : 38;
  setTimeout(tickType, delay);
}

tickType();
