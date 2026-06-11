import axios from "axios"

const Api = "http://localhost:8080/employee";

export const createEmp=async(employee)=>{
    return await axios.post(Api,employee);
}

export const readEmp=async()=>{
    return await axios.get(Api);
}

export const updateEmp=async(id,employee)=>{
    return await axios.put(`${Api}/${id}`,employee);
}

export const deleteEmp=async(id)=>{
    return await axios.delete(`${Api}/${id}`);
}