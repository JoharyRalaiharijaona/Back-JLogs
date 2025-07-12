# Documentation API Matériel (Materiel)

## Base URL
`/api/equipment`

---

## Endpoints

### 1. Récupérer tous les matériels
- **GET** `/api/equipment`
- **Réponse :**
```json
[
  {
    "id": 1,
    "nom": "Ordinateur portable",
    "categorie": "Informatique",
    "statut": "Disponible",
    "etat": "Neuf",
    "emplacement": "Bureau 1",
    "dateAchat": "2025-01-01T00:00:00.000Z",
    "derniereMaintenance": "2025-06-01T00:00:00.000Z",
    "numeroSerie": "ABC123456",
    "valeur": 1200,
    "image": "url_image",
    "prix": 1500
  }
]
```

### 2. Récupérer un matériel par ID
- **GET** `/api/equipment/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Ordinateur portable",
  "categorie": "Informatique",
  "statut": "Disponible",
  "etat": "Neuf",
  "emplacement": "Bureau 1",
  "dateAchat": "2025-01-01T00:00:00.000Z",
  "derniereMaintenance": "2025-06-01T00:00:00.000Z",
  "numeroSerie": "ABC123456",
  "valeur": 1200,
  "image": "url_image",
  "prix": 1500
}
```

### 3. Créer un matériel
- **POST** `/api/equipment`
- **Body :**
```json
{
  "nom": "Ordinateur portable",
  "categorie": "Informatique",
  "statut": "Disponible",
  "etat": "Neuf",
  "emplacement": "Bureau 1",
  "dateAchat": "2025-01-01T00:00:00.000Z",
  "derniereMaintenance": "2025-06-01T00:00:00.000Z",
  "numeroSerie": "ABC123456",
  "valeur": 1200,
  "image": "url_image",
  "prix": 1500
}
```
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Ordinateur portable",
  "categorie": "Informatique",
  "statut": "Disponible",
  "etat": "Neuf",
  "emplacement": "Bureau 1",
  "dateAchat": "2025-01-01T00:00:00.000Z",
  "derniereMaintenance": "2025-06-01T00:00:00.000Z",
  "numeroSerie": "ABC123456",
  "valeur": 1200,
  "image": "url_image",
  "prix": 1500
}
```

### 4. Modifier un matériel
- **PATCH** `/api/equipment/{id}`
- **Body :** (tous les champs sont optionnels)
```json
{
  "statut": "Indisponible",
  "prix": 1800
}
```
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Ordinateur portable",
  "categorie": "Informatique",
  "statut": "Indisponible",
  "etat": "Neuf",
  "emplacement": "Bureau 1",
  "dateAchat": "2025-01-01T00:00:00.000Z",
  "derniereMaintenance": "2025-06-01T00:00:00.000Z",
  "numeroSerie": "ABC123456",
  "valeur": 1200,
  "image": "url_image",
  "prix": 1800
}
```

### 5. Supprimer un matériel
- **DELETE** `/api/equipment/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Ordinateur portable",
  "categorie": "Informatique",
  "statut": "Indisponible",
  "etat": "Neuf",
  "emplacement": "Bureau 1",
  "dateAchat": "2025-01-01T00:00:00.000Z",
  "derniereMaintenance": "2025-06-01T00:00:00.000Z",
  "numeroSerie": "ABC123456",
  "valeur": 1200,
  "image": "url_image",
  "prix": 1800
}
```

---

## Schéma Matériel
```json
{
  "id": "number",
  "nom": "string",
  "categorie": "string",
  "statut": "string",
  "etat": "string",
  "emplacement": "string",
  "dateAchat": "string",
  "derniereMaintenance": "string",
  "numeroSerie": "string",
  "valeur": "number",
  "image": "string",
  "prix": "number"
}
```

## Remarques
- Le champ prix est obligatoire pour le calcul automatique des devis et doit être renseigné à la création ou la modification.
