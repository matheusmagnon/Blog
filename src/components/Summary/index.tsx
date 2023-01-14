import { useContext } from "react";
import { IssuesContext } from "../../context/IssuesContext";
import {
  AboutProfile,
  BaseText,
  SummaryContainer,
  SummaryContent,
} from "./styles";

import GithubIcon from "../../assets/Github.svg";
import PeopleIcon from "../../assets/People.svg";
import BuildIcon from "../../assets/Build.svg";
import { defaultTheme } from "../../styles/themes/default";

export function Summary() {
  const { profile } = useContext(IssuesContext);
  console.log("🚀 ~ file: index.tsx:7 ~ Summary ~ profile", profile);
  // console.log(profile);

  return (
    <SummaryContainer>
      <SummaryContent>
        <img src={profile?.avatar_url} />
        <div>
          <h1>{profile?.name}</h1>
          <BaseText>{profile?.bio}</BaseText>
          <AboutProfile>
            <img src={GithubIcon} />
            <BaseText> {profile?.login}</BaseText>
            <img src={BuildIcon} />
            <BaseText>{profile?.company}</BaseText>
            <img src={PeopleIcon} />
            <BaseText>{profile?.followers} seguidores</BaseText>
          </AboutProfile>
        </div>
      </SummaryContent>
    </SummaryContainer>
  );
}
