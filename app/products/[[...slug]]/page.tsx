import React from "react";

interface props {
  params: { slug: string[] };
  searchParams: { sort: string }
}

const ProductPage = ({
  params: { slug },
  searchParams: { sort },
}: props) => {
  return (
    <div>
      ProductPage {sort}
    </div>
  );
};

export default ProductPage;
