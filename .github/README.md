# GitHub Actions CI/CD Setup

This repository uses GitHub Actions for continuous integration and deployment.

## Workflows

### 1. CI Workflow (`.github/workflows/ci.yaml`)

Runs on every push to `main` and pull requests:

- **Code Quality**: Type checking, linting, and formatting
- **Build Test**: Ensures the application builds successfully
- **Docker Build**: Builds and pushes Docker image to Docker Hub (only on main branch)

### 2. Deploy Workflow (`.github/workflows/deploy.yaml`)

Automatically deploys to VPS when CI workflow completes successfully:

- **SSH Deployment**: Connects to VPS and updates the running application
- **Health Checks**: Verifies deployment success
- **Rollback Ready**: Maintains previous containers for quick rollback if needed

## Required GitHub Secrets

Configure the following secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

### Docker Hub

- `DOCKERHUB_TOKEN`: Your Docker Hub access token

### VPS Connection

- `VPS_USER`: SSH username for your VPS
- `VPS_HOST`: IP address or hostname of your VPS
- `VPS_SSH_KEY`: Private SSH key for VPS access (corresponding public key should be in `~/.ssh/authorized_keys` on VPS)
- `VPS_PROJECT_DIR`: Absolute path to your project directory on VPS (e.g., `/home/user/portfolio`)

## VPS Setup Requirements

Your VPS should have:

1. **Docker & Docker Compose** installed
2. **Git** configured with access to this repository
3. **SSH access** configured for the GitHub Actions runner
4. **Project directory** cloned at the path specified in `VPS_PROJECT_DIR`
5. **Environment file** (`.env`) configured with your production settings

## Local Development

For local development and testing:

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Type check
yarn type-check

# Lint code
yarn lint

# Format code
yarn format

# Build for production
yarn build

# Test Docker build locally
docker-compose up --build
```

## Deployment Flow

1. **Push to main** → Triggers CI workflow
2. **CI passes** → Builds and pushes Docker image
3. **Deploy workflow** → Automatically deploys to VPS
4. **Health checks** → Verifies deployment success

## Manual Deployment

If you need to deploy manually:

```bash
# On your VPS
cd /path/to/your/project
git pull origin main
docker-compose down
docker-compose pull
docker-compose up -d
```
