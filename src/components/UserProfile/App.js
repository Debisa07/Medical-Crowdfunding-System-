import SimpleBar from 'simplebar-react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './helpers'
import Cover from './Cover'
import Main from './Main'
import './styles/index.css'

export default function App() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <ChakraProvider theme={theme}>
              <Cover />
              <Main />
      </ChakraProvider>
    </SimpleBar>
  )
}
