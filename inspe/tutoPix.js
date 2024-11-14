window.onload = (event) => {
				const searchInput = document.getElementById("searchInput");
				const competenceFilter = document.getElementById("competenceFilter");

				function filterTutorials() {
					const searchTerm = searchInput.value.toLowerCase();
					const selectedCompetence = competenceFilter.value;					

					// Parcourir chaque section de compétence
					document.querySelectorAll(".comp").forEach((comp) => {
						const isCompetenceMatch = selectedCompetence === "" || comp.id === selectedCompetence;
						let hasVisibleContent = false;

						// Si la compétence correspond, parcourir chaque article pour détecter les tutoriels
						if (isCompetenceMatch) {
							const articles = comp.querySelectorAll("article.mb-2");							

							articles.forEach((article) => {
								let hasVisibleLink = false;

								// Récupérer tous les tutoriels dans chaque article
								const tutorialLinks = article.querySelectorAll(".tutorial-link");

								tutorialLinks.forEach((tutorial) => {
									const titleText = tutorial.textContent.toLowerCase();
									const isTitleMatch = titleText.includes(searchTerm);

									// Afficher ou masquer le tutoriel en fonction du mot-clé
									if (isTitleMatch || searchTerm === "") {
										tutorial.classList.remove("cache"); // Afficher le tutoriel en supprimant la classe 'hidden'
										hasVisibleLink = true;
										hasVisibleContent = true;
									} else {
										tutorial.classList.add("cache"); // Masquer le tutoriel en ajoutant la classe 'hidden'
									}
									
								});

								// Afficher ou masquer l'article selon qu'il a des tutoriels visibles
								article.style.display = hasVisibleLink ? "" : "none";								
							});

							// Afficher ou masquer la section de compétence si elle contient du contenu visible
							comp.style.display = hasVisibleContent ? "" : "none";							
						} else {
							comp.style.display = "none"; // Masquer la section si elle ne correspond pas à la compétence sélectionnée
						}
					});
				}

				searchInput.addEventListener("input", filterTutorials);
				competenceFilter.addEventListener("change", filterTutorials);
			};
