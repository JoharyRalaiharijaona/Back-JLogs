# Documentation API Client

## Base URL
`/api/clients`

---

## Endpoints

### 1. Récupérer tous les clients
- **GET** `/api/clients`
- **Réponse :**
```json
[
  {
    "id": 1,
    "nom": "Client 1",
    "email": "client1@example.com",
    "fonction": "Directeur",
    "NIF": "123456",
    "STAT": "78910",
    "avatar": "url_avatar"
  }
]
```

### 2. Récupérer un client par ID
- **GET** `/api/clients/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Client 1",
  "email": "client1@example.com",
  "fonction": "Directeur",
  "NIF": "123456",
  "STAT": "78910",
  "avatar": "url_avatar"
}
```

### 3. Créer un client
- **POST** `/api/clients`
- **Body :**
```json
{
  "nom": "Client 1",
  "email": "client1@example.com",
  "fonction": "Directeur",
  "NIF": "123456",
  "STAT": "78910",
  "avatar": "url_avatar"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Client 1",
  "email": "client1@example.com",
  "fonction": "Directeur",
  "NIF": "123456",
  "STAT": "78910",
  "avatar": "url_avatar"
}
```

### 4. Modifier un client
- **PATCH** `/api/clients/{id}`
- **Body :** (tous les champs sont optionnels)
```json
{
  "fonction": "Responsable"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Client 1",
  "email": "client1@example.com",
  "fonction": "Responsable",
  "NIF": "123456",
  "STAT": "78910",
  "avatar": "url_avatar"
}
```

### 5. Supprimer un client
- **DELETE** `/api/clients/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Client 1",
  "email": "client1@example.com",
  "fonction": "Responsable",
  "NIF": "123456",
  "STAT": "78910",
  "avatar": "url_avatar"
}
```

---

## Schéma Client
```json
{
  "id": "number",
  "nom": "string",
  "email": "string",
  "fonction": "string",
  "NIF": "string",
  "STAT": "string",
  "avatar": "string"
}
```

## Remarques
- Les champs exacts dépendent de votre modèle Prisma.
- Adapter les exemples selon vos besoins réels.
