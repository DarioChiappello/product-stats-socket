# Product stats websocket
## Dario Chiappello

Example of an API in NestJs and React frontent. the frontend shows a product list and the details are connected through a websocket to show the data in realtime. If the currentPrice is changed, the backend will communicate to the frontend the current data

### Example data

```
{
    "_id" : ObjectId("6671da96fc13ae3b832344f0"),
    "name" : "BLU Samba Mini",
    "currentPrice" : 510.2,
    "priceHistory" : [ 
        {
            "date" : ISODate("2024-06-18T21:46:26.607Z"),
            "price" : 500.25,
            "_id" : ObjectId("667200322971dd0e063dd2e5")
        }, 
        {
            "date" : ISODate("2024-06-18T22:11:20.078Z"),
            "price" : 520.25,
            "_id" : ObjectId("667206082971dd0e063dd3fb")
        }, 
        {
            "date" : ISODate("2024-06-18T22:51:53.716Z"),
            "price" : 500.25,
            "_id" : ObjectId("66720f892971dd0e063dd5ae")
        }, 
        {
            "date" : ISODate("2024-06-18T22:55:33.939Z"),
            "price" : 480.25,
            "_id" : ObjectId("667210652971dd0e063dd5e5")
        }, 
        {
            "date" : ISODate("2024-06-18T23:02:31.354Z"),
            "price" : 500.25,
            "_id" : ObjectId("667212072971dd0e063dd666")
        }, 
        {
            "date" : ISODate("2024-06-19T20:08:36.184Z"),
            "price" : 520.25,
            "_id" : ObjectId("66733ac4c9a2a4ffedead8d4")
        }, 
        {
            "date" : ISODate("2024-06-19T20:39:17.154Z"),
            "price" : 522.25,
            "_id" : ObjectId("667341f5c9a2a4ffedeadb0f")
        }, 
        {
            "date" : ISODate("2024-06-21T20:48:19.343Z"),
            "price" : 600.2,
            "_id" : ObjectId("6675e713b2d34e551b45d0ab")
        }, 
        {
            "date" : ISODate("2024-06-21T21:13:27.061Z"),
            "price" : 510.2,
            "_id" : ObjectId("6675ecf7b2d34e551b45d25e")
        }
    ],
    "image" : "https://s7ap1.scene7.com/is/image/bigw/W2534%20-%20T_L%20Tech%20_%20Audio%20Hybrid%20Lister%20CTs_Oppo?$cms-max-image-threshold$&fmt=png-alpha&wid=352&fit=hfit%2C1",
    "stars" : 5.0
}
```

### Update value

Endpoint
PUT
http://{host}:{port}/products/:id

Body
newPrice: number
Example
{
    newPrice: 12.50
}

### Run proyect

backend
```bash
cd backend
npm run start:dev

```

frontend
```bash
cd frontend
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
