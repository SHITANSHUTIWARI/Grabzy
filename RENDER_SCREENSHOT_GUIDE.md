# Render Dashboard Fix - Step by Step

## Current Error
```
Error: Could not find Prisma Schema
```

## Root Cause
The Render dashboard has an **OLD** build command that doesn't match your `render.yaml` file.

---

## SOLUTION: Update Build Command Manually

### Step 1: Open Render Dashboard
1. Go to: https://dashboard.render.com
2. Click on your **blinket-backend** service

### Step 2: Find Build Command Section
Scroll down until you see a section that looks like this:

```
Build Command
Render runs this command to build your app before each deploy.
[Edit button]
```

### Step 3: Click Edit
Click the **Edit** button (or pencil icon) next to "Build Command"

### Step 4: Update the Command
You'll see a text field. It probably shows:
```
npm install && npx prisma generate
```

**Change it to:**
```
npm ci && npx prisma generate --schema=prisma/schema.prisma
```

### Step 5: Save
Click **"Save Changes"** or the checkmark button

### Step 6: Redeploy
1. Scroll to the top of the page
2. Click **"Manual Deploy"** button (top right)
3. Select **"Clear build cache & deploy"**
4. Click **"Deploy"**

---

## What This Does

The `--schema=prisma/schema.prisma` flag tells Prisma exactly where to find the schema file, since Render sets `rootDir: backend`.

---

## Expected Result

After deployment, you should see in the logs:
```
✔ Generated Prisma Client (v5.22.0) to ./node_modules/@prisma/client in 59ms
```

Then your backend will start successfully! 🎉

---

## If It Still Fails

Check these:
1. **Environment Variables** - Make sure all are set correctly
2. **MongoDB Atlas** - Network access allows 0.0.0.0/0
3. **Render Logs** - Look for other error messages

---

## Quick Test After Deploy

Visit: `https://grabzy-jt4h.onrender.com/api`

Should return:
```json
{"message": "Blinket API is running"}
```
