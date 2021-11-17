import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { Search } from "./Search";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      align="center"
      paddingX="6"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        ></IconButton>
      )}
      <Logo />

      {isWideVersion && <Search />}

      <Flex
        align="center"
        marginLeft="auto"
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}