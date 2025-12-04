import {Box, useColorModeValue} from "@chakra-ui/react"
import { Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import Navbar from "./components/navbar.jsx"
// import Footer from "./components/footer.jsx"

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")} py={4} mb={8} borderRadius={"md"} >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />

      </Routes>
    </Box>
  )
}

export default App
