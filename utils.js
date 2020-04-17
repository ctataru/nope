function sendMake() {
  const qs = new URLSearchParams(window.location.search);
  const name = document.getElementById('name-input').value;
  const language = qs.get('l') || 'en';
  const parsedName = btoa(name);

  window.location.href = `/?n=${parsedName}&l=${language}`;
}

function handleForm(event) {
  event.preventDefault();
  sendMake();
}

function goHome() {
  const qs = new URLSearchParams(window.location.search);
  const language = qs.get('l') || 'en';
  window.location.href = `/?l=${language}`;
}

setTimeout(() => {
  const form = document.getElementById("make-form");
  if (form) form.addEventListener('submit', handleForm);
}, 200)
