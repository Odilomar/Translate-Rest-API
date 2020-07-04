import { Router } from "express";
import TranslateService from "../services/TranslateService";
const router = Router();

router.post('/en-pt', async (request, response) => {
    const { textToTranslate } = request.body;
    const modelId: string = 'en-pt';

    console.log(request.baseUrl);

    const translateEnPtService: TranslateService = new TranslateService();

    const translatedText = await translateEnPtService.execute(textToTranslate, modelId);

    return response.json(translatedText);
});

// router.get('/pt-en', );

export default router;