import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { responseBuilder } from "commons";

export const lambdaHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  let response: APIGatewayProxyResult;

  try {
    response = responseBuilder({ message: "hello world" }, 200);
  } catch (err: unknown) {
    console.log(err);
    response = responseBuilder(
      { message: err instanceof Error ? err.message : "some error happened" },
      500,
    );
  }

  return response;
};
