import { Todo } from "@prisma/client";
import type { GetServerSideProps } from "next";
import React from "react";
import prisma from "./../../lib/prisma";

type Props = {
  todos: (Omit<Todo, "createdAt"> & { createdAt: number })[];
};

const TodosPage = ({ todos }: Props) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.description} - Created at:{" "}
              {new Date(todo.createdAt).toUTCString()}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodosPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const todos = await prisma.todo.findMany({});

  const serializableTodos = todos.map((todo) => ({
    ...todo,
    createdAt: todo.createdAt.getTime(),
  }));

  return {
    props: {
      todos: serializableTodos,
    },
  };
};
