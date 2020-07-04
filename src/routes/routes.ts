import { Router, Request, Response } from "express";

import TranslateService from "../services/TranslateService";
import TranslatedText from "../interface/TranslatedInterface";

const router = Router();

async function translate(request: Request, response: Response) {
    const { textToTranslate } = request.body;
    const modelId: string = request.path.replace('/', '');

    if (!textToTranslate) {
        const errorTranslation: TranslatedText = { status: 400, statusText: 'Invalid request. See the response body for details!', text: ''};

        return response.json(errorTranslation);
    }

    const translateEnPtService: TranslateService = new TranslateService();
    const translatedText = await translateEnPtService.execute(textToTranslate, modelId);

    return response.json(translatedText);
}

router.post('/en-pt', translate);

router.post('/pt-en', translate);

export default router;