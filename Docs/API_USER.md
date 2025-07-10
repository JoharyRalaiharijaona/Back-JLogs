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
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

### 2. Récupérer un utilisateur par ID
- **GET** `/api/users/{id}`
- **Réponse :**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### 3. Créer un utilisateur
- **POST** `/api/users/register`
- **Body :**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "motdepasse"
}
```
- **Réponse :**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### 4. Connexion utilisateur
- **POST** `/api/users/login`
- **Body :**
```json
{
  "email": "john@example.com",
  "password": "motdepasse"
}
```
- **Réponse :**
```json
{
  "access_token": "jwt.token.here"
}
```

---

## Schéma Utilisateur
```json
{
  "id": "number",
  "name": "string",
  "email": "string"
}
```

## Remarques
- Le mot de passe n'est jamais retourné dans les réponses.
- L'authentification utilise un token JWT.

