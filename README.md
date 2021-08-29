<img alt="Youtube" src="https://img.shields.io/badge/YouTube Clone%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/>

WETUBE

*Log in and shoot a shorts to upload your video and watch videos from others.*

Demo Link ⇒ [https://wetube-moonshadow.herokuapp.com/](https://wetube-moonshadow.herokuapp.com/)

---

## 🔗 Index

1. [Purpose of this project](#1-purpose-of-this-project)
2. [Tech Stack](#2-tech-stack)
3. [Over View](#3-over-view)
4. [About Project](#4-about-project)
5. [Issue](#5--issue)
6. [Things to Improvement](#6--Things-to-improvement)

## 1. Purpose of this project

- Make application with Node.js
- Understanding SSR(Server Side Rendering)
- How to upload and save files in DB
- How to make account(password hashing, user login)
- How to use pug in sexy way
- How to deploy app using AWS S3 and Heroku, mongoDB

## 2. Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![Pug](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## 3. Over View

<img width="49%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247118-1901fd77-911c-436f-a00e-b4f8f58269b5.png"> <img width="49%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247120-740dfdeb-23e8-4f99-acd0-9474768742e4.png"> <img width="49%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247121-99042915-a93a-43ae-8351-876b26970d80.png"> <img width="49%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247122-2570b2e0-120a-4a0a-b748-59ed532806ae.png"> <img width="49%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247123-273cea09-c167-49a3-b1f5-9e514ec24690.png"> <img width="22%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247124-9910781e-ac1c-44ee-a87c-4c9be0abe117.png"> <img width="17%" alt="over view image" src="https://user-images.githubusercontent.com/73153617/131247125-1c37436c-c163-49a8-96f9-6062bfcc337d.png">

## 4. About Project

![wetube-overview](https://user-images.githubusercontent.com/73153617/131247212-98a44bba-4428-4082-8ec1-58a3c5bcd83e.gif)

    - Make an account to log in, or log in with github account.
    - Record short(3s) video and upload.
    - Watch videos uploaded by users.
    - Create/delete comments.
    - If a user watch a video until the end, that video's view increases.
    - Editing profile. (upload)

## 5. 💥 Issue

- Videos and images were not visible because of the cross-origin resource policy. ⇒ [https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP))

    Add crossorigin attribute to video tags and image tags and add specific values to response headers to resolve them.

    ```html
    <video crossorigin></video>
    ```

    ```jsx
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
    ```

- handleloadedmetadata event inoperative. =>  Changed to run after window loaded because there was only problem with heroku app.

## 6. 🚀 Things to Improvement

- [ ]  Like👍 & Dislike👎 Function!
- etc...
