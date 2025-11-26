# GTM-360 Website - Git Deployment Setup

## Step 1: Configure Git (Run these commands in Git Bash)

```bash
git config --global user.name "Sameer Joshy"
git config --global user.email "sameer@gtm-360.com"
```

## Step 2: Initialize Repository

```bash
cd /d/Apps/gemini-sales-team/gtm-360-website
git init
git add .
git commit -m "Initial commit: GTM-360 website with AI Tools and Resources pages"
```

## Step 3: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `gtm-360-website`
3. Description: "GTM-360 Revenue OS Website"
4. Keep it **Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

## Step 4: Push to GitHub

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/sameerjoshy/gtm-360-website.git
git branch -M main
git push -u origin main
```

**You'll be prompted for authentication:**
- Username: `sameerjoshy`
- Password: Use a **Personal Access Token** (not your GitHub password)

### Create Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token (classic)"**
3. Name: "GTM-360 Deployment"
4. Expiration: 90 days (or No expiration)
5. Check: `repo` (full control)
6. Click **"Generate token"**
7. **COPY THE TOKEN** - you'll use this as your password!

## Step 5: Connect Cloudflare Pages to GitHub

1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/
2. **Workers & Pages** → **Create Application** → **Pages**
3. Click **"Connect to Git"**
4. Click **"Connect GitHub"**
5. Authorize Cloudflare
6. Select repository: `gtm-360-website`
7. Configure build settings:
   - **Production branch:** `main`
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
8. Click **"Save and Deploy"**

## Step 6: Add Custom Domain

1. In your Cloudflare Pages project → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter: `www.gtm-360.com`
4. Cloudflare will automatically configure DNS
5. Wait 2-5 minutes for deployment

## ✅ Done!

Your website is now live with automated deployments!

---

## Future Updates (Simple 3-Command Workflow)

Whenever you make changes to your website:

```bash
# 1. Stage all changes
git add .

# 2. Commit with a message
git commit -m "Updated homepage hero section"

# 3. Push to GitHub (auto-deploys to Cloudflare)
git push
```

That's it! Cloudflare will automatically deploy your changes in 1-2 minutes.

---

## Troubleshooting

**If git push asks for password:**
- Use your Personal Access Token (not GitHub password)
- Get token from: https://github.com/settings/tokens

**If you get "permission denied":**
- Make sure you're using the correct GitHub username
- Verify your Personal Access Token has `repo` permissions

**If website doesn't update:**
- Check Cloudflare Pages dashboard for deployment status
- Hard refresh browser: Ctrl + Shift + R
