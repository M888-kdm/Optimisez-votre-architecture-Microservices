#!/bin/bash

kubectl delete services --all
kubectl delete deployments --all
kubectl delete pods --all

cd Kubernetes

kubectl apply -f config-server-deployment.yaml
kubectl apply -f config-server-service.yaml

sleep 10

kubectl apply -f deployments.yaml
kubectl apply -f services.yaml

kubectl apply -f ingress-controller.yaml

