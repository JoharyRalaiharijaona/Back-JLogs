# Documentation API Devis

## Base URL
`/api/devis`

---

## Endpoints

### 1. Créer un devis
- **POST** `/api/devis`
- **Body :**
```json
{
  "reservationId": 1,
  "clientId": 1,
  "montant": 2500
}
```
- **Réponse :**
```json
{
  "id": 1,
  "reservationId": 1,
  "clientId": 1,
  "dateCreation": "2025-07-12T10:00:00.000Z",
  "montant": 2500
}
```

### 2. Récupérer tous les devis
- **GET** `/api/devis`
- **Réponse :**
```json
[
  {
    "id": 1,
    "reservationId": 1,
    "clientId": 1,
    "dateCreation": "2025-07-12T10:00:00.000Z",
    "montant": 2500
  }
]
```

### 3. Récupérer un devis par ID
- **GET** `/api/devis/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "reservationId": 1,
  "clientId": 1,
  "dateCreation": "2025-07-12T10:00:00.000Z",
  "montant": 2500
}
```

### 4. Modifier un devis
- **PATCH** `/api/devis/{id}`
- **Body :**
```json
{
  "montant": 3000
}
```
- **Réponse :**
```json
{
  "id": 1,
  "reservationId": 1,
  "clientId": 1,
  "dateCreation": "2025-07-12T10:00:00.000Z",
  "montant": 3000
}
```

### 5. Supprimer un devis
- **DELETE** `/api/devis/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "reservationId": 1,
  "clientId": 1,
  "dateCreation": "2025-07-12T10:00:00.000Z",
  "montant": 2500
}
```

---

## Schéma Devis
```json
{
  "id": "number",
  "reservationId": "number",
  "clientId": "number",
  "dateCreation": "string",
  "montant": "number"
}
```

## Remarques
- Un devis est lié à une réservation et à un client.
- Le montant doit être calculé selon la logique métier (ex : somme des matériels réservés).

