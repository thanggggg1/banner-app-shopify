# NextJs Boilerplate - Frontend
## Getting Started

To clone and use Project, learn how to use SSH keys.

Tips : How to generate SSH key :
https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-configure-GitLab-SSH-keys-for-secure-Git-connections#:~:text=Log%20into%20GitLab%20and%20navigate,repo%20you%20wish%20to%20clone

```sh
git init
git remote add origin git@gitlab.com:sortecom-app/frame-frontend.git
git fetch
git pull origin dev
```

Then, run the development server:
We highly recommend use yarn 
```sh
yarn
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.
If you want to create more pages, create file in folder pages. For example if i create file SettingPage.tsx in pages/Setting/SettingPage.tsx. I can access it through localhost:3000/Setting/SettingPage

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.ts.

The pages/api directory is mapped to /api/*. Files in this directory are treated as API routes instead of React pages.
Use Axios to call and post API.

Images and icons put in public folder. Import it in public/index.tsx



