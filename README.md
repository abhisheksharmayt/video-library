Project structure
-----------------------------------------

```
├── node_modules (.gitignore)
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   │   ├── App.js
│   │   │   └── Bucket.js
│   │   │   └── Card.js
│   │   │   └── CreateForm.js
│   │   │   └── EditCategoryModal.js
│   │   │   └── EditVideoModal.js
│   │   │   └── History.js
│   │   │   └── VideoModal.js
│   ├── features(redux stuff)
│   │   ├── Form
│   │   │   ├── categorySlice.js
│   │   │   ├── newVideoSlice.js
│   │   │   └── updateCategorySlice.js
│   │   ├── Modal
│   │   │   ├── editCategoryModalSlice.js
│   │   │   ├── editVideoModalSlice.js
│   │   │   └── videoModalSlice.js
│   │   ├── Video
│   │   │   └── videoSlice.js
│   │   └── index.js
│   ├── index.css
│   ├── index.js
│   ├── testData.js
│   ├── store.js
│   ├── App.test.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
└── tailwind.config.js
```
## Screenshots

`![Main Page](https://unsplash.com/photos/VBPzRgd7gfc)`

## Setup
- download or clone the repository
- run `npm install`
- to start run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


