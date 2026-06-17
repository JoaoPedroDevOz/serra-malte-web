import { AuthProvider } from "./Context/AuthContext";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <AuthProvider>
      <LandingPage />
    </AuthProvider>
  );
}

export default App;
