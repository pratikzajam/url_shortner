import {Router} from "express";
import {createShortUrl,geturl} from '../controller/urlController.js';

const router=Router()


router.route("").post(createShortUrl)
router.route("/:urlid").get(geturl)

export default router