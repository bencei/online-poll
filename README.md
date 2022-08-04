# Online Poll Application

### Component addresses

| Service                         | Port  | Description                                                                    |
|---------------------------------|-------|--------------------------------------------------------------------------------|
| poll-data-service               | 3000  | Manage and save Poll documents into MongoDB. It subscribes vote topic on Redis |
| vote-service                    | 3001  | Receive and publish votes over Redis pub/sub                                   |
| online-poll-fronted             | 4200  | Frontend application for online polling                                        |
| online-poll-api-gateway         | 8765  | Spring Cloud Gateway                                                           |
| poll-data-service mongo         | 27017 | MongoDB for poll-data-service                                                  |
| poll-data-service mongo-express | 8081  | Express MongoDB explorer for poll-data-service                                 |