"use client";

import { ListWithCards } from "@/types";
import ListForm from "./list-form";

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

const ListContainer = ({}: ListContainerProps) => {
  return (
    <div>
      <ol className="flex gap-x-3 h-full">
        <ListForm />
        <div className="flex-shrink-0 w-1" />
      </ol>
    </div>
  );
};

export default ListContainer;
