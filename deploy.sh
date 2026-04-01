#!/usr/bin/env bash
# deploy.sh — Deploy Mezen website to Hetzner via SSH
#
# Usage:
#   SSH_HOST=<server-ip> SSH_USER=root ./deploy.sh
#
# Required env vars:
#   SSH_HOST          — Hetzner server IP or hostname
#   SSH_USER          — SSH user (default: root)
#   SSH_KEY_PATH      — Path to SSH private key (default: ~/.ssh/id_rsa)
#
# Optional env vars (passed to server):
#   RESEND_API_KEY
#   CONTACT_EMAIL_TO
#   CONTACT_EMAIL_FROM
#   NEXT_PUBLIC_SITE_URL

set -euo pipefail

SSH_HOST="${SSH_HOST:?SSH_HOST is required}"
SSH_USER="${SSH_USER:-root}"
SSH_KEY_PATH="${SSH_KEY_PATH:-$HOME/.ssh/id_rsa}"
DEPLOY_DIR="${DEPLOY_DIR:-/opt/mezen-website}"

SSH="ssh -i $SSH_KEY_PATH -o StrictHostKeyChecking=accept-new $SSH_USER@$SSH_HOST"

echo "▶ Deploying Mezen website to $SSH_USER@$SSH_HOST:$DEPLOY_DIR"

# 1. Ensure deploy directory exists on server
$SSH "mkdir -p $DEPLOY_DIR"

# 2. Sync source files (excluding node_modules, .next)
echo "▶ Syncing files..."
rsync -az --delete \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.git' \
  -e "ssh -i $SSH_KEY_PATH -o StrictHostKeyChecking=accept-new" \
  . "$SSH_USER@$SSH_HOST:$DEPLOY_DIR/"

# 3. Write .env file on server
echo "▶ Writing environment variables..."
$SSH "cat > $DEPLOY_DIR/.env" <<EOF
NODE_ENV=production
RESEND_API_KEY=${RESEND_API_KEY:-}
CONTACT_EMAIL_TO=${CONTACT_EMAIL_TO:-hello@mezen.co}
CONTACT_EMAIL_FROM=${CONTACT_EMAIL_FROM:-no-reply@mezen.co}
NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL:-https://mezen.co}
EOF

# 4. Build and start with Docker Compose on the server
echo "▶ Building and starting container..."
$SSH "cd $DEPLOY_DIR && docker compose pull 2>/dev/null || true && docker compose up -d --build"

# 5. Health check
echo "▶ Checking health..."
sleep 5
$SSH "docker compose -f $DEPLOY_DIR/docker-compose.yml ps"

echo "✓ Deployed. Site running at http://$SSH_HOST:3000"
echo "  (configure nginx reverse proxy for HTTPS + mezen.co domain)"
