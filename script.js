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
      navBarre.innerHTML += `<button class="nav-theme-btn all active" data-topic="all">TOUS</button>`;
      function navContainer(topics) {
        let boutton = topics.title;
        let icons = topics.icon
        let button = `<button class="nav-theme-btn" data-topic="${boutton}"> ${icons}${boutton} </button>`
        

        navBarre.innerHTML += button;
      }
      function afficherNav(array) {
        journal.topics.forEach(element => {
        navContainer(element)
      });
      }
      
      afficherNav(journal)
      
      //navBarre.addEventListener("click", function () {
      //filtrerArticlesParTheme(topic);
      //                  });
      //
      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let hero = data.lead;

      

          let heroContainer = document.getElementById("article-principal");
          

       function heroCarte(lead){
            let titreArcticle = lead.titre;
            let description = lead.description;
            let corps = lead.corps;
            let theme = lead.theme;
            let auteur = lead.auteur;
            let date = lead.date;

            let card = `<img id= "hero-image" src="${journal.
                       lead.imageHero}" alt="Image principale">
                        <div class="hero-info">
                        <p class="theme-badge">${theme}</p>
                        <h3 id="hero-titre">${titreArcticle}</h3>
                        <p id="hero-description">${description}</p>
                        <p>${corps}</p>
                        <p id="hero-auteur">Par <strong>${auteur}</strong> • ${date}</p>
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
            let rate = stories.rating;

            let card = `<div class="article-card">
                        <img src="${image}">
                        <div class="article-content">
                        <h6 class="theme-badge">${topic}</h6>
                        <h4>${headline}</h4>
                        <p>${body}</p>
                        <p>${summary}</p>
                        <p class="article-author">Par ${author} • ${date}</p>
                        <p>${scoreEtoile(rate)}</p>
                        <p>📖 ${read}</p>
                        <h6 class="read-btn"> lire l'article </h6>
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
                        <p>${bio}</p>
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
                
                let cta = document.querySelector(".cta-section").innerHTML = `<div class="">
                      <h4> Rejoignez-nous pour en savoir plus sur le bien être de nos amis les Chiens </h4>
                      <button class="read-btn"> S'ABONNER </button>
                      </div>
                      `; 
                      let ctaButton = document.querySelector(".cta-section");
                      ctaButton.addEventListener("click", function () {
                      alert(`Vous êtes maintenant abonné à ${journal.title} !`);
                        });

  

  
function remplacer(stories) {
  articleContainer.innerHTML = ""; 
  console.log('hey')
  stories.forEach(story => {
    creerCarte(story); 
  });
}

let buttonTous = document.querySelector(".all")
const filterButtons = document.querySelectorAll('#themes-nav button');

buttonTous.addEventListener("click", function(){
  filteredStories = journal.stories
  remplacer(filteredStories)
})


filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const topic = button.dataset.topic;

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    if (topic === "TOUS" || topic === "all") {
      remplacer(journal.stories);
    } else {
      const filteredStories = journal.stories.filter(
        story => story.topic === topic
      );
      remplacer(filteredStories);
    }
  });
});

function scoreEtoile(rating){
        let i = 0
        let result =""
        let nbrEtoiles =  Math.floor(rating);
        while (i < nbrEtoiles && i < 5){
          result += "★";
          i++;
        }
        while (i < 5){
          result += "☆";
          i++;
        }
        result +=(`${rating}`)
        return (result)
      }

      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
