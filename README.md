# WETUBE

---

*Log in and shoot a shorts to upload your video and watch videos from others.*

Demo Link ⇒ [https://wetube-moonshadow.herokuapp.com/](https://wetube-moonshadow.herokuapp.com/)

## 🔗 Index

1. [Purpose of this project]()
2. [Tech Stack]()
3. [Over View]()
4. [About Project]()
5. [Issue]()
6. [Things to Improvement]()

## 1. Purpose of this project

---

- Make application with Node.js
- Understanding SSR(Server Side Rendering)
- How to upload and save files in DB
- How to make account(password hashing, user login)
- How to use pug in sexy way

## 2. Tech Stack

---

[https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

[https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

![https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

[https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454](https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454)

![https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

![https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

---

## 3. Over View

---

![Apple-iMac-Pro.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iMac-Pro.png)

![Apple-iMac-Pro_5.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iMac-Pro_5.png)

![Apple-iMac-Pro_2.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iMac-Pro_2.png)

![Apple-iMac-Pro_4.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iMac-Pro_4.png)

![Apple-iMac-Pro_3.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iMac-Pro_3.png)

![Apple-iPad.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iPad.png)

![Apple-iPhone-12-Pro-Graphite.png](WETUBE%202a0f8a0299364937a78a94b51e497a81/Apple-iPhone-12-Pro-Graphite.png)

## 4. About Project

---

![wetube-overview.gif](WETUBE%202a0f8a0299364937a78a94b51e497a81/wetube-overview.gif)

`- Make an account to log in, or log in with github account.`

`- Record short(3s) video and upload.`

`- Watch videos uploaded by users.`

`- Create/delete comments.`

`- Editing profile. (upload)`

## 5. 💥 Issue

---

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

- handleloadedmetadata event가 동작하지 않음 ⇒ window가 load되면 실행하도록 바꿈

## 6. 🚀 Things to Improvement

---

- [ ]  Like👍&Dislike👎 Function

[Wetube](https://www.notion.so/Wetube-bf6ca480904f4594ab2aefd78bd9167d)
