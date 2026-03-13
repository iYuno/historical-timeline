import { env } from "@shared/config";
import axios from "axios";

export const axiosClient = axios.create({
	baseURL: env.apiBaseUrl,
});
