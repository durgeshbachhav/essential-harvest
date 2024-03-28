import Layout from "@/components/Layout/Layout";
import { useParams } from "react-router-dom";

const ProductDetail = ({ data }) => {
  const { id } = useParams();
  const product = data?.find((product) => product.id === id);
  console.log(product);
  if (!product) return <div>Product not found</div>;
  return (
    <Layout>
      {product && (
        <div className="py-8">
          <div className=" mx-auto  rounded-lg  overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Product Image"
                    className="w-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">{}</h2>
                  <p className="text-lg mb-4">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-lg font-bold mr-2">
                      {product.price}
                    </span>
                    <span className="text-lg">$99.99</span>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;
