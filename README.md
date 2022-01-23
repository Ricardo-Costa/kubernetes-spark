# Kubernetes Spark

This repository use **Kind** as kuernates, to run on local.

Install `Kind`:

```bash
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.11.1/kind-linux-amd64
chmod +x ./kind
mv ./kind /some-dir-in-your-PATH/kind
```

Install `kubectl` the Kubernetes command-line tool:

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
```
```bash
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```
```bash
chmod +x kubectl
mkdir -p ~/.local/bin/kubectl
mv ./kubectl ~/.local/bin/kubectl
```

## Main Cluster

Create cluster:
```bash
kind create cluster --name=kubernetes-spark
```
Show nodes created:
```bash
kubectl get nodes
```

## Docker Image

Build main app image and push to Dockerhub:
```bash
docker build -t <image-name:latest> . &&\
docker login &&\
docker image push <image-name:latest> .
```

## Deployments

Deploy with the new image from Dockerhub:
```bash
kubectl apply -f k8s/deployment.yml
```
Show Deployments:
```bash
kubectl get deployments
```
Delete Deployment:
```bash
kubectl delete deployment <deployment-name>
```

## Pods

Show pods:
```bash
kubectl get pods
```

Run in pods:
```bash
kubectl exec --stdin --tty <pod-name> -- /bin/sh
# OR kubectl exec -ti <pod-name> -- sh
```

Show delete pod:
```bash
kubctl delete app-node-85c8d7b5ff-96k8k
```

Show logs from specific pod:
```bash
kubctl logs app-node-85c8d7b5ff-96k8k
```

Delete specific pod:
```bash
kubectl delete pod app-node-85c8d7b5ff-96k8k
```

## Services

Create service:
```bash
kubectl apply -f k8s/service.yml
```
Show services:
```bash
kubectl get services
```

Bind de ports from service:
```bash
kubectl port-forward service/app-node-service 3000:3000
```

Test Service:
```bash
curl http://localhost:3000
# response {"status":200,"message":"Hello World!!"}
```

## Versions

Make rollout of version:

```bash
kubectl rollout undo deployment app-node
```

References:
- https://kind.sigs.k8s.io
- https://kubernetes.io/docs/tasks/tools/install-kubectl-linux
- https://docs.docker.com/language/nodejs/build-images
- https://k8slens.dev