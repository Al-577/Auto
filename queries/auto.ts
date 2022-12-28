import { BASE_API_URL } from './../constants/api';
export const getBrands = () => {
   return fetch(`${BASE_API_URL}/api/brand`).then(data => data.json()).catch(e => {throw e});
}

export const getModels = (id: String) => {
   return fetch(`${BASE_API_URL}/api/autoModel/${id}`).then(data => data.json()).catch(e => {throw e})
}

export const getCars = (query: any) => {   
   return fetch(`${BASE_API_URL}/api/auto/query`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json;charset=utf-8'
       },
       body: JSON.stringify(query)
   }).then(data => data.json()).catch(e => {throw e})
}

export const getCarById = (id: string) => {
   
   return fetch(`${BASE_API_URL}/api/auto/${id}`).then(data => data.json()).catch(e => {throw e})
}