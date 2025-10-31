# Deployment Guide

## EC2 Production Deployment

### Prerequisites
1. **HTTPS is REQUIRED** - Production mode uses secure cookies that only work over HTTPS
2. Set up SSL certificate (Let's Encrypt, AWS Certificate Manager, etc.)
3. Configure reverse proxy (nginx/Apache) with SSL termination

### Environment Variables

Set these on your EC2 instance:

```bash
export NODE_ENV=production
export DATABASE_URL=postgresql://...
export JWT_SECRET=your-secure-secret-key
export COOKIE_SECRET=your-secure-cookie-secret
export STORE_CORS=http://your-storefront-domain.com
export ADMIN_CORS=http://your-admin-domain.com
export AUTH_CORS=http://your-auth-domain.com
```

### Build & Start

```bash
# Build the application
yarn build

# Start in production mode (NODE_ENV=production)
yarn start
```

### Using PM2 (Recommended)

```bash
# Install PM2
npm install -g pm2

# Start with PM2
NODE_ENV=production pm2 start yarn --name "medusa-backend" -- start

# Save PM2 config
pm2 save

# Setup PM2 startup
pm2 startup
```

### Nginx Configuration Example

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:9000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Local Testing After Build

For local testing of the production build on HTTP localhost:

```bash
# Build
yarn build

# Start in development mode (allows HTTP cookies)
yarn start:dev
```

**Note:** `yarn start:dev` sets `NODE_ENV=development` which disables secure cookies. Only use this for local testing, never in production!

## Security Checklist

- [ ] HTTPS enabled with valid SSL certificate
- [ ] `NODE_ENV=production` set
- [ ] Strong `JWT_SECRET` and `COOKIE_SECRET` set
- [ ] CORS properly configured
- [ ] Database credentials secured
- [ ] Firewall rules configured (only open necessary ports)
- [ ] Process manager configured (PM2/systemd)
- [ ] Logs properly configured

