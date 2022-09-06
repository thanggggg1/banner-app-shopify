# NextJs Boilerplate - Frontend
## Getting Started
First, run the development server:
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

