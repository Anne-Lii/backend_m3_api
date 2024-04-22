# Arbetserfarenheter Webbtjänst
## Av Anne-Lii Hansen

Denna webbtjänst är ett REST API byggt med Express som hanterar arbetserfarenheter. 

## Teknik
**Node.js**
**Express**
**Cors**
**MongoDB (Atlas)**
**Mongoose**
**Render (för publicering)**

## Installation
APIet använder en MongoDB databas som är hostad på Atlas.

`git clone https://github.com/Anne-Lii/backend_m3_api.git`
cd backend_m3_api
`npm install`

för att starta server:
`node server.js` 



## Användning

### GET
- Hämta alla jobbposter: `GET /jobs`
  
### POST
- Skapa en ny jobbpost: `POST /jobs`

### PUT
- Uppdatera en jobbpost: `PUT /jobs/:id`

### DELETE
- Ta bort en jobbpost: `DELETE /jobs/:id`

## Exempel på schema för POST

{
  "companyname": "Natumin Pharma AB",
  "location": "Habo",
  "jobtitle": "Kvalitetskontrollant",
  "description": "Analys och kvalitetssäkring av råvaror...",
  "startdDate": "2011-01-17",
  "endDate": "2025-06-17"
}

## Publicering

Webbtjänsten är publicerad på render.com