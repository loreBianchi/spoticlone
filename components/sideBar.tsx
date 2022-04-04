import { Box } from "@chakra-ui/layout";
import Image from "next/image";

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="grey"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <Image src="/logo.svg" width={120} height={60} />
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar;
