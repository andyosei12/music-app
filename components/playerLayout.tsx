import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="50px">
        <Box height="calc(100vh - 50px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0">
        <h1>player</h1>
      </Box>
    </Box>
  );
};

export default PlayerLayout;
