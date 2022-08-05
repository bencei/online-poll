# Online Poll Application

### Component addresses

| Service                         | Port  | Protocol | Description                                                                    |
|---------------------------------|-------|----------|--------------------------------------------------------------------------------|
| poll-data-service               | 3000  | HTTP     | Manage and save Poll documents into MongoDB. It subscribes vote topic on Redis |
| poll-data-service socket io     | 3003  | WS       | Fetch poll and update it when new vote received                                |
| vote-service                    | 3001  | TCP      | Receive and publish votes over Redis pub/sub                                   |
| online-poll-fronted             | 4200  | HTTP     | Frontend application for online polling                                        |
| online-poll-api-gateway         | 8765  | HTTP     | Spring Cloud Gateway                                                           |
| poll-data-service mongo         | 27017 | TCP      | MongoDB for poll-data-service                                                  |
| poll-data-service mongo-express | 8081  | TCP      | Express MongoDB explorer for poll-data-service                                 |
| redis                           | 6379  | TCP      | PubSub Integration point                                                       |