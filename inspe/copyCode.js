window.onload = () => {
  if (!navigator.clipboard) return;

  const LABELS = {
    default: "Copier HTML",
    success: "HTML Copié!",
    error: "Erreur!"
  };

  // Délégation d'événements
  document.addEventListener('click', async ({ target }) => {
    const button = target.closest('button');
    if (!button || !button.closest('.copy-code pre')) return;

    const code = button.parentElement.querySelector('code');
    if (!code) return;

    const originalText = button.textContent;
    
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = LABELS.success;
    } catch (error) {
      console.error("Erreur de copie :", error);
      button.textContent = LABELS.error;
    } finally {
      setTimeout(() => button.textContent = originalText, 1000);
    }
  });

  // Injection des boutons
  document.querySelectorAll('.copy-code pre').forEach(pre => {
    if (pre.querySelector('button')) return; // Évite les doublons
    
    const button = document.createElement('button');
    button.textContent = LABELS.default;
    pre.prepend(button);
  });
};
