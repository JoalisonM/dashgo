import { Icon, HStack } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      marginX={["6", "8"]}
      paddingRight={["6", "8"]}
      paddingY="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon cursor="pointer" as={RiNotificationLine} />
      <Icon cursor="pointer" as={RiUserAddLine} />
    </HStack>
  );
}