# Introduction
A `Video Management` web app, I have used `ReactJS` for frontend, `Redux` for state management and `TailwindCSS` for styling. I have worked on enabling all C.R.U.D. features on frontend side.

# Project structure
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
## Setup
- download or clone the repository
- run `npm install`
- to start run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Screenshots

![Main Page](https://i.imgur.com/kilwVkh.jpg)
![Video Modal](https://i.imgur.com/jQjBP2a.jpg)
![Update Modal](https://i.imgur.com/8uTsDP9.jpg)

## Additonal Packages used

- `react-redux, @reduxjs/toolkit` for state management
- `react-beautiful-dnd` for drag-n-drop functionality
- `react-icons` form icons

