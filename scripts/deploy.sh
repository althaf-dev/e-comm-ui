#!/bin/bash
set -e

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REGION=ap-south-1
REPO_NAME=ui-app
IMAGE="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPO_NAME:latest"

echo "Logging into ECR..."
aws ecr get-login-password --region $REGION \
  | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

echo "Pull latest image..."
docker pull $IMAGE

echo "Stop old container..."
docker stop ui-app || true
docker rm ui-app || true

echo "Start new container..."
docker run -d --restart always -p 80:3001 --name ui-app $IMAGE

echo "Done."
