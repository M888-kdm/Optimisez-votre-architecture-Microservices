#!/bin/bash
cd Kubernetes

kubectl apply -f config-server-deployment.yaml
kubectl apply -f config-server-service.yaml

sleep 25

kubectl apply -f deployments.yaml
kubectl apply -f services.yaml

kubectl apply -f ingress-controller.yaml

