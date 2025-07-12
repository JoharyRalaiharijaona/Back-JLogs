# Documentation API Réservation (Reservation)

## Base URL
`/api/reservations`

---

## Endpoints

### 1. Récupérer toutes les réservations
- **GET** `/api/reservations`
- **Réponse :**
```json
[
  {
    "id": 1,
    "clientId": 1,
    "nomEvenement": "Séminaire annuel",
    "dateDebut": "2025-07-10T10:00:00.000Z",
    "dateFin": "2025-07-12T18:00:00.000Z",
    "statut": "Confirmée",
    "lieu": "Hôtel Carlton",
    "contactNom": "Jean Dupont",
    "contactEmail": "jean.dupont@example.com",
    "contactTelephone": "+261341234567",
    "valeurTotale": 2500,
    "notes": "Prévoir vidéoprojecteur",
    "materiels": [
      { "materielId": 2, "nom": "Vidéoprojecteur" },
      { "materielId": 3, "nom": "Ordinateur portable" }
    ]
  }
]
```

### 2. Récupérer une réservation par ID
- **GET** `/api/reservations/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "clientId": 1,
  "nomEvenement": "Séminaire annuel",
  "dateDebut": "2025-07-10T10:00:00.000Z",
  "dateFin": "2025-07-12T18:00:00.000Z",
  "statut": "Confirmée",
  "lieu": "Hôtel Carlton",
  "contactNom": "Jean Dupont",
  "contactEmail": "jean.dupont@example.com",
  "contactTelephone": "+261341234567",
  "valeurTotale": 2500,
  "notes": "Prévoir vidéoprojecteur",
  "materiels": [
    { "materielId": 2, "nom": "Vidéoprojecteur" },
    { "materielId": 3, "nom": "Ordinateur portable" }
  ]
}
```

### 3. Créer une réservation
- **POST** `/api/reservations`
- **Body :**
```json
{
  "clientId": 1,
  "materiels": [
    { "materielId": 2, "quantite": 3 },
    { "materielId": 5, "quantite": 1 }
  ],
  "nomEvenement": "Séminaire annuel",
  "dateDebut": "2025-07-10T10:00:00.000Z",
  "dateFin": "2025-07-12T18:00:00.000Z",
  "statut": "Confirmée",
  "lieu": "Hôtel Carlton",
  "contactNom": "Jean Dupont",
  "contactEmail": "jean.dupont@example.com",
  "contactTelephone": "+261341234567",
  "notes": "Prévoir vidéoprojecteur"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "clientId": 1,
  "nomEvenement": "Séminaire annuel",
  "dateDebut": "2025-07-10T10:00:00.000Z",
  "dateFin": "2025-07-12T18:00:00.000Z",
  "statut": "Confirmée",
  "lieu": "Hôtel Carlton",
  "contactNom": "Jean Dupont",
  "contactEmail": "jean.dupont@example.com",
  "contactTelephone": "+261341234567",
  "notes": "Prévoir vidéoprojecteur",
  "materiels": [
    { "materielId": 2, "quantite": 3, "materiel": { "nom": "Vidéoprojecteur", "prix": 1000 } },
    { "materielId": 5, "quantite": 1, "materiel": { "nom": "Ordinateur portable", "prix": 1500 } }
  ],
  "client": { "id": 1, "nom": "Entreprise X" }
}
```

### 4. Modifier une réservation
- **PATCH** `/api/reservations/{id}`
- **Body :** (tous les champs sont optionnels)
```json
{
  "statut": "Annulée"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "clientId": 1,
  "nomEvenement": "Séminaire annuel",
  "dateDebut": "2025-07-10T10:00:00.000Z",
  "dateFin": "2025-07-12T18:00:00.000Z",
  "statut": "Annulée",
  "lieu": "Hôtel Carlton",
  "contactNom": "Jean Dupont",
  "contactEmail": "jean.dupont@example.com",
  "contactTelephone": "+261341234567",
  "valeurTotale": 2500,
  "notes": "Prévoir vidéoprojecteur",
  "materiels": [
    { "materielId": 2, "nom": "Vidéoprojecteur" },
    { "materielId": 3, "nom": "Ordinateur portable" }
  ]
}
```

### 5. Supprimer une réservation
- **DELETE** `/api/reservations/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "clientId": 1,
  "nomEvenement": "Séminaire annuel",
  "dateDebut": "2025-07-10T10:00:00.000Z",
  "dateFin": "2025-07-12T18:00:00.000Z",
  "statut": "Annulée",
  "lieu": "Hôtel Carlton",
  "contactNom": "Jean Dupont",
  "contactEmail": "jean.dupont@example.com",
  "contactTelephone": "+261341234567",
  "valeurTotale": 2500,
  "notes": "Prévoir vidéoprojecteur",
  "materiels": [
    { "materielId": 2, "nom": "Vidéoprojecteur" },
    { "materielId": 3, "nom": "Ordinateur portable" }
  ]
}
```

---

## Schéma Réservation
```json
{
  "id": "number",
  "clientId": "number",
  "nomEvenement": "string",
  "dateDebut": "string",
  "dateFin": "string",
  "statut": "string",
  "lieu": "string",
  "contactNom": "string",
  "contactEmail": "string",
  "contactTelephone": "string",
  "notes": "string",
  "materiels": [
    { "materielId": "number", "nom": "string" }
  ]
}
```

## Remarques
- Les champs exacts dépendent de votre modèle Prisma.
- Adapter les exemples selon vos besoins réels.
- Le champ materiels permet de spécifier la quantité pour chaque matériel réservé.
- Le montant du devis généré automatiquement est calculé selon la somme des (prix × quantité) de chaque matériel.
- Le champ prix doit être renseigné pour chaque matériel dans la base.
