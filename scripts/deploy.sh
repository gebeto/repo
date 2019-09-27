rm -rf .git
git init
git remote add origin https://github.com/gebeto/repo
git add -A
git commit -m "update packages"
git push --set-upstream origin master --force
