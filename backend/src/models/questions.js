const questions = [
    {
      id: 1,
      question: "Qu'est-ce qu'un *Component* dans Angular ?",
      options: [
        "Une classe JavaScript simple",
        "Un bloc de construction de l'interface utilisateur",
        "Une directive spéciale",
        "Un service pour gérer les données"
      ],
      answer: "Un bloc de construction de l'interface utilisateur",
    },
    {
      id: 2,
      question: "Quel décorateur Angular est utilisé pour définir un composant ?",
      options: ["@Injectable", "@NgModule", "@Component", "@Directive"],
      answer: "@Component",
    },
    {
      id: 3,
      question: "Quelle commande CLI est utilisée pour créer un nouveau projet Angular ?",
      options: [
        "ng create [nom_du_projet]",
        "ng new [nom_du_projet]",
        "ng init [nom_du_projet]",
        "ng start [nom_du_projet]"
      ],
      answer: "ng new [nom_du_projet]",
    },
    {
      id: 4,
      question: "Quel module est toujours importé dans un projet Angular de base ?",
      options: [
        "BrowserModule",
        "FormsModule",
        "HttpClientModule",
        "ReactiveFormsModule"
      ],
      answer: "BrowserModule",
    },
    {
      id: 5,
      question: "À quoi sert le fichier `angular.json` dans un projet Angular ?",
      options: [
        "Configurer les routes de l'application",
        "Définir la structure des services",
        "Configurer les options de compilation et de projet",
        "Gérer les dépendances de l'application"
      ],
      answer: "Configurer les options de compilation et de projet",
    },
    {
      id: 6,
      question: "Qu'est-ce qu'un *Pipe* en Angular ?",
      options: [
        "Un composant pour afficher des données",
        "Une directive pour modifier le DOM",
        "Une fonction qui transforme les données dans un template",
        "Un service pour gérer les requêtes HTTP"
      ],
      answer: "Une fonction qui transforme les données dans un template",
    },
    {
      id: 7,
      question: "Quelle directive structurelle est utilisée pour afficher un contenu conditionnellement dans Angular ?",
      options: ["*ngFor", "*ngIf", "*ngSwitch", "*ngStyle"],
      answer: "*ngIf",
    },
    {
      id: 8,
      question: "Qu'est-ce que la directive `*ngFor` fait dans un template Angular ?",
      options: [
        "Elle crée une boucle pour itérer sur un tableau et afficher un élément pour chaque item",
        "Elle permet de lier des événements aux éléments HTML",
        "Elle modifie les styles d'un élément HTML",
        "Elle affiche un message d'erreur dans la console"
      ],
      answer: "Elle crée une boucle pour itérer sur un tableau et afficher un élément pour chaque item",
    },
    {
      id: 9,
      question: "Quel est le rôle d'un service dans une application Angular ?",
      options: [
        "Gérer les opérations de routage",
        "Contenir la logique métier réutilisable",
        "Créer des composants de l'interface utilisateur",
        "Effectuer des opérations de compilation"
      ],
      answer: "Contenir la logique métier réutilisable",
    },
    {
      id: 10,
      question: "Quelle directive est utilisée pour ajouter des classes CSS conditionnellement dans Angular ?",
      options: ["ngClass", "ngIf", "ngFor", "ngSwitch"],
      answer: "ngClass",
    },
    {
      id: 11,
      question: "Qu'est-ce que la commande `ng serve` fait dans un projet Angular ?",
      options: [
        "Lance l'application en mode développement",
        "Compile l'application pour la production",
        "Crée un nouveau projet Angular",
        "Déploie l'application sur un serveur"
      ],
      answer: "Lance l'application en mode développement",
    },
    {
      id: 12,
      question: "Quel est le rôle de `@Injectable` dans Angular ?",
      options: [
        "Déclare un service à injecter dans d'autres composants ou services",
        "Déclare un composant Angular",
        "Déclare une directive personnalisée",
        "Déclare un module Angular"
      ],
      answer: "Déclare un service à injecter dans d'autres composants ou services",
    },
    {
      id: 13,
      question: "Qu'est-ce que le *two-way data binding* dans Angular ?",
      options: [
        "Une méthode pour lier une variable de la classe TypeScript avec un élément HTML de manière bidirectionnelle",
        "Une méthode pour lier une variable d'un composant à un autre",
        "Une méthode pour afficher des données dynamiquement dans un template",
        "Une méthode pour lier des événements à des éléments HTML"
      ],
      answer: "Une méthode pour lier une variable de la classe TypeScript avec un élément HTML de manière bidirectionnelle",
    },
    {
      id: 14,
      question: "Qu'est-ce que le fichier `app.module.ts` dans Angular ?",
      options: [
        "Il définit le point d'entrée de l'application Angular",
        "Il contient la configuration des routes de l'application",
        "Il déclare les services utilisés par l'application",
        "Il contient les configurations de style CSS"
      ],
      answer: "Il définit le point d'entrée de l'application Angular",
    },
    {
      id: 15,
      question: "À quoi sert la directive `ngIf` dans Angular ?",
      options: [
        "Elle permet d'afficher un élément uniquement si une condition est vraie",
        "Elle permet de lier des événements à un élément HTML",
        "Elle permet d'itérer sur un tableau d'objets",
        "Elle permet d'appliquer des styles conditionnels"
      ],
      answer: "Elle permet d'afficher un élément uniquement si une condition est vraie",
    },
    {
        id: 16,
        question: "Qu'est-ce qu'un service en Angular ?",
        options: [
          "Une classe qui gère les événements du DOM",
          "Une classe qui contient de la logique métier réutilisable",
          "Une directive qui change le DOM",
          "Un module qui configure les routes"
        ],
        answer: "Une classe qui contient de la logique métier réutilisable",
      },
      {
        id: 17,
        question: "Comment un service est-il fourni dans une application Angular ?",
        options: [
          "Via l'injection de dépendances",
          "En l'instanciant manuellement dans chaque composant",
          "Via des requêtes HTTP",
          "En le déclarant dans le fichier `angular.json`"
        ],
        answer: "Via l'injection de dépendances",
      },
      {
        id: 18,
        question: "Que permet l'injection de dépendances dans Angular ?",
        options: [
          "De réduire le couplage entre les composants et les services",
          "D'améliorer la performance de l'application",
          "De gérer le routing dans l'application",
          "D'assurer la compatibilité entre les versions"
        ],
        answer: "De réduire le couplage entre les composants et les services",
      },
      {
        id: 19,
        question: "Quelle est la fonction de l'annotation `@Injectable` dans un service Angular ?",
        options: [
          "Déclare qu'un service peut être injecté dans d'autres parties de l'application",
          "Déclare un composant Angular",
          "Déclare une route pour le service",
          "Indique qu'un service peut être utilisé uniquement dans un module spécifique"
        ],
        answer: "Déclare qu'un service peut être injecté dans d'autres parties de l'application",
      },
      {
        id: 20,
        question: "Quelle commande CLI est utilisée pour créer un service dans Angular ?",
        options: [
          "ng generate service [nom_du_service]",
          "ng create service [nom_du_service]",
          "ng new service [nom_du_service]",
          "ng add service [nom_du_service]"
        ],
        answer: "ng generate service [nom_du_service]",
      },
      {
        id: 21,
        question: "Qu'est-ce que le Router en Angular ?",
        options: [
          "Un outil qui gère la navigation entre les composants en fonction de l'URL",
          "Un outil qui effectue les requêtes HTTP vers le serveur",
          "Un composant qui génère l'interface utilisateur",
          "Un module pour gérer les données"
        ],
        answer: "Un outil qui gère la navigation entre les composants en fonction de l'URL",
      },
      {
        id: 22,
        question: "Quel est le rôle du composant `<router-outlet>` dans Angular ?",
        options: [
          "Il affiche dynamiquement le contenu d'une route",
          "Il gère l'injection de dépendances",
          "Il définit les styles CSS pour la route",
          "Il permet de charger des services"
        ],
        answer: "Il affiche dynamiquement le contenu d'une route",
      },
      {
        id: 23,
        question: "Quel est l'avantage d'utiliser `routerLink` plutôt que `href` dans Angular ?",
        options: [
          "Elle permet une navigation sans recharger la page entière",
          "Elle effectue un rechargement complet de la page",
          "Elle permet d'ouvrir une nouvelle fenêtre",
          "Elle effectue des requêtes API"
        ],
        answer: "Elle permet une navigation sans recharger la page entière",
      },
      {
        id: 24,
        question: "Comment définir une route paramétrée dans Angular ?",
        options: [
          "En ajoutant `:param` dans le chemin de la route",
          "En utilisant `router-outlet`",
          "En configurant un `@Param` dans le composant",
          "En créant un nouveau service"
        ],
        answer: "En ajoutant `:param` dans le chemin de la route",
      },
      {
        id: 25,
        question: "Comment récupérer un paramètre dynamique dans un composant Angular ?",
        options: [
          "En utilisant le service `ActivatedRoute`",
          "En utilisant `@Injectable`",
          "En accédant directement à l'URL via `window.location`",
          "En utilisant `ngFor`"
        ],
        answer: "En utilisant le service `ActivatedRoute`",
      },
      {
        id: 26,
        question: "Que permet de faire la directive `routerLink` en Angular ?",
        options: [
          "Permet de naviguer dynamiquement entre les pages sans recharger la page",
          "Affiche dynamiquement le contenu de la route",
          "Modifie les styles CSS d'un élément",
          "Gère les événements utilisateurs"
        ],
        answer: "Permet de naviguer dynamiquement entre les pages sans recharger la page",
      },
  ];
  
  module.exports = questions;
  