import {ThemeProvider} from "@mui/material";
import Navigation from "./components/Navigation";
import theme from "./layouts/theme";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
            <Navigation/>
        </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
