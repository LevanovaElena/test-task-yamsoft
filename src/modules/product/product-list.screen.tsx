import React, { useState } from "react";
import { ProductComponent } from "./product.component";
import { useGetProductsListQuery } from "../../services/products.api";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { LoadingComponent } from "../common/loading.component";

export const ProductListScreen = (): React.JSX.Element => {
  const [limit, setLimit] = useState(5);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { isLoading, isError, data } = useGetProductsListQuery({
    limit: String(limit),
    sort: "asc",
  });

  const loadMore = () => {
    setLimit((prevState) => {
      if (prevState + 5 > 20) {
        setHasNextPage(false);
        return prevState;
      }
      return prevState + 5;
    });
  };
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasNextPage,
    onLoadMore: loadMore,
    disabled: !!isError,
    rootMargin: "0px 0px 0px 0px",
    delayInMs: 500,
  });

  return (
    <div className="py-20 px-10 lg:px-20 xl:mx-20">
      {isError && "Error..."}
      {!isLoading && !isError && (
        <div className="w-full grid grid-cols-auto sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-4">
          {data &&
            data.length > 0 &&
            data.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
        </div>
      )}
      {hasNextPage && (
        <div className="w-full py-5 " ref={sentryRef}>
          <LoadingComponent />
        </div>
      )}
    </div>
  );
};
