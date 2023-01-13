Project structure
-----------------------------------------
> the idea of this repo is to show how you can structure files by using folders
> in additional you can take a look at [style guide standards](https://github.com/airbnb/javascript/tree/master/react)
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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
