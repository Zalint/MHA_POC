# Site Web MHA - Ministère de l'Hydraulique et de l'Assainissement

Ce site web statique simple permet d'afficher les actualités du ministère de l'hydraulique et de l'assainissement ainsi que les tickets soulevés par les citoyens.

## Fonctionnalités

- Affichage des actualités du ministère via le flux Facebook
- Liste des tickets citoyens avec leurs détails
- Interface responsive et moderne
- Pas de base de données requise

## Installation

1. Clonez ce dépôt ou téléchargez les fichiers
2. Ouvrez le fichier `index.html` dans votre navigateur

## Structure des fichiers

- `index.html` - Page principale du site
- `styles.css` - Styles CSS
- `script.js` - JavaScript pour la fonctionnalité
- `README.md` - Documentation

## Déploiement

Le site peut être déployé sur n'importe quel service d'hébergement statique comme :
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- etc.

## Personnalisation

Pour modifier les tickets affichés, éditez le tableau `tickets` dans le fichier `script.js`.

## Note sur l'intégration Facebook

Le flux Facebook est intégré via un iframe. Pour que cela fonctionne correctement, vous devrez :
1. Créer une application Facebook
2. Obtenir un App ID
3. Remplacer `appId` dans l'URL de l'iframe par votre App ID

## Licence

Ce projet est sous licence MIT. 