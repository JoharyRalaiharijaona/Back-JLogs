# Documentation API Utilisateur (User)

## Base URL
`/api/users`

---

## Endpoints

### 1. Récupérer tous les utilisateurs
- **GET** `/api/users`
- **Réponse :**
```json
[
  {
    "id": 1,
    "nom": "Jean Dupont",
    "email": "jean@example.com",
    "role": "utilisateur",
    "avatar": "url_avatar",
    "creeLe": "2025-07-12T10:00:00.000Z"
  }
]
```

### 2. Récupérer un utilisateur par ID
- **GET** `/api/users/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "role": "utilisateur",
  "avatar": "url_avatar",
  "creeLe": "2025-07-12T10:00:00.000Z"
}
```

### 3. Inscription d'un utilisateur
- **POST** `/api/users/register`
- **Body :**
```json
{
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "motDePasse": "motdepasse",
  "avatar": "url_avatar"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "role": "utilisateur",
  "avatar": "url_avatar",
  "creeLe": "2025-07-12T10:00:00.000Z"
}
```

### 4. Connexion d'un utilisateur
- **POST** `/api/users/login`
- **Body :**
```json
{
  "email": "jean@example.com",
  "motDePasse": "motdepasse"
}
```
- **Réponse :**
```json
{
  "token": "jwt_token",
  "user": {
    "id": 1,
    "nom": "Jean Dupont",
    "email": "jean@example.com",
    "role": "utilisateur"
  }
}
```

### 5. Mettre à jour un utilisateur
- **PATCH** `/api/users/{id}`
- **Body :**
```json
{
  "nom": "Nouveau Nom",
  "email": "nouveau@email.com",
  "motDePasse": "nouveaumotdepasse",
  "avatar": "nouvel_url_avatar"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Nouveau Nom",
  "email": "nouveau@email.com",
  "role": "utilisateur",
  "avatar": "nouvel_url_avatar",
  "creeLe": "2025-07-12T10:00:00.000Z"
}
```

### 6. Supprimer un utilisateur
- **DELETE** `/api/users/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "role": "utilisateur",
  "avatar": "url_avatar",
  "creeLe": "2025-07-12T10:00:00.000Z"
}
```

---

## Schéma Utilisateur
```json
{
  "id": "number",
  "nom": "string",
  "email": "string",
  "role": "string",
  "avatar": "string",
  "creeLe": "string"
}
```

## Remarques
- Les champs exacts dépendent de votre modèle Prisma.
- Adapter les exemples selon vos besoins réels.
