import knex from "../../service/knex";
import { Aluno, AlunoCreat } from "./aluno.d";

export const getAll = async (): Promise<Aluno[] | []> => {
  return knex("aluno").select();
};

export const store = async (params: AlunoCreat) => {
  return knex("aluno").insert(params);
};
