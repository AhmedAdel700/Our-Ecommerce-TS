import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
};

type HasID = { id?: number };

//render props pattern
export default function GridList<T extends HasID>({ records, renderItem }: GridListProps<T>) {
  const categoriesList = records.map((record) => {
    return (
      <Col
        key={record.id}
        xs={6}
        md={3}
        className="d-flex justify-content-center mb-5 mt-3"
      >
        {renderItem(record)}
      </Col>
    );
  });

  return <Row>{categoriesList}</Row>;
}
