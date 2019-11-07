import {Request, Response} from 'express'

export const HTTP_SUCCESS = 200
export const HTTP_IM_A_TEAPOT = 418
// const EMAIL_NAME_EXTRACT = `(.*)@pluralsight.com`

export class RequestHandler {
  private req: Request
  private res: Response

  public constructor({req, res}:{req:Request, res:Response}) {
    this.req = req
    this.res = res
    this.res.header(`Access-Control-Allow-Origin`,  `*`)
    // Allowed by Google Chrome Extension to get the response
  }


  public run = async (): Promise<void> => {
    try {
      // Allow testing from the Google test function which looks for req.body.message
      // In the normal case we just use the query.payloadString is defined we will use that
      let validateParam = this.req.body.message
      if (this.req.query.payloadString !== undefined) {
        // Note my typical GCE call will set up a payloadMsg like this
        //  const payloadMsg = `payloadString=${JSON.stringify(payload)}`
        // and then call to this GCF like this (where nameOfGcfFunction for example would be transactionProcessor)
        // `https://${endPoint}/nameOfGcfFunction?${payloadMsg}`
        validateParam = this.req.query.payloadString
      }
      console.log(validateParam) // Just make this starter kit compile
      // Do any validation of the payload


      // Do any processing and setup an object and set up a variable with any return payload
      const returnPayload = {message:`This is your GCF Function responding.`}
      this.sendResponse(returnPayload)
    } catch (error) {
      // Set up any error return payload and send it
      console.error(`RequestHandler ERROR:${error.message}`)
      const returnPayload = {
      }
      this.sendResponse(returnPayload)
    }
  }


  /**
 * Send a response back to the Chrome Extension when we're all done
 * You would give returnPayload an interface reflecting what you need to send back
 * Example:  {success:boolean, messages:string[]}
 */
  private sendResponse = (returnPayload: object): void => {
    this.res.status(HTTP_SUCCESS).send(JSON.stringify(returnPayload))
  }
}