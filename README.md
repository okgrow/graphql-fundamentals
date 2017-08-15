# OK GROW! Training

> If your computer is already set up, look at the `README` of the `/api` & `/ui` folders to get started!

## Computer Setup

Have a look at the software requirements and please install the missing ones.

### Versioning

We’ll use [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to complete exercises.

### Code editor

We recommend [Atom](https://atom.io/) with the following packages installed:

* linter
* linter-eslint
* language-babel
* autocomplete-modules
* prettier

If you prefer to use another editor, please check for corresponding packages.

### Node.js

You’ll need Node.js installed. We recommend the use of [NVM](https://nvm.sh). You can also install it from the [official website](https://nodejs.org). We’ll use Node 8 (LTS).

Though Node comes with a package manager called npm, we’ll use [Yarn](https://yarnpkg.com), a modern deterministic packager (we’ll cover its benefits).

## Prerequisite knowledge

We will explore all of this thoroughly during the course, but if you are not comfortable with the following concepts, these links are worth a look.

### Must have - JavaScript basics

We won’t cover basic JS syntax. You should know at least how to write a function. If you don’t, please take this free course on [Codecademy](https://www.codecademy.com).

### Nice to have - ES2015+

Recent tools are making good use of the newest features in ES2015 and even ES2016 and ES2017. The newest JavaScript is a joy to use. If you haven't tried these, I hope you'll enjoy getting to know the new JS: http://es6-features.org/

Used in this class

* modules with import/export
* const and let
* arrow functions (also related: Function.bind(), which we'll see in React)
* destructuring, rest and spread operators
* template literals (everywhere, but a special use in GraphQL)
* async/await - APIs and Apollo
* Array.concat()

### Nice to have - React culture

We will be using [React](https://facebook.github.io/react/) to render client components.

One nice thing about React is that it is close to base JS, so you should be able to follow even if you are new to it. Nevertheless, some understanding of it will be highly useful. We will implement the GraphQL integration with higher-order components. We recommend that you read this post to understand the concept of container components, and then this post to understand generating container components using higher-order components.

If you want to go a little deeper and understand our perspective on higher-order-components, read [our blog post on the subject](https://www.okgrow.com/posts/compose-react-sphoc) and look at the [recompose](https://github.com/acdlite/recompose) library.

### Nice to have - GraphQL culture

Some background on GraphQL: “[So what’s this GraphQL thing I keep hearing about?](https://medium.freecodecamp.com/so-whats-this-graphql-thing-i-keep-hearing-about-baf4d36c20cf)”

We will be using Apollo for client and server GraphQL operations. You can get a head start by reviewing the documentation, but we will cover everything you need to know during the class.

## Questions before the course starts

Depending on your current level, you can expect to spend up to several hours on this material. It's worth it, and you will get much more from the class. If anything here is confusing or you want to clarify a fine point, please get in touch. We are happy to answer your questions, before, during, and after the class.

Ping us on Twitter:

* Robert Dickert - [@rdickert](https://twitter.com/rdickert)
* Paul Dowman - [@pauldowman](https://twitter.com/pauldowman)

Or email us at [training@okgrow.com](mailto:training@okgrow.com)

## Code Quality

We strive to use best practices in this repo, but we prioritize the learning experience where necessary.

This usually just means a simplified file structure, but this app lacks some safety and security features, so please use your judgment when reusing this code.

If you have any questions or concerns about specific code, please ask us; we love to talk about code quality.
