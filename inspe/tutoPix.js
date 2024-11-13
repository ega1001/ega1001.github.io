document.addEventListener("DOMContentLoaded", function () {
				const searchInput = document.getElementById("searchInput");
				const competenceFilter = document.getElementById("competenceFilter");

				function filterTutorials() {
					const searchTerm = searchInput.value.toLowerCase();
					const selectedCompetence = competenceFilter.value;
					console.log(
						"Mot-clé recherché :",
						searchTerm,
						"Compétence sélectionnée :",
						selectedCompetence
					);

					// Parcourir chaque section de compétence
					document.querySelectorAll(".comp").forEach((comp) => {
						const isCompetenceMatch = !selectedCompetence || comp.id === selectedCompetence;
						let hasVisibleContent = false;

						console.log(
							"Vérification de la compétence :",
							comp.id,
							"Correspond au filtre :",
							isCompetenceMatch
						);

						// Parcourir chaque sous-domaine de la section de compétence
						comp.querySelectorAll(".subdomain").forEach((subdomain) => {
							let hasVisibleLink = false;

							// Récupérer tous les tutoriels directement associés au sous-domaine courant
							const tutorialLinks = subdomain.parentElement.querySelectorAll(".tutorial-link");

							tutorialLinks.forEach((tutorial) => {
								const titleText = tutorial.textContent.toLowerCase();
								const isTitleMatch = titleText.includes(searchTerm);

								if (isCompetenceMatch && isTitleMatch) {
									tutorial.classList.remove("d-none"); // Afficher le tutoriel en supprimant la classe 'd-none'
									hasVisibleLink = true;
									hasVisibleContent = true;
								} else {
									tutorial.classList.remove("d-flex");
									tutorial.classList.add("d-none"); // Masquer le tutoriel en ajoutant la classe 'd-none'
								}

								console.log(
									"Tutoriel :",
									tutorial.id,
									"Titre :",
									titleText,
									"Match :",
									isTitleMatch
								);
							});

							// Afficher ou masquer le sous-domaine selon qu'il a des liens visibles
							subdomain.style.display = hasVisibleLink ? "" : "none";
							console.log(
								"Sous-domaine :",
								subdomain.textContent,
								"Contient un lien visible :",
								hasVisibleLink
							);
						});

						// Afficher ou masquer la section de compétence si elle contient du contenu visible
						comp.style.display = hasVisibleContent ? "" : "none";
						console.log(
							"Section compétence :",
							comp.id,
							"Contient du contenu visible :",
							hasVisibleContent
						);
					});
				}

				searchInput.addEventListener("input", filterTutorials);
				competenceFilter.addEventListener("change", filterTutorials);
			});
