import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="ubaid-wani"
        blockSize={30}
        blockMargin={10}
        color="#0FA3B1"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
