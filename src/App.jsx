import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { QuizProvider } from './context/QuizContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import SubtopicSelection from './pages/SubtopicSelection';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Learning from './pages/Learning';
import Stats from './pages/Stats';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QuizProvider>
          <Router>
            <div className="min-h-screen">
              <Navbar />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/category/:category" element={<ProtectedRoute><SubtopicSelection /></ProtectedRoute>} />
                <Route path="/quiz/:category/:subtopic" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
                <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
                <Route path="/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
                <Route path="/stats" element={<ProtectedRoute><Stats /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </Router>
        </QuizProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
