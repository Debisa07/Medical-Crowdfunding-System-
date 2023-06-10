import { useRef, useState } from 'react'
import {
  Badge,
  Box,
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

export default function Cover() {
  const [coverImage, setCoverImage] = useState(null)
  const inputRef = useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const openChooseFile = () => {
    inputRef.current.click()
  }

  return (
    <Box h={60} overflow="hidden">
      <Image
        w="full"
        h="full"
        objectFit="cover"
        src={coverImage ? coverImage : '/img/UserProf/BG.png'}
        alt="Cover"
      />
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Something went wrong</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>File not supported!</Text>
            <HStack mt={1}>
              <Text color="brand.cadet" fontSize="sm">
                Supported types:
              </Text>
              <Badge colorScheme="green">PNG</Badge>
              <Badge colorScheme="green">JPG</Badge>
              <Badge colorScheme="green">JPEG</Badge>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
