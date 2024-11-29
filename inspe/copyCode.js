window.onload = () => {
  const copyButtonLabel = "Copier HTML";

  // Sélectionner tous les éléments <pre>
  const blocks = document.querySelectorAll("pre");

  blocks.forEach((block) => {
    // Vérifier si le navigateur prend en charge l'API du presse-papiers
    if (navigator.clipboard) {
      const button = document.createElement("button");
      button.innerText = copyButtonLabel;

      // Ajouter le bouton à l'intérieur du bloc <pre>
      block.appendChild(button);

      // Ajouter un gestionnaire d'événements au clic du bouton
      button.addEventListener("click", async () => {
        const code = block.querySelector("code");
        
        if (code) {
          const text = code.innerText;

          try {
            await navigator.clipboard.writeText(text);

            // Donner un retour visuel à l'utilisateur
            button.innerText = "HTML Copié!";
            setTimeout(() => {
              button.innerText = copyButtonLabel;
            }, 1000);
          } catch (error) {
            console.error("Erreur lors de la copie : ", error);
            button.innerText = "Erreur!";
            setTimeout(() => {
              button.innerText = copyButtonLabel;
            }, 1000);
          }
        } else {
          console.warn("Aucun élément <code> trouvé dans le bloc <pre>.");
        }
      });
    }
  });
};
