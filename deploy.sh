#!/usr/bin/env sh

# abort on errors
set -e

git add .
git commit -m 'publish:新增 docker'
git push -f origin main

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git branch -M main
git remote add origin git@github.com:fuyi501/fuyi501.github.io.git
git push -f origin main
# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:fuyi501/fuyi501.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -