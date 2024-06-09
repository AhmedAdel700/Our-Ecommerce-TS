import { useAppDispatch, useAppSelector } from "@store/hook";
import { actGetCategories } from "@store/categories/act/actGetCategories";
import { GridList } from "@components/common";
import Category from "@components/ecommerce/Category/Category";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { Loading } from "@components/feedback";

export default function Categories() {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      // this prevent the fetching for the categories each time we visit the page and this is bec. categories dont change often
      // records for the first time [] length === 0
      // then after getting the data it have length now
      // so we need to check if the length is 0 or not
      // if it is 0 then we need to fetch the data
      // if it is not 0 then we don't need to fetch the data
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
}
