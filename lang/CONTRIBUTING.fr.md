# Guide de contribution

Merci de votre intérêt pour revrain ! Nous accueillons volontiers les signalements de bugs, les améliorations de documentation et les contributions de code.

revrain est un thème Hugo conçu pour les geeks et les développeurs : design sombre avec animation de pluie digitale, esthétique verre dépoli (glassmorphism), prise en charge de 11 langues et conformité au standard d'accessibilité WCAG 2.2 AA. Chaque contribution est précieuse.

## Branches

Ce dépôt comporte deux branches principales :

- `main` : version stable / officielle. Fusionnée et publiée uniquement par les mainteneurs depuis `dev`. **Les PR directes ne sont pas acceptées.**
- `dev` : branche de développement. Toutes les fonctionnalités, corrections et modifications de documentation doivent être envoyées sur `dev`.

> Important : lors de l'ouverture d'une Pull Request, sélectionnez `dev` comme branche cible, et non `main`.

## Comment contribuer

- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer la documentation (y compris les traductions multilingues du README sous `lang/`)
- Soumettre des corrections de code ou de nouvelles fonctionnalités
- Aider aux tests et aux retours (notamment dans différents navigateurs, lecteurs d'écran et langues RTL)

## Environnement de développement

- Hugo >= 0.163.0 (toute édition ; le SCSS est compilé par Dart Sass externe)
- Dart Sass (doit être installé et présent dans le PATH ; Hugo l'invoque automatiquement)

### Aperçu local

```bash
cd exampleSite
hugo server
```

`exampleSite/hugo.toml` pointe déjà vers la racine du thème via `themesDir = "../../"` ; aucune configuration supplémentaire n'est nécessaire. Pour construire la version de production :

```bash
cd exampleSite
hugo --minify --gc
```

## Signaler un problème

Avant d'ouvrir une Issue, recherchez si un problème similaire existe déjà.

Merci de fournir autant d'éléments que possible :

- Votre environnement (système, version de Hugo, navigateur, etc.)
- Les étapes de reproduction
- Le résultat attendu
- Le résultat obtenu
- Les journaux d'erreur ou captures d'écran (si disponibles)

Pour les problèmes d'accessibilité (navigation clavier, lecteurs d'écran, contraste, RTL, etc.), précisez la technologie d'assistance utilisée et sa version.

## Soumettre du code

1. Forkez ce dépôt.

2. Clonez votre fork :

   ```bash
   git clone https://github.com/votre-nom-utilisateur/revrain.git
   cd revrain
   ```

3. Basculez sur la branche `dev` :

   ```bash
   git checkout dev
   git pull origin dev
   ```

4. Créez votre branche à partir de `dev` :

   ```bash
   git checkout -b fix/description-du-probleme
   ```

   Noms de branche suggérés :

   - `feat/nouvelle-fonctionnalite`
   - `fix/correction`
   - `docs/mise-a-jour-documentation`

5. Modifiez le code et committez :

   ```bash
   git add .
   git commit -m "fix: corrige un problème précis"
   ```

6. Poussez vers votre fork :

   ```bash
   git push origin fix/description-du-probleme
   ```

7. Ouvrez une Pull Request sur GitHub.

   **La branche cible du PR doit être `dev`, pas `main`.**

## Exigences des Pull Requests

- Branche cible : `dev`
- Un PR doit idéalement ne traiter qu'une seule chose
- Expliquer ce qui a été changé, pourquoi et comment c'est testé
- Pour les gros changements, ouvrir d'abord une Issue pour discuter
- Ne pas inclure de formatage sans rapport ni de modifications à grande échelle
- Ne pas committer de mots de passe, clés ou informations personnelles
- Lors d'un changement de comportement du thème, mettre à jour `README.md` en conséquence (et les documents multilingues sous `lang/` si nécessaire)
- Après une modification de styles ou de scripts, vérifier localement avec `hugo server` et confirmer le bon rendu sur écran étroit (mobile)
- Lors de l'ajout ou de la modification d'interactions UI, conserver les conventions d'accessibilité existantes : opérable au clavier, focus visible, attributs `aria-*` et prise en charge de `prefers-reduced-motion`

## Suggestions de messages de commit

Recommandé mais non obligatoire (conserver le style de commit existant) :

- `feat: nouvelle fonctionnalité`
- `fix: correction de bug`
- `docs: mise à jour de documentation`
- `test: tests`
- `refactor: refactorisation`
- `chore: divers`

## Processus de publication des mainteneurs

Le développement courant se fait sur `dev`.
Une fois `dev` stable après tests, les mainteneurs fusionnent dans `main` et publient la version officielle.

## Communication

- Pour toute question, ouvrez directement une Issue ; nous répondrons dès que possible
- Soyez aimable et respectueux des avis divergents

## Licence

Vos contributions seront publiées sous la LICENCE MIT de ce projet. Voir [LICENSE](../LICENSE).
