import {
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'

function CampaignDetails() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="campaignID">
        <FormLabel>Campaign ID</FormLabel>
        <InputGroup>
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder="apple"
          />
        </InputGroup>
      </FormControl>
      <FormControl id="campaignName">
        <FormLabel>Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="Apple" />
      </FormControl>
      <FormControl id="emailCompany">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="info@apple.com"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Size</FormLabel>
        <NumberInput>
          <NumberInputField placeholder="6000" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </Grid>
  )
}

export default CampaignDetails
