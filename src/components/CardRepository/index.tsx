import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CardContainer, CardContente, CardHeader, CardText } from "./styles";

type Fetch = {
  id: number;
  title: string;
  created_at: Date;
  body: string;
};

export function CardRepository() {
  const [fetchRepositorys, setFetchRepositorys] = useState<Fetch[]>();

  const fetchProfile = async () => {
    const idRepository = 1;
    const response = await api.get(
      `/repos/matheusmagnon/projetos-portifolio/issues/${idRepository}`
    );

    setFetchRepositorys(response.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(fetchRepositorys);

  return (
    <CardContainer>
      <CardContente>
        <CardText>
          {/* {fetch?.body} */}
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in...
        </CardText>
      </CardContente>
    </CardContainer>
  );
}
