# Address API Spec

## Create Address

Endpoint : POST /api/:idContact/addresses

Request Header :

- X-API-TOKEN

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "province": "provinsi apa",
  "country": "negara apa",
  "postal_code": "23423"
}
```

Ressponse Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "province": "provinsi apa",
    "country": "negara apa",
    "postal_code": "23423"
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Street or some must not blank, ..."
}
```

## GET Address

Endpoint : GET /api/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN

Ressponse Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "province": "provinsi apa",
    "country": "negara apa",
    "postal_code": "23423"
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Address is not found, ..."
}
```

## Update Address

Endpoint : PUT /api/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN

Request Body :

```json
{
  "street": "jalan apa",
  "city": "kota apa",
  "province": "provinsi apa",
  "country": "negara apa",
  "postal_code": "23423"
}
```

Ressponse Body (Succes) :

```json
{
  "data": {
    "id": 1,
    "street": "jalan apa",
    "city": "kota apa",
    "province": "provinsi apa",
    "country": "negara apa",
    "postal_code": "23423"
  }
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "postal_code is required, ..."
}
```

## Remove Address

Endpoint : DELETE /api/:idContact/addresses:idAddress

Request Header :

- X-API-TOKEN

Ressponse Body (Succes) :

```json
{
  "data": "Ok"
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Address is not found, ..."
}
```

## List Address

Endpoint : GET /api/:idContact/addresses

Request Header :

- X-API-TOKEN

Ressponse Body (Succes) :

```json
{
  "data": [
    {
      "id": 1,
      "street": "jalan apa",
      "city": "kota apa",
      "province": "provinsi apa",
      "country": "negara apa",
      "postal_code": "23423"
    },
    {
      "id": 2,
      "street": "jalan apa",
      "city": "kota apa",
      "province": "provinsi apa",
      "country": "negara apa",
      "postal_code": "23423"
    }
  ]
}
```

Ressponse Body (Failed) :

```json
{
  "errors": "Contact is not found, ..."
}
```
