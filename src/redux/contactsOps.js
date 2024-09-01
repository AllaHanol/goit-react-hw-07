import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts =
  createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
      try {
        const { data } =
          await axios.get(
            "https://66d0bbd6181d059277df9365.mockapi.io/api/v1/contacts",
          );

        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.message,
        );
      }
    },
  );

export const deleteContact =
  createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
      try {
        const { data } =
          await axios.delete(
            `https://66d0bbd6181d059277df9365.mockapi.io/api/v1/contacts/${id}`,
          );
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.message,
        );
      }
    },
  );

export const addContact =
  createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkApi) => {
      try {
        const { data } =
          await axios.post(
            "https://66d0bbd6181d059277df9365.mockapi.io/api/v1/contacts",
            contact,
          );
        console.log(data);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.message,
        );
      }
    },
  );
