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
    "equipmentId": 2,
    "date": "2025-07-10T10:00:00.000Z",
    "status": "Confirmée"
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
  "equipmentId": 2,
  "date": "2025-07-10T10:00:00.000Z",
  "status": "Confirmée"
}
```

### 3. Créer une réservation
- **POST** `/api/reservations`
- **Body :**
```json
{
  "clientId": 1,
  "equipmentId": 2,
  "date": "2025-07-10T10:00:00.000Z",
  "status": "Confirmée"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "clientId": 1,
  "equipmentId": 2,
  "date": "2025-07-10T10:00:00.000Z",
  "status": "Confirmée"
}
```

### 4. Modifier une réservation
- **PATCH** `/api/reservations/{id}`
- **Body :**
```json
{
  "status": "Annulée"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "clientId": 1,
  "equipmentId": 2,
  "date": "2025-07-10T10:00:00.000Z",
  "status": "Annulée"
}
```

### 5. Supprimer une réservation
- **DELETE** `/api/reservations/{id}`
- **Réponse :**
```json
{
  "message": "Réservation supprimée avec succès"
}
```

---

## Schéma Réservation
```json
{
  "id": "number",
  "clientId": "number",
  "equipmentId": "number",
  "date": "string (ISO 8601)",
  "status": "string"
}
```

## Remarques
- Les champs exacts dépendent de votre modèle Prisma.
- Adapter les exemples selon vos besoins réels.

