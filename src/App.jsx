

import Navbar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <>
        <AuthProvider>
            <Navbar />

            <main className="pt-18">
                <AppRoutes />
            </main>
        </AuthProvider>
        </>
    );
};

export default App;

