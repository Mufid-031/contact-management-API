# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header :

- X-API_TOKEN : token

Request Body :

```json
{
  "first_name": "Mufid",
  "last_name": "Risqi",
  "email": "risqi@example.com",
  "phone": "089999999999"
}
```

Ressponse Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Mufid",
    "last_name": "Risqi",
    "email": "risqi@example.com",
    "phone": "089999999999"
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Username must not blank, ..."
}
```

## Get Contact

Endpoint : POST /api/contacts

Request Header :

- X-API_TOKEN : token

Request Body :

```json
{
  "first_name": "Mufid",
  "last_name": "Risqi",
  "email": "risqi@example.com",
  "phone": "089999999999"
}
```

Ressponse Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Mufid",
    "last_name": "Risqi",
    "email": "risqi@example.com",
    "phone": "089999999999"
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Contact is not found, ..."
}
```

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header :

- X-API_TOKEN : token

Request Body :

```json
{
  "first_name": "Mufid",
  "last_name": "Risqi",
  "email": "risqi@example.com",
  "phone": "089999999999"
}
```

Ressponse Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Mufid",
    "last_name": "Risqi",
    "email": "risqi@example.com",
    "phone": "089999999999"
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Username must not blank, ..."
}
```

## Remove Contact

Endpoint : DELETE /api/contacts/:id

Request Header :

- X-API_TOKEN : token

Ressponse Body (Succes) :

```json
{
  "data": "OK"
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Contact is not found, ..."
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameter :

- name : string, contact first name or last name, opsional
- phone : string, contact phone, opsional
- email : string, contact email, opsional
- page : number, default 1
- size : number, default 10

Request Header :

- X-API_TOKEN : token

Ressponse Body (Succes) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Mufid",
      "last_name": "Risqi",
      "email": "risqi@example.com",
      "phone": "089999999999"
    },
    {
      "id": 2,
      "first_name": "Mufid",
      "last_name": "Risqi",
      "email": "risqi@example.com",
      "phone": "089999999999"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Unauthorized, ..."
}
```
