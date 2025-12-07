# Vercel Deployment Guide

## Prerequisites
- Vercel account
- MongoDB Atlas database (already configured)
- GitHub repository connected to Vercel

## Step 1: Configure Environment Variables in Vercel

Go to your Vercel project settings and add these environment variables:

```
DATABASE_URL=mongodb+srv://shitanshutiwari2024_db_user:ymSMgWwn3uHQvMjY@cluster0.eihypps.mongodb.net/blinket
JWT_ACCESS_SECRET=blinket_access_secret_key_2024_change_in_production
JWT_REFRESH_SECRET=blinket_refresh_secret_key_2024_change_in_production
NODE_ENV=production
FRONTEND_URL=https://grabzy-five.vercel.app
```

## Step 2: Deploy

1. Push your code to GitHub:
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push
```

2. Vercel will automatically deploy your changes

## Step 3: Update Frontend API URL

After backend is deployed, update your frontend environment variable in Vercel:

```
REACT_APP_API_URL=https://your-backend-url.vercel.app/api
```

## Important Notes

- The backend is now configured as a serverless function
- Database connections use singleton pattern for serverless
- CORS is configured to accept requests from your frontend URL
- All API routes are prefixed with `/api`

## Troubleshooting

If you still see errors:

1. Check Vercel function logs in the dashboard
2. Verify all environment variables are set correctly
3. Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
4. Check that Prisma client is generated during build

## Alternative: Use Render for Backend

If Vercel serverless functions are causing issues, consider deploying:
- Backend on Render (using render.yaml)
- Frontend on Vercel

This gives you a traditional server for the backend which is more stable for this architecture.
