<br />
<p align="center">
  <a href="https://github.com/leandrodcs/repo-provas-front">
    <img src="./src/assets/repoprovas.gif" alt="gif" width="auto" height="auto">
  </a>

  <h3 align="center">Repo Provas</h3>

  <p align="center">
    Helping you with that important upcoming exam!
    <br />
    <a href="https://github.com/leandrodcs/repo-provas-front"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://repo-provas-front-chi.vercel.app/">View Demo</a>
    <br />
  </p>
</p>

## Technologies

The following tools and frameworks were used in the construction of the project:
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/react-icons%20-%2320232a.svg?&style=for-the-badge&color=f28dc7&logo=react-icons&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white'>
</p>

## About

This API was made to help students study for upcoming tests. In it, you can contribute by adding an old exam you have from a specific teacher of a specific subject making it public to others. In addition to sending tests, one can also look for them in our database, searching by teacher or subject.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

1. Create a root project folder named repoprovas for semantics
```sh
mkdir repoprovas
```
2. Clone the front-end repo (within the /repoprovas folder)
```sh
git clone https://github.com/leandrodcs/repo-provas-front.git
```
3. Install NPM packages for the front-end repo
```sh
npm install
```
4. Clone the back-end repo (within the /repoprovas folder)
```sh
git clone https://github.com/leandrodcs/repo-provas-back.git
```
5. Install NPM packages for the back-end repo
```sh
npm install
```
6. Create a database using the command below
```sh
CREATE DATABASE repoprovas
```
7. Inside the created database, create tables using the dump included in the back-end repo <a href="https://github.com/leandrodcs/repo-provas-back/blob/main/dump.sql">here</a>.

8. Connect to the created database using the .env.example included in the back-end repo <a href="https://github.com/leandrodcs/repo-provas-back/blob/main/.env.example">here</a>, to make it easy, name your .env file like so ".env.dev".

### Running

1. On the back-end repo run the server connected to the database you just created using the following command.
```sh
npm run dev
```
2. Now on the fron-end repo use the same command you just used on step 8 and you should be good.

## Usage

Visitors can `get` or `post` exams at will. The website is self-explanatory, so if you're having any doubts about the usage, you can check out the gif in the beginning of this file to see it in action.

<!-- Developer -->
## Developer

* [Leandro D. C. Schmidt ](https://github.com/leandrodcs)