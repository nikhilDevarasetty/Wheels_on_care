import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Switch, Route } from "react-router-dom";

const Login = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
};

export default Login;
