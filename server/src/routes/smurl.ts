import { Router } from "express";
import { createSmurl, redirectSmurl } from "../controllers/shortUrl.js";
import * as validator from "../validators.js";

const router = Router();

router.route('/').post(
    validator.createSmurlValidator, 
    createSmurl
);

router.route('/:address').get(
    validator.redirectSmurlValidator,
    validator.validate,
    redirectSmurl,
);

export default router;
