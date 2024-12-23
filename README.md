git add .
git commit -m "update"
git push

npx ng g c contactform --skip-tests --standalone
npx ng g s users --skip-tests
npx ng g s taskupdatedialog --skip-tests
npx ng g environments


npx ng add @angular/material
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init