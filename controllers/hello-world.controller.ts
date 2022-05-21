import { Request, Response } from "express";
import { sayHello } from "../services";
import { getErrorMessage } from "../utils";

export const getHelloWorld = async (_: Request, res: Response) => {
  try {
    // get message from hello service
    const message = await sayHello();

    // send message in JSON response
    res.status(200).json({ message });
  } catch (error) {
    console.error(getErrorMessage(error));
    res.sendStatus(500);
  }
};
