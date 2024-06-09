import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  const errorStatus = isRouteErrorResponse(error) ? error.status : 404;
  const errorStatusText = isRouteErrorResponse(error) ? error.statusText : "";

    //Both Are Good But The Above Slightly Better

  //   let errorStatusText: string;
  //   let errorStatus: number;

  //   if (isRouteErrorResponse(error)) {
  //     errorStatus = error.status;
  //     errorStatusText = error.statusText;
  //   } else {
  //     errorStatus = 404;
  //     errorStatusText = "";
  //   }

  return (
    <Container className="text-center mt-5 p-5">
      <h1 className="mt-5">{errorStatus}</h1>
      <h3>
        {errorStatus === 404
          ? "The Page You Are Looking For Is Not Found!"
          : errorStatusText}
      </h3>
      <Link
        to="/"
        replace // replace = replace={true} => After Pressing The Link If I Wanted To Go Back To The Error Page I Can't.
        className="fs-5"
        style={{ textDecoration: "none" }}
      >
        Back To Home Page
      </Link>
    </Container>
  );
}
