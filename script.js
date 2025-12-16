function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER
      let titre = document.getElementById("nom-journal").innerHTML = `${journal.title}`;
      
      let texte = document.getElementById("phrase-accroche").innerHTML = `${journal.cta.text}`;

      
      // TODO 2: REMPLIR LA NAVIGATION

      let navBarre = document.getElementById('themes-nav');
      function navContainer(topics) {
        let boutton = topics.title
        let button = `<button class="nav-theme-btn"> ${boutton} </button>`

        navBarre.innerHTML += button;
      }
      function afficherNav(array) {
        journal.topics.forEach(element => {
        navContainer(element)
      });
      }

      afficherNav(journal)
      
      
      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let hero = data.lead;

      //hero.innerHTML = `
          //<img id= "hero-image" src="${journal.lead.imageHero}" alt="Image principale">
          //`;

          let heroContainer = document.getElementById("article-principal");
          

       function heroCarte(lead){
            let titreArcticle = lead.titre;
            let description = lead.description;
            let corps = lead.corps;
            let theme = lead.theme;
            let auteur = lead.auteur;

            let card = `<img id= "hero-image" src="${journal.
                       lead.imageHero}" alt="Image principale">
                        <div class="hero-info">
                        <h3 id="hero-titre">${titreArcticle}</h3>
                        <p id="hero-description">${description}</p>
                        <p>${corps}</p>
                        <p>Sujet: ${theme}</p>
                        <p id="hero-titre">Auteur: ${auteur}</p>
                        <button class="read-article-btn">Lire l'Article</button>
                        </div>`

            //heroContainer.insertAdjacentHTML("beforeend", card)
            heroContainer.innerHTML += card;
        }
        heroCarte(hero)

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let articleContainer = document.querySelector(".articles-grid");
       function creerCarte(stories){

          let headline = stories.headline;
            let image = stories.image;
            let summary = stories.summary;
            let body = stories.body;
            let date = stories.date;
            let topic = stories.topic;
            let author = stories.author;
            let read = stories.read;

            let card = `<div class="article-card">
                        <img src="${image}">
                        <h3 class="theme-badge">${headline}</h3>
                        <div class="article-content">
                        <h4>${summary}</h4>
                        <p>${body}</p>
                        <p>Sujet: ${topic}</p>
                        <p>${date}</p>
                        <p class="article-author">Auteur: ${author}</p>
                        <p>📖 ${read}</p>
                        <p class="read-btn"> lire </p>
                        </div>
                        </div>`

            //articleContainer.insertAdjacentHTML("beforeend", card)
            articleContainer.innerHTML += card;
        }

        function afficheTousLesArticles(array) {
                journal.stories.forEach(element => {
                creerCarte(element)
        });
                }

                afficheTousLesArticles(journal)

        
      // TODO 5: REMPLIR LES THEMES

                
       let themesContainer = document.querySelector(".themes-list");
       function creerCarte2(topics){

          let title = topics.title;
            let desc = topics.desc;
            let icon = topics.icon;
            let image = topics.image;
            let couleur = topics.color;
            let name = topics.nom;

            let card = `<div class="theme-item">
                        <p>${icon}</p>
                        <h3>${title}</h3>
                        <p>${desc}</p>
                        </div>`

            //themeContainer.insertAdjacentHTML("beforeend", card)
            themesContainer.innerHTML += card;
        }

        function afficheTousLesThemes(array) {
                journal.topics.forEach(element => {
                creerCarte2(element)
        });
                }

                afficheTousLesThemes(journal)
      // TODO 6: REMPLIR LES AUTEURS

          let auteursContainer = document.querySelector(".authors-list");
       function creerCarte3(contributors){

          let prenom = contributors.prenom;
            let nom = contributors.nom;
            let expertise = contributors.expertise;
            let bio = contributors.bio;
            let avatar = contributors.avatar;
            let email = contributors.email;
            let articles = contributors.articles;
            let followers = contributors.followers;

            let card = `<div class="author-card">
                        <img class= "author-image" src="${avatar}">
                        <h3>${prenom} ${nom}</h3>
                        <p>Domaine: ${expertise}</p>
                        <p>Bio: ${bio}</p>
                        <p>${articles} Articles</p>
                        <p>${followers} Abonnés</p>
                        <p>📧 ${email} </p>
                        </div>`

            //auteursContainer.insertAdjacentHTML("beforeend", card)
            auteursContainer.innerHTML += card;
        }

        function afficheTousLesAuteurs(array) {
                journal.contributors.forEach(element => {
                creerCarte3(element)
        });
                }

                afficheTousLesAuteurs(journal)

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION
                let footer = document.querySelector(".cta-section").innerHTML = `<div class="">
                      <h4> Rejoignez-nous pour en savoir plus sur le bien être de nos amis les Chiens </h4>
                      <button class="read-btn"> S'ABONNER </button>
                      </div>
                      `;
                      
              

      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
