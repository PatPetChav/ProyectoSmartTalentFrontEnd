import Router from "./router";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router />
      </div>
    </UserProvider>
  )
}

export default App