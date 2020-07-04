# :rocket: Translate Rest API
  This API is focused to translate text from English to Portuguese and from Portuguese to English using [IBM Language Translator API](https://cloud.ibm.com/apidocs/language-translator).
  It is created using Typescript, NodeJs, ExpressJs and IBM Watson.

## :pushpin: Required

  To setup this project for development, you need to install [NodeJs](https://nodejs.org/en/).

  ```
  node v12.14.1
  ```

## :package: Instalation

  After downloading NodeJs and cloning this project, you need to install all dependences.
  You can do it in two ways: Using **NPM** or **Yarn** packages.

  Bash example using NPM:
  ```
  npm install
  ```

  Bash example using Yarn:
  ```
  yarn
  ```

## :art: Run

  To run this project execute the follow command:
  ```
  npm run dev:server
  ```

  or

  ```
  yarn dev:server
  ```

## :sparkles: Routes

  This API has two routes: ``/en-pt`` and ``/pt-en``.

  They are a **POST** Method, receive a JSON file with an object called "textToTranslate" and return a JSON file that contains "status", "statusText", "text".

## :wrench: Example

  Code example with Javascript using Axios to retrive data from API:
  ```js
  const axios = require("axios");
  const url = "http://localhost:3333";
  const textToTranslate = "source";

  axios.post(`${url}/en-pt`, { textToTranslate }).then((response) => {
      console.log(response.data);
  });
  ```

  API response:
  ```
  { status: 200, statusText: 'OK', text: 'fonte' }
  Done in 2.43s.
  ```

## :globe_with_meridians: HTTP Status Response
  * **200**: This means that the text was translated and retrived as expected;
  * **400**: This means that the response body is invalid;

## :memo: License

This project is under MIT license. See [LICENSE](LICENSE) for more details.
