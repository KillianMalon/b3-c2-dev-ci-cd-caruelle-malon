# b3-c2-dev-tu-caruelle-malon

This is Nathan CARUELLE and Killian MALON's project.

**Type npm start to start the project**


There's some explainations about the project's structure :

- The ***.vscode*** and the ***.eslint.json*** are uploaded so we can share our settings on this project and keep our code clear.

- All the tests are in the test folder.

- ***operations.js*** is a file where all the formulas are

- ***index.js*** is our main file.


# Plan Tests BDD pour les différentes opérations (Addition, Soustraction, Multiplication, Divission, Pourcentage)

### Test d'addition :

L'addition doit permettre à l'utilisateur d'ajouter deux nombres entre eux.

Elle ce doit d'avoir les particularités suivantes :

- L'addition de deux nombres positifs.
- L'addition de deux nombres négatifs .
- L'addition de deux nombres de signes opposés.
- L'addition de deux nombres décimaux.
- Afficher une erreur lorsque ce n'est pas deux nombres

### Test de soustraction :

L'addition doit permettre à l'utilisateur d'ajouter deux nombres entre eux.

Elle ce doit d'avoir les particularités suivantes :

- La soustraction de deux nombres positifs.
- La soustraction de deux nombres négatifs.
- La soustraction de deux nombres de signes opposés.
- La soustraction de deux nombres décimaux.
- Afficher une erreur lorsque ce n'est pas deux nombres

### Test de multiplication :

La multiplication doit permettre à l'utilisateur de multiplier deux nombres entre eux.

Elle ce doit d'avoir les particularités suivantes :

- La multiplication de deux nombres positifs.
- La multiplication de deux nombres négatifs.
- La multiplication de deux nombres de signes opposés.
- La multiplication de deux nombres décimaux.
- Afficher une erreur lorsque ce n'est pas deux nombres


### Test de division :

La division doit permettre à l'utilisateur de diviser deux nombres entre eux.

Elle ce doit d'avoir les particularités suivantes :

- La division de deux nombres positifs.
- La division de deux nombres négatifs.
- La division de deux nombres de signes opposés.
- La division de deux nombres décimaux.
- La division par zéro donne une erreur appropriée.
- Afficher une erreur lorsque ce n'est pas deux nombres

### Test de calcul de pourcentage :

Le calcul de pourcentage doit permettre à l'utilisateur le calcul de pourcentage deux nombres entre eux.

Elle ce doit d'avoir les particularités suivantes :

- Le calcul de pourcentage pour une valeur et un pourcentage donnés.
- Le calcul de pourcentage pour une valeur négative et un pourcentage donné.
- Le calcul de pourcentage pour une valeur et un pourcentage négatifs.
- Le calcul de pourcentage donne une erreur appropriée lorsque la valeur est nulle.


# Plan Tests TDD pour les différentes opérations (Carré d'un nombre, Rcaine carré, Puissance)

## 1 - Calcul du carré d'un nombre

Test 1: "La fonction carré doit retourner 16 si elle est appelée avec 4 en argument"
Test 2: "La fonction carré doit retourner 25 si elle est appelée avec -5 en argument"
Test 3: "La fonction carré doit retourner 110,25 si elle est appelée avec 10,5 en argument"
Test 4: "La fonction carré doit retourner 525 si elle est appelée avec 275625 en argument"

## 2 - Calcul de la racine carrée d'un nombre

Test 1: "La fonction racine carrée doit retourner 3 si elle est appelée avec 9 en argument"
Test 2: "La fonction racine carrée doit retourner une erreur si elle est appelée avec un nombre négatif"
Test 3: "La fonction racine carrée doit retourner Erreur si elle est appelée avec 0 en argument"

## 3 - Calcul de la puissance d'un nombre

Test 1: "La fonction puissance doit retourner 8 si elle est appelée avec 2 en base et 3 en exposant"
Test 2: "La fonction puissance doit retourner 1 si elle est appelée avec n'importe quel nombre en base et 0 en exposant"
Test 3: "La fonction puissance doit retourner 0.125 si elle est appelée avec 2 en base et -3 en exposant"
Test 4: "La fonction puissance doit retourner 390625 si elle est appelée avec 5 en base et 8 en exposant"


