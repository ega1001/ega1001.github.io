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
						const isCompetenceMatch = selectedCompetence === "" || comp.id === selectedCompetence;
						let hasVisibleContent = false;

						console.log(
							"Vérification de la compétence :",
							comp.id,
							"Correspond au filtre :",
							isCompetenceMatch
						);

						// Si la compétence correspond, parcourir chaque article pour détecter les tutoriels
						if (isCompetenceMatch) {
							const articles = comp.querySelectorAll("article.mb-2");
							console.log("Articles trouvés dans", comp.id, ":", articles.length);

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

									console.log("Tutoriel :", tutorial.id, "- Match mot-clé ?", isTitleMatch);
								});

								// Afficher ou masquer l'article selon qu'il a des tutoriels visibles
								article.style.display = hasVisibleLink ? "" : "none";
								console.log("Article :", article, "Contient un lien visible :", hasVisibleLink);
							});

							// Afficher ou masquer la section de compétence si elle contient du contenu visible
							comp.style.display = hasVisibleContent ? "" : "none";
							console.log(
								"Section compétence :",
								comp.id,
								"Contient du contenu visible :",
								hasVisibleContent
							);
						} else {
							comp.style.display = "none"; // Masquer la section si elle ne correspond pas à la compétence sélectionnée
						}
					});
				}

				searchInput.addEventListener("input", filterTutorials);
				competenceFilter.addEventListener("change", filterTutorials);
			});
