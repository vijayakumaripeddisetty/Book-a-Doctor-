                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner
                            animation="border"
                            size="sm"
                            className="me-2"
                          />
                          Registering...
                        </>
                      ) : (
                        "Register"
                      )}
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <p>
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-decoration-none fw-bold"
                      >
                        Login Here
                      </Link>
                    </p>
                  </div>

                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
