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
    "name": "Client 1",
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
  "name": "Client 1",
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
  "name": "Client 1",
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
  "name": "Client 1",
  "email": "client1@example.com",
  "fonction": "Directeur",
  "NIF": "123456",
  "STAT": "78910",
  "avatar": "url_avatar"
}
```

### 4. Modifier un client
- **PATCH** `/api/clients/{id}`
- **Body :**
```json
{
  "name": "Client 1 modifié"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "name": "Client 1 modifié",
  "email": "client1@example.com",
  "fonction": "Directeur",
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
  "message": "Client supprimé avec succès"
}
```

---

## Schéma Client
```json
{
  "id": "number",
  "name": "string",
  "email": "string",
  "fonction": "string",
  "NIF": "string",
  "STAT": "string",
  "avatar": "string"
}
```

## Remarques
- Tous les champs sont obligatoires lors de la création.
- Les champs peuvent être partiellement modifiés avec PATCH.

