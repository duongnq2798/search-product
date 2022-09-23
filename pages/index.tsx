import type { NextPage } from "next";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { products } from "../config/data/productData";
import { discountCalculate, searchByTitle } from "../config/utils";

const search = (query: string) => {
  const getData = searchByTitle(products, query);
  return getData;
};

const Home: NextPage = () => {
  const [content, setContent] = useState("");
  const [productData, setProductData] = useState<any>(products);

  const updateQuery = () => {
    const searchData = search(content);
    setProductData(searchData);
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [content]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setProductData(products);
    }
    setContent(e.target.value);
  };

  useEffect(() => {
    if (products.length > 0) {
      // console.log("products", products);
      setProductData(products);
    }

    if (content.length > 0) {
      delayedQuery();
      return delayedQuery.cancel;
    }
  }, [content, delayedQuery, products]);

  return (
    <>
      <div className="container">
        <div className="cover-box">
          <div className="text-field">
            <input
              placeholder="Tìm kiếm sản phẩm (ví dụ: áo khoác nữ, nón nam,...)"
              type={"search"}
              onChange={onChange}
              value={content}
            />
          </div>
          <p className="search-result-title">
            Kết quả tìm kiếm{" "}
            {content && content.length > 0
              ? " : " + productData.length + " sản phẩm "
              : null}
          </p>
          <div className="result-list">
            {productData && productData.length > 0 ? (
              productData.map((item: any) => {
                return (
                  <div className="card" key={item.id}>
                    {item.variants[0].price == 0 || item.variants[0].inventory_quantity <= 0 && (
                      <div className="card-place-image">
                        <p className="card-place-image_content">Hết hàng</p>
                      </div>
                    )}

                    <img className="card-image" src={item.image.src}></img>
                    <div className="card-body">
                      <span className="card-title">
                        {item.title}
                        <span className="discount">
                          giảm {" "} 
                          {discountCalculate(
                            item.variants[0].price,
                            item.variants[0].compare_at_price
                          )}{" "}
                          %
                        </span>
                      </span>
                      <div className="card-price">
                        {item.variants[0].compare_at_price} <b>còn</b>{" "}
                        {item.variants[0].price}
                      </div>
                      <p>
                        Còn {" "}
                        {item.variants[0].inventory_quantity > 0
                          ? item.variants[0].inventory_quantity
                          : 0}{" "}
                        sản phẩm
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Không tìm thấy sản phẩm nào trong cửa hàng</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
