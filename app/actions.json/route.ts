import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";
export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      {
        pathPattern: "/donate",
        apiPath: "/api/actions/transfer-sol",
      },
    ],
  };
  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};
export const OPTIONS = GET;