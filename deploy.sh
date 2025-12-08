#!/bin/bash

echo "🚀 Déploiement MomoMindset en cours..."

# Build the project
echo "📦 Construction du projet..."
pnpm build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "❌ La construction a échoué"
  exit 1
fi

echo "✅ Construction réussie"

# Push to GitHub
echo "📤 Poussée vers GitHub..."
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || true
git push origin main

echo "✅ Poussée réussie"
echo ""
echo "🎉 Déploiement terminé!"
echo "📍 Dépôt: https://github.com/moudby62/momomindset-website"
echo ""
echo "Pour déployer en ligne:"
echo "1. Vercel: https://vercel.com/import/git"
echo "2. Netlify: https://app.netlify.com/start"
echo "3. GitHub Pages: Activer dans les paramètres du dépôt"
