import Table from "react-bootstrap/Table";

function CentreList({ centers }) {
  return (
    <Table striped bordered hover variant="dark">
      <tbody>
        {centers.map((center) => (
          <tr key={center.center_id}>
            <td>
              <div>{center.name}</div>
              <div>
                {center.block_name}, {center.district_name}
              </div>
            </td>
            {center.sessions.map((session) => {
              return (
                session.min_age_limit === 18 &&
                session.vaccine === "COVAXIN" && (
                  <td
                    style={{
                      color:
                        session.available_capacity_dose2 > 0 ? "green" : "red",
                    }}
                  >
                    <div>Date: {session.date}</div>
                    <div>
                      Availability Dose 2: {session.available_capacity_dose2}
                    </div>
                    <div>Age Limit: {session.min_age_limit}</div>
                    <div>Vaccine: {session.vaccine}</div>
                  </td>
                )
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CentreList;
