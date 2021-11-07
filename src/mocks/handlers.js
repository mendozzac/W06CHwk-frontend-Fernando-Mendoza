import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, async (req, res, ctx) => {
    const resp = res(
      ctx.json([
        {
          features: { speed: 5, stamina: 8 },
          _id: "61855f5b4f616ae40e5cc843",
          name: "Fredy",
          image:
            "https://w7.pngwing.com/pngs/296/534/png-transparent-robot-cute-robot-blue-electronics-humanoid-robot-thumbnail.png",
        },
        {
          features: { speed: 7, stamina: 9 },
          _id: "6186de54c92c86a424e36e7e",
          name: "Artie",
          image: "https://www.eurekakids.net/g/2271125/robot-artie-3000.jpg",
        },
      ])
    );
    return resp;
  }),
];
