import axios from "axios";

export interface Users {
  fullName: string;
  username: string;
  password: string;
  passwordConfirm?: string;
  birthDate: string;
  sex: string;
  accountType: "Candidate" | "Employee";
  terms: string;
  email: string;
}

export const createUsers = async (data: Users) => {
  try {
    const result = await axios.post("http://localhost:8080/api/insert", data);
    if (result) {
      return result;
    }
  } catch (error: any) {
    return error?.response;
  }
};

export interface UserProps {
  username: string;
  password: string;
}

export const getUser = async (data: UserProps) => {
  try {
    const result = await axios.post("http://localhost:8080/api/user", data);
    if (result) {
      return result;
    }
  } catch (error: any) {
    return error?.response;
  }
};
