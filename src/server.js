//TODO: [√] Define `feedPost` Model
//TODO: [√] Initialize `feedPost` seeds
//TODO: [√] Get `feedPosts` from `<About>` 

import {
    createServer,
    Model,
} from 'miragejs'

// eslint-disable-next-line import/no-anonymous-default-export
export default function server(){
    createServer({
        models:{
            feedPost: Model,
        },
        seeds(server){
            server.create("feedPost", { 
                userId: 1, 
                body: "This is the first feed post",
            });
            server.create("feedPost", {
                userId: 2,
                body: "This is feed post #2"
            })
        },
        routes(){
            this.namespace = "/api";
            this.timing = 400;
            this.get('/feedPosts', (schema) => schema.feedPosts.all())
        },
    })
}
