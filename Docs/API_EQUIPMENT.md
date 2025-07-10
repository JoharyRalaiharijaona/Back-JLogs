# Documentation API Équipement (Equipment)

## Base URL
`/api/equipment`

---

## Endpoints

### 1. Récupérer tous les équipements
- **GET** `/api/equipment`
- **Réponse :**
```json
[
  {
    "id": 1,
    "name": "Ordinateur portable",
    "type": "Informatique",
    "status": "Disponible"
  }
]
```

### 2. Récupérer un équipement par ID
- **GET** `/api/equipment/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "name": "Ordinateur portable",
  "type": "Informatique",
  "status": "Disponible"
}
```

### 3. Créer un équipement
- **POST** `/api/equipment`
- **Body :**
```json
{
  "name": "Ordinateur portable",
  "type": "Informatique",
  "status": "Disponible"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "name": "Ordinateur portable",
  "type": "Informatique",
  "status": "Disponible"
}
```

### 4. Modifier un équipement
- **PATCH** `/api/equipment/{id}`
- **Body :**
```json
{
  "status": "Indisponible"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "name": "Ordinateur portable",
  "type": "Informatique",
  "status": "Indisponible"
}
```

### 5. Supprimer un équipement
- **DELETE** `/api/equipment/{id}`
- **Réponse :**
```json
{
  "message": "Équipement supprimé avec succès"
}
```

---

## Schéma Équipement
```json
{
  "id": "number",
  "name": "string",
  "type": "string",
  "status": "string"
}
```

## Remarques
- Les champs exacts dépendent de votre modèle Prisma.
- Adapter les exemples selon vos besoins réels.

