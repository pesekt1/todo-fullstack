#!/bin/bash

# Apply all Kubernetes configurations from the directory
kubectl apply -f kubernetes/

# Function to wait for a pod to be ready
wait_for_pod() {
  local label=$1
  echo "Waiting for pod with label $label to be ready..."
  kubectl wait --for=condition=ready pod -l $label --timeout=120s
}

# Wait for the mongo-service pod to be ready
wait_for_pod "io.kompose.service=mongo"

# Port forward for mongo-service
kubectl port-forward svc/mongo-service 27018:27017 &
MONGO_PORT_FORWARD_PID=$!
echo "Port forwarding for mongo-service set up on port 27018."

# Wait for the todo-app pod to be ready
wait_for_pod "io.kompose.service=todo-app"

# Port forward for todo-app
kubectl port-forward svc/todo-app 3000:3000 &
TODO_APP_PORT_FORWARD_PID=$!
echo "Port forwarding for todo-app set up on port 3000."

# Wait for the todo-api pod to be ready
wait_for_pod "io.kompose.service=todo-api"

# Port forward for todo-api
kubectl port-forward svc/todo-api 8080:80 &
TODO_API_PORT_FORWARD_PID=$!
echo "Port forwarding for todo-api set up on port 8080."

# Keep script running until user terminates
echo "Port forwarding set up. Press Ctrl+C to terminate."
wait

# To terminate all the deployments:
# kubectl delete -f kubernetes/