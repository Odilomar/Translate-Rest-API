import express, { Response, Request } from "express";

import LanguageTranslatorV3 from "ibm-watson/language-translator/v3";
import { IamAuthenticator } from "ibm-watson/auth";

const app = express();

const apiKey = process.env.LANGUAGE_TRANSLATOR_APIKEY ? process.env.LANGUAGE_TRANSLATOR_APIKEY : '';
const url = process.env.LANGUAGE_TRANSLATOR_URL;

const languageTranslator = new LanguageTranslatorV3({
    version: "2018-05-01",
    authenticator: new IamAuthenticator({
        apikey: apiKey,
    }),
    url: url,
});

const translateParams = {
    text: ["source"],
    modelId: "en-pt",
};

async function translate(request: Request, response: Response) {
    const translatedText = await languageTranslator
        .translate(translateParams)
        .then((translationResult) => {
            return translationResult.result;
        });

    return response.json(translatedText);
}

app.get('/', translate);

app.listen(3333, () => {
    console.log('MS Translate started! 🙌');
});