import { publicReq } from "./axios-config";

export const saveuserService=(data)=>publicReq.post("/user/save-user",data);
