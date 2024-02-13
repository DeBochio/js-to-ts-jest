Alunos A.P.I. was created for the inserting and searching of students; it consists of two methods: GET and POST.

Method GET is responsible for searching the students in the database.

Methodo POST is responsible for inserting students into the database.

Both GET and POST use the same path.

http://localhost:8080/aluno

Our entire A.P.I. is created using typeScript and tested using Jest to ensure all the functionalities.

If you would like to test the code by yourself, you would have to install Jest and separate.

Jest documentation: https://jestjs.io/docs/getting-started;

Supertest documentation: https://www.npmjs.com/package/supertest;

how the code is in TS, you will have to add the following block of code in yout package.json:

  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
