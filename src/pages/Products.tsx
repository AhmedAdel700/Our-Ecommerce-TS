import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actGetProducts } from "@store/products/act/actGetProduct";
import { useAppDispatch, useAppSelector } from "@store/hook";
import Product from "@components/ecommerce/Product/Product";
import { cleanUp } from "@store/products/productsSlice";
import { Container } from "react-bootstrap";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

export default function Products() {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
}
