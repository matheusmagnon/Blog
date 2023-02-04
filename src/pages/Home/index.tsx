import { CardRepository } from "../../components/CardRepository";
import { Header } from "../../components/Header";
import { Posts } from "../../components/Post";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <Summary />
        <SearchForm />
        <Posts />
      </HomeContainer>
    </div>
  );
}
