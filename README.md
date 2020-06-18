# Les métiers de l'informatique (website)

Aperçu du site :  
https://florianvaneste.github.io/Les-metiers-de-l-informatique--Website/

<img src='https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fflorianvaneste.github.io%2FLes-metiers-de-l-informatique--Website%2F&chs=180x180&choe=UTF-8&chld=L|2' rel='nofollow' alt='qr code'><a href='https://fr.qr-code-generator.com/
            ' border='0' style='cursor:default'  rel='nofollow'></a>


---

## Présentation du site

Le but de notre site est de donner une vue générale sur les métiers de l'informatique.

Nous avons donc cherché à donner les informations essentielles pour chaque métier, de manière synthétique.

<br>
<br>

## Interface et hierarchisation des informations

Pour rendre notre site plus interactif, nous avons voulu intégrer un système de cartes présentant chaque métier.

![](documentation/homepage.png)
*Page d'accueil (page principale du site)*

Nous les avons ensuite regroupées par catégories :
- Web
- Jeux vidéo
- Sécurité
- Science
- Data
- Commerce

Pour naviguer facilement entre les catégories et les cartes, nous avons ajouté des boutons précédent et suivant.

Nous avons aussi ajouté des boutons pour accéder directement à chaque catégorie. L'utilisateur n'a alors plus besoin de cliquer plusieurs fois pour y accéder. Un seul clic suffit désormais.  

<br>

## Choix techniques et de design

Nous avons cherché à créer une interface "mobile friendly", qui soit pratique à utiliser sur écran tactile ou non. C'est pourquoi l'ensemble des éléments de la page sont placés sur le centre de l'écran.

Nous avons volontairement limité la largeur des cartes même sur grand écran. Si nous ne l'avions pas fait, la carte aurait été trop large proportionnellement au contenu.

Pour réaliser notre site nous n'avons utilisé aucun framework. Pour la mise en page, les propriétés css flexbox et les unités relatives au viewport (vw et vh) nous semblaient largement suffisantes, et ne nécéssitaient pas d'importer une bibliothèque complète. Cela aurait eu un impact négatif sur la vitesse de chargement de la page.

Pour le système de gestion de cartes, nous avons voulu faire notre propre code avec javascript. Utiliser une librairie de caroussel n'aurait pas été adapté puisque le nôtre est en deux dimensions. De plus, l'implémentation des boutons de navigation vers chaque catégorie aurait été plus compliquée avec un framework.

Concernant le design, nous avons attribué une couleur à chaque catégorie afin de donner des repères à l'utilisateur. Cela permet aussi de garder une certaine cohérence dans le design.

<br>

## Choix du contenu et disposition

Nous avions déjà réalisé des travaux de recherche sur l'ensemble des métiers de l'informatique et en avions fait des affiches. Le contenu nous semblait pertinent et adapté à ce projet.

Nous avons donc repris ce contenu et l'avons adapté pour le web.

Les informations clé de chaque métier (salaire, formation...) ont été mises en valeur en bas de chaque carte afin que ces informations soit facilement visibles sur chaque carte.

<br>

## Plan du site

![](documentation/sitemap.png)  
*Page Plan du site*

Nous y avons répertorié les noms des métiers présentés sur notre site. Nous les avons regroupé par catégorie pour plus de clarté et pour les retrouver facilement sur notre site.

<br>

## Crédits

![](documentation/credits.png)   
*Page Crédits*

Nous avons repris les textes et illustrations d'affiches réalisées auparavant sur les métiers de l'informatique. 
Les personnes les ayant réalisé ont donc été créditées (Ethan Cybulski, Thomas Cottrez et Florian Vaneste).

Les sources utilisées pour la conception de ces affiches ont également été renseignées dans notre rubrique Crédits.

Par soucis de transparence nous vous joignons le lien du dépôt des affiches :  
https://github.com/FlorianVaneste/Les-metiers-de-l-informatique--Affiches

<br>

## Optimisations, accessibilité et validité W3C

Nous avons cherché à optimiser la vitesse de chargement de notre site.
Nous avons donc cherché à privilégier les images au format vectoriel (svg), et avons compressé les autres images.
Pour tester et améliorer la performance du site et l'accessibilité, nous avons utilisé les outils PageSpeed Insights et Lighthouse.

!["](documentation/lighthouseDesktop.png)  
*Audit Lighthouse sur la homepage (Desktop)*

<br>

!["](documentation/lighthouseMobile.png)  
*Audit Lighthouse sur la homepage (Mobile)*

<br>

Toutes nos pages ont été passées au validateur W3C et n'ont présenté aucune erreur.

![](documentation/w3c.png)  
*Validation W3C - https://validator.w3.org/unicorn/*

Pour faciliter la mise en place du responsive design, nous avons utilisé Flexbox et des unités relatives (vw, vh et %).

Nous avons aussi amélioré la SEO puisque les sites réalisés sont suiceptibles d'être publiés.  
Pour cela, nous avons réalisé un fichier sitemap.xml et rempli les balises meta description.

En termes d'accessibilité, notre site est certifié WCAG 2.0 (Level AA).  
[Voir le rapport d'accessibilité AChecker](documentation/achecker_accessibilityReport.pdf)
