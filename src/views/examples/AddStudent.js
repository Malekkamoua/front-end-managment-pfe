import React, { PureComponent, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  Row,
  InputGroupAddon,
  InputGroupText,
  Button,
  Form
} from "reactstrap";

import CustomInput from "components/CustomInput";
import Header from "components/Headers/Header.js";
import { addEtudiant } from "../../services/authService";
const RegisterUser = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msgConfirmPassword, setMsgConfirmPassword] = useState("");
  const { token } = JSON.parse(localStorage.getItem("user"));
  const ajouterEtudiant = async () => {
    if (password !== confirmPassword) {
      console.log("wrong password confirmation ");
      return null;
    }
    const res = await addEtudiant({ nom, prenom, age, email, password }, token);
    // setNom("");
    // setPrenom("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    // setAge("");
    console.log(res);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7">
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Ajouter un étudiant</h3>
              </CardHeader>
              <Col>
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <CustomInput
                        placeholder={"Nom"}
                        value={nom}
                        onChange={e => setNom(e.target.value)}
                      />
                      <CustomInput
                        placeholder={"Prenom"}
                        value={prenom}
                        onChange={e => setPrenom(e.target.value)}
                      />
                      <CustomInput
                        placeholder={"Age"}
                        type="number"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                      />
                      <CustomInput
                        placeholder={"email"}
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <CustomInput
                        placeholder={"password"}
                        type="password"
                        value={password}
                        valid={password === confirmPassword ? true : false}
                        feedback="password must be equal to confirm password"
                        onChange={e => setPassword(e.target.value)}
                      />

                      <CustomInput
                        placeholder={"confirm password"}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                      />

                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={() => {
                            ajouterEtudiant();
                          }}
                        >
                          Ajouter
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default RegisterUser;
