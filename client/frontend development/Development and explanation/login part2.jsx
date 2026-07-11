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
                          Logging In...
                        </>
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <p>
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="text-decoration-none fw-bold"
                      >
                        Register Here
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

export default Login;
