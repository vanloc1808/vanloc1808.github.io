#!/bin/bash

# Portfolio Website Deployment Script
set -e

# Configuration
IMAGE_NAME="vanloc1808/portfolio"
CONTAINER_NAME="portfolio-frontend"

echo "🚀 Starting portfolio deployment..."

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "❌ .env file not found!"
    echo "Please copy .env.production.example to .env and configure your environment variables."
    exit 1
fi

# Parse command line arguments
BUILD_AND_PUSH=false
LOCAL_ONLY=true

while [[ $# -gt 0 ]]; do
    case $1 in
        --push)
            BUILD_AND_PUSH=true
            LOCAL_ONLY=false
            shift
            ;;
        --local)
            LOCAL_ONLY=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [--push] [--local]"
            echo "  --push   Build and push image to Docker Hub"
            echo "  --local  Deploy locally only (default)"
            exit 0
            ;;
        *)
            echo "Unknown option $1"
            exit 1
            ;;
    esac
done

if [ "$BUILD_AND_PUSH" = true ]; then
    echo "🔨 Building and pushing Docker image..."
    docker build -t $IMAGE_NAME:latest .
    docker push $IMAGE_NAME:latest
    echo "✅ Image pushed to Docker Hub"
else
    echo "🔨 Building Docker image locally..."
    docker-compose build
fi

echo "🔄 Starting the application..."
docker-compose up -d

echo "⏳ Waiting for container to be ready..."
sleep 5

echo "📋 Checking container status..."
docker-compose ps

echo "🔍 Checking container health..."
if docker-compose ps | grep -q "$CONTAINER_NAME.*Up.*healthy"; then
    echo "✅ Container is healthy!"
elif docker-compose ps | grep -q "$CONTAINER_NAME.*Up"; then
    echo "⚠️  Container is running but health check pending..."
else
    echo "❌ Container failed to start properly"
    docker-compose logs $CONTAINER_NAME
    exit 1
fi

echo "✅ Deployment completed!"
if [ "$LOCAL_ONLY" = true ]; then
    echo "🌐 Your portfolio should be accessible at: http://localhost:3000"
else
    echo "🌐 Your portfolio should be accessible at: https://nguyenvanloc.com"
fi
echo "📊 To view logs: docker-compose logs -f portfolio"
echo "🛑 To stop: docker-compose down"