import { Router, Response, Request } from "express";

import LanguageTranslatorV3 from "ibm-watson/language-translator/v3";
import { IamAuthenticator } from "ibm-watson/auth";

const router = Router();

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

router.get('/en-pt', translate);

// router.get('/pt-en', );

export default router;