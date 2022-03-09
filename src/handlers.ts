import {Request, Response} from "express"

export const echoHandler = (req: Request, res: Response) => {
    return res.json({ message: "hello!"})
}
