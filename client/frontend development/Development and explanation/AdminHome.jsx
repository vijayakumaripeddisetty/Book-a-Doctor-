  return (
    <Container fluid>
      <Row>

        {/* ================= Sidebar ================= */}

        <Col
          md={3}
          lg={2}
          className="bg-dark text-white min-vh-100 p-3"
        >

          <h3 className="text-center mb-4">
            Admin Panel
          </h3>

          <div className="d-grid gap-3">

            <Button
              variant={
                activeMenuItem === "doctors"
                  ? "primary"
                  : "outline-light"
              }
              onClick={() =>
                setActiveMenuItem("doctors")
              }
            >
              <i className="bi bi-person-badge me-2"></i>
              Doctors
            </Button>

            <Button
              variant={
                activeMenuItem === "appointments"
                  ? "primary"
                  : "outline-light"
              }
              onClick={() =>
                setActiveMenuItem("appointments")
              }
            >
              <i className="bi bi-calendar-check me-2"></i>
              Appointments
            </Button>

            <Button
              variant={
                activeMenuItem === "notifications"
                  ? "primary"
                  : "outline-light"
              }
              onClick={() =>
                setActiveMenuItem("notifications")
              }
            >
              <i className="bi bi-bell me-2"></i>
              Notifications
            </Button>

            <Button
              variant="danger"
              onClick={logout}
            >
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </Button>

          </div>

        </Col>

        {/* ================= Main Content ================= */}

        <Col md={9} lg={10}>

          {/* Header */}

          <Card className="shadow-sm border-0 rounded-0">

            <Card.Body>

              <div className="d-flex justify-content-between align-items-center">

                <div>

                  <h3 className="mb-0">
                    Welcome Admin
                  </h3>

                  <small className="text-muted">
                    {userdata?.fullName}
                  </small>

                </div>

                <div>

                  <Badge
                    count={
                      userdata?.notification?.length || 0
                    }
                  >
                    <Button
                      variant="light"
                      onClick={() =>
                        setActiveMenuItem(
                          "notifications"
                        )
                      }
                    >
                      <i className="bi bi-bell-fill fs-4"></i>
                    </Button>
                  </Badge>

                </div>

              </div>

            </Card.Body>

          </Card>

          {/* Body */}

          <div className="p-4">

            {loading ? (

              <div className="text-center mt-5">
                <Spinner animation="border" />
              </div>

            ) : (
