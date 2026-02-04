import { useState } from "react";
import Button from "../../ui/Button.jsx";
import Form from "../../ui/Form.jsx";
import Input from "../../ui/Input.jsx";
import FormRowVertical from "../../ui/FormRowVertical.jsx";
import { useLogin } from "../../hooks/useLogin.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

function LoginForm() {
  const [email, setEmail] = useState("userName@example.com");
  const [password, setPassword] = useState("pass1234");

  const [isLoading, login] = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button $size="large" $variation="primary" style={{ width: "100%" }}>
          {isLoading ? <SpinnerMini /> : "Log in"}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
