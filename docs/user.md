# User API Spec

## Register User

Enpoint: POST /api/users

Request Body:

```json
{
  "username": "mufid",
  "password": "rahasia",
  "name": "Mufid Risqi"
}
```

Ressponse Body (Succes):

```json
{
  "data": {
    "username": "mufid",
    "name": "Mufid Risqi"
  }
}
```

Ressponse Body (Failed)

```json
{
  "errors": "Username must not blank, ..."
}
```

## Login User

Enpoint: POST /api/users/login

Request Body:

```json
{
  "username": "mufid",
  "password": "rahasia",
  "name": "Mufid Risqi"
}
```

Ressponse Body (Succes):

```json
{
  "data": {
    "username": "mufid",
    "name": "Mufid Risqi",
    "token": "uuid"
  }
}
```

Ressponse Body (Failed)

```json
{
  "errors": "Username or password wrong, ..."
}
```

## Get User

Enpoint: GET /api/current

Request Header:

- X-API-TOKEN: token

Ressponse Body (Succes):

```json
{
  "data": {
    "username": "mufid",
    "name": "Mufid Risqi"
  }
}
```

Ressponse Body (Failed)

```json
{
  "errors": "Unauthorized, ..."
}
```

## Update User

Enpoint: PATCH /api/users/current

Request Header:

- X-API_TOKEN: token

Request Body:

```json
{
  "password": "rahasia", // tidak wajib
  "name": "Mufid Risqi" // tidak wajib
}
```

Ressponse Body (Succes):

```json
{
  "data": {
    "username": "mufid",
    "name": "Mufid Risqi"
  }
}
```

Ressponse Body (Failed)

```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout User

Enpoint: PATCH /api/users/current

Request Header:

- X-API_TOKEN: token

Ressponse Body (Succes):

```json
{
  "data": "OK"
}
```

Ressponse Body (Failed)

```json
{
  "errors": "Unauthorized, ..."
}
```
