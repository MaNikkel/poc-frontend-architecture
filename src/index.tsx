import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from "miragejs"

createServer({
    models: {
        beer: Model
    },

    seeds(server) {
        server.db.loadData({
            beers: [
                {
                    id: "ec9ad0a3-aba2-45db-b21e-f540547e9c40",
                    name: "Brahma"
                }
            ]
        })
    },

    routes() {
        this.urlPrefix = 'http://localhost:3333'
        this.namespace = "api"

        this.get("/beers", () => {
            return this.schema.all('beer')
        })

        this.post("/beers", (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('beer', data)
        })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

