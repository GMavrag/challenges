import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const productsData = request.body;
      const products = new Product(productsData);
      await products.save();
      response.status(201).json({ status: "Product created" });
      //------------alternate way
      // await Joke.create(request.body);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
