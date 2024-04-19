# Arbetserfarenheter Webbtjänst
## Av Anne-Lii Hansen

Denna webbtjänst hanterar arbetserfarenheter med hjälp av en MongoDB-databas.

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
  "describtion": "Analys och kvalitetssäkring av råvaror...",
  "startdate": "2011-01-17",
  "enddate": "2025-06-17"
}
