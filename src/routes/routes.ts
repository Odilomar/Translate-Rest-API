import { Router } from "express";
import TranslateEnPtService from "../services/TranslateEnPtService";
const router = Router();

router.post('/en-pt', async (request, response) => {
    const { textToTranslate } = request.body;

    const translateEnPtService: TranslateEnPtService = new TranslateEnPtService();

    const translatedText = await translateEnPtService.execute(textToTranslate);

    return response.json(translatedText);
});

// router.get('/pt-en', );

export default router;