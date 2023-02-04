import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CardContainer, CardContente, CardHeader, CardText } from "./styles";

type Fetch = {
  title: string;
  created_at: Date;
  body: string;
};

export function CardRepository() {
  const [fetch, setFetch] = useState<Fetch>();

  const fetchProfile = async () => {
    const response = await api.get(
      "/repos/matheusmagnon/projetos-portifolio/issues/1 "
    );
    // setProfile(() => {

    // });

    setFetch(response.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(fetch);

  return (
    <CardContainer>
      <CardContente>
        <CardHeader>
          <h3>{fetch?.title}</h3>
          <span>{fetch?.created_at}</span>
        </CardHeader>
        <CardText>
          {fetch?.body}
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </CardText>
      </CardContente>
    </CardContainer>
  );
}
