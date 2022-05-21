import express from "express";

import { getHelloWorld } from "../controllers";

export const router = express.Router();

router.get("/helloWorld", getHelloWorld);
