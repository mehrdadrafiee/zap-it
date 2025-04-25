const existing = document.getElementById("zap-it-input");

if (!existing) {
  const container = document.createElement("div");
  container.id = "zap-it-container";

  const input = document.createElement("input");
  input.id = "zap-it-input";
  input.placeholder = "Zap it. Ask ChatGPT...";

  const button = document.createElement("button");
  button.id = "zap-it-button";
  button.innerHTML = "→";
  button.disabled = true;

  container.appendChild(input);
  container.appendChild(button);
  document.body.appendChild(container);

  const handleSubmit = () => {
    const query = input.value.trim();
    if (query) {
      window.open(`https://chatgpt.com/?q=${encodeURIComponent(query)}`, '_blank');
      input.value = '';
      input.placeholder = "Zap it. Ask ChatGPT...";
      button.disabled = true;
    }
  };

  input.addEventListener("input", (e) => {
    const hasValue = e.target.value.trim().length > 0;
    button.disabled = !hasValue;
    e.target.placeholder = hasValue ? "" : "Zap it. Ask ChatGPT...";
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  });

  button.addEventListener("click", handleSubmit);
}
