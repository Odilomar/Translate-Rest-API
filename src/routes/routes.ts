import { Router, Request, Response } from "express";

import TranslateService from "../services/TranslateService";

const router = Router();

async function translate(request: Request, response: Response) {
    const { textToTranslate } = request.body;
    const modelId: string = request.path.replace('/', '');

    const translateEnPtService: TranslateService = new TranslateService();

    const translatedText = await translateEnPtService.execute(textToTranslate, modelId);

    return response.json(translatedText);
}

router.post('/en-pt', translate);

// router.get('/pt-en', );

export default router;