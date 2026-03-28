# GlassQA Landing Page

A minimal, Apple-grade landing page for **GlassQA** — the browser extension that records UI interactions and generates production-ready Playwright test scripts.

Live at: [glassqa.app](https://glassqa.app)

---

## Stack

- Semantic HTML5
- Vanilla CSS (glassmorphism, responsive)
- Vanilla JS (scroll animations, interaction feedback)
- GitHub Pages hosting with custom domain

---

## Local Development

Open `index.html` directly in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

---

## Deployment (GitHub Pages)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/glassqa-landing.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to **Settings → Pages** in your GitHub repo.
2. Under **Source**, select **Deploy from a branch**.
3. Choose `main` branch and `/ (root)` folder.
4. Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/glassqa-landing/` within a few minutes.

### 3. Connect Custom Domain

1. In your domain registrar (Cloudflare, Namecheap, etc.), add DNS records:

   **For apex domain (`glassqa.app`):**
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```

   **For `www` subdomain (optional):**
   ```
   CNAME   www   YOUR_USERNAME.github.io
   ```

2. In GitHub repo → **Settings → Pages → Custom domain**, enter `glassqa.app` and save.
3. Check **Enforce HTTPS** once the certificate is provisioned.

The `CNAME` file in this repo tells GitHub Pages which custom domain to serve.

---

## License

MIT — Built by [Vincent Galeano](https://vincentgaleano.com)
