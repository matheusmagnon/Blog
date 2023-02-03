import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer, SearchFormHeader } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
// import { OrdersContext } from '../../context/OrdersContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  // const { fetchOrders } = useContext(OrdersContext)
  const [fetchOrders, setFetchOrders] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    // setFetchOrders([data.query]);
    console.log(data);
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <SearchFormHeader>
        <h2>Projetos Front-end</h2>
        <span>6 projetos</span>
      </SearchFormHeader>

      <input
        type={"text"}
        placeholder="Buscar conteúdo"
        {...register("query")}
      />

      {/* <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar pedidos
      </button> */}
    </SearchFormContainer>
  );
}
