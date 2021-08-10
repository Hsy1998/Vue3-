rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Hsy1998/Zeus-UI.git
git push -f -u origin master &&
cd -
echo https://hsy1998.github.io/Zeus-UI/index.html