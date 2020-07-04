import LanguageTranslatorV3 from "ibm-watson/language-translator/v3";
import { IamAuthenticator } from "ibm-watson/auth";

interface TranslatedText {
    status: number;
    statusText: string;
    text: string;
}

class TranslateEnPtService {
    private languageTranslator: LanguageTranslatorV3;

    constructor() {
        const apiKey = process.env.LANGUAGE_TRANSLATOR_APIKEY ? process.env.LANGUAGE_TRANSLATOR_APIKEY : '';
        const serviceUrl  = process.env.LANGUAGE_TRANSLATOR_URL ? process.env.LANGUAGE_TRANSLATOR_URL : '';

        this.languageTranslator = new LanguageTranslatorV3({
            version: "2018-05-01",
            authenticator: new IamAuthenticator({
                apikey: apiKey,
            }),
            serviceUrl,
        });
    }

    public async execute(textToTranslate: string): Promise<TranslatedText> {
        const text = [textToTranslate];

        const translateParams = {
            text,
            modelId: "en-pt",
        };

        const translatedText: TranslatedText = await this.languageTranslator
            .translate(translateParams)
            .then((response) => {
                const { status, statusText } = response;
                const text = response.result.translations[0].translation;

                const translatedResponse: TranslatedText = { status, statusText, text };

                return translatedResponse;
            });

        return translatedText;
    }
}

export default TranslateEnPtService;