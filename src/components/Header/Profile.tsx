import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Joalison Matheus</Text>
          <Text color="gray.300" fontSize="small">
            joalisonmatheus0@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Joalison Matheus" src="https://github.com/JoalisonM.png" />
    </Flex>
  );
}