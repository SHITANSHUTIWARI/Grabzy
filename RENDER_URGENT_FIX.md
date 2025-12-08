# URGENT: Render Dashboard Manual Update Required

## THE PROBLEM
Render is IGNORING your render.yaml file. The logs show it's still using `npm ci` even though we changed it to `npm install`.

## YOU MUST DO THIS MANUALLY IN DASHBOARD

### Step-by-Step Instructions:

1. **Open Render Dashboard**
   - Go to: https://dashboard.render.com
   - Login if needed

2. **Select Your Backend Service**
   - Click on: **blinket-backend** (or whatever your backend service is named)

3. **Find Build Command**
   - Scroll down the page
   - Look for a section labeled **"Build Command"**
   - It currently shows: `npm ci && npx prisma generate --schema=prisma/schema.prisma`

4. **Click Edit**
   - Click the **Edit** button or pencil icon next to Build Command

5. **Change the Command**
   - Delete the current command
   - Type this EXACTLY:
   ```
   npm install && npx prisma generate --schema=./prisma/schema.prisma
   ```

6. **Save Changes**
   - Click **Save** or the checkmark button

7. **Clear Cache and Redeploy**
   - At the top right, click **"Manual Deploy"**
   - Select **"Clear build cache & deploy"**
   - Click **Deploy**

---

## WHY THIS IS NECESSARY

Once you manually change a setting in Render's dashboard, it OVERRIDES the render.yaml file permanently. The only way to fix it is to manually update it in the dashboard.

---

## WHAT SHOULD HAPPEN

After you update and redeploy, you should see in the logs:

```
==> Running build command 'npm install && npx prisma generate --schema=./prisma/schema.prisma'...
added 101 packages
✔ Generated Prisma Client (v5.22.0)
```

Then your backend will start successfully!

---

## IF YOU CAN'T FIND THE BUILD COMMAND SETTING

Alternative: Delete and recreate the service:
1. Delete the backend service in Render
2. Create a new web service
3. Connect to your GitHub repo
4. It will read the render.yaml correctly on first creation

But try the manual update first - it's faster!
