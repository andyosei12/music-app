import { LinkBox, LinkOverlay, ListIcon, ListItem } from "@chakra-ui/layout";
import Link from "next/link";
import { IconType } from "react-icons/lib";

type MenuItemProps = {
  menuItem: { name: string; route: string; icon: IconType };
};

const MenuItem = ({ menuItem }: MenuItemProps) => {
  return (
    <ListItem paddingX="20px" fontSize="16px" key={menuItem.name}>
      <LinkBox>
        <Link href={menuItem.route} passHref>
          <LinkOverlay>
            <ListIcon as={menuItem.icon} color="white" marginRight="20px" />
            {menuItem.name}
          </LinkOverlay>
        </Link>
      </LinkBox>
    </ListItem>
  );
};

export default MenuItem;
