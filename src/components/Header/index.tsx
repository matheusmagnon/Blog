import { HeaderContainer } from "./styles";
import CoverHeader from "../../assets/CoverHeader.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoverHeader} />
    </HeaderContainer>
  );
}
