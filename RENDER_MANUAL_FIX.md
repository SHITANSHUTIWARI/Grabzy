# Render Manual Fix - IMPORTANT!

## The Problem
Render is NOT reading the updated `render.yaml` file. You must manually update the build command in the Render dashboard.

## Fix Steps (Do This Now!)

### 1. Go to Render Dashboard
- Open: https://dashboard.render.com
- Select your backend service: **blinket-backend**

### 2. Update Build Command
- Scroll to **"Build Command"**
- Click the **Edit** button (pencil icon)
- Replace the current command with:
```
npm ci && npx prisma generate --schema=prisma/schema.prisma
```
- Click **Save Changes**

### 3. Clear Cache and Redeploy
- Click **"Manual Deploy"** button
- Select **"Clear build cache & deploy"**
- Click **Deploy**

## Why This Happens
Render doesn't always sync changes from `render.yaml` automatically. Manual updates in the dashboard override the YAML file.

## Verify It's Working
After deployment, check the logs. You should see:
```
✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client
```

## Alternative: Delete and Recreate Service
If manual update doesn't work:
1. Delete the backend service in Render
2. Create a new service from the GitHub repo
3. It will read the render.yaml correctly

But try the manual update first - it's faster!
