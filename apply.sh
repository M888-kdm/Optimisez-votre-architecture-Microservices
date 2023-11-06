#!/bin/bash
cd Kubernetes

kubectl apply -f config-server-deployment.yaml
kubectl apply -f config-server-service.yaml

kubectl apply -f waiter-job.yaml

kubectl apply -f deployments.yaml
kubectl apply -f services.yaml

kubectl apply -f ingress-controller.yaml

# kubectl apply -f mproduits-deployment.yaml
# kubectl apply -f mproduits-service.yaml

# kubectl apply -f mcommandes-deployment.yaml
# kubectl apply -f mcommandes-service.yaml

# kubectl apply -f mpaiement-deployment.yaml
# kubectl apply -f mpaiement-service.yaml

