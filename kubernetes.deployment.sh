#!/bin/bash

# Apply all Kubernetes configurations from the directory
kubectl apply -f kubernetes/

# Port forward for mongo-service
kubectl port-forward svc/mongo-service 27018:27017 &
echo "Port forwarding for mongo-service set up on port 27018."

# Port forward for todo-app
kubectl port-forward svc/todo-app 3000:3000 &
echo "Port forwarding for todo-app set up on port 3000."

# Port forward for todo-api
kubectl port-forward svc/todo-api 8080:80 &
echo "Port forwarding for todo-api set up on port 8080."

# Keep script running until user terminates
echo "Port forwarding set up. Press Ctrl+C to terminate."
wait

#To terminate all the deployments:
#kubectl delete -f kubernetes/