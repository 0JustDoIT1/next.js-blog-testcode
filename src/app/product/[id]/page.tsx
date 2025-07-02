// interface IProductPage {
//   params: { id: string };
// }

// const ProductPage = async ({ params }: IProductPage) => {
//   const { id } = await params;

//   return (
//     <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-white text-black dark:bg-black dark:text-white">
//       <p className="text-xl">
//         Dynamic Routes ID : <span className="text-green-600">{id}</span>
//       </p>
//     </div>
//   );
// };

// export default ProductPage;

"use client";

import { useParams } from "next/navigation";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 bg-white text-black dark:bg-black dark:text-white">
      <p className="text-xl">
        Dynamic Routes ID : <span className="text-green-600">{id}</span>
      </p>
    </div>
  );
};

export default ProductPage;
