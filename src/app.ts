import {Request, Response} from 'express' // Note express not needed just @types/express
import {RequestHandler} from './RequestHandler'

// NOTE A Google Cloud Function has a name. The name you specify for your GCF must match the name
// of this function. 
export const mySampleGcfFunction = async (req: Request, res: Response): Promise<void> => {
  // if you use a service locator, this is the place to call something like app.configure()
  const requestHandler = new RequestHandler({req, res})
  requestHandler.run()
}
