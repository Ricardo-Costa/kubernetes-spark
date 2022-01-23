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

Create cluster:
```bash
kind create cluster --name=kubernetes-spark
```
Show nodes created:
```bash
kubectl get nodes
```

Build main app image and push to Dockerhub:
```bash
docker build -t <image-name:latest> . \&&
docker login \&&
docker image push <image-name:latest> .
```

Deploy with the new image from Dockerhub:
```bash
kubectl apply -f k8s/deployment.yml
```

Show pods:
```bash
kubectl get pods
```

References:
- https://kind.sigs.k8s.io
- https://kubernetes.io/docs/tasks/tools/install-kubectl-linux
- https://docs.docker.com/language/nodejs/build-images