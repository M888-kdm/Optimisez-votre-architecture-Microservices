#!/bin/bash

kubectl delete services --all
kubectl delete deployments --all
kubectl delete pods --all

cd Kubernetes

kubectl apply -f config-server-deployment.yaml
kubectl apply -f config-server-service.yaml

sleep 30

kubectl apply -f services.yaml
kubectl apply -f deployments.yaml