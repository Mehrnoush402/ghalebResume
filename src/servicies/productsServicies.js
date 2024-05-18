import axios from "axios";
import { result } from "lodash";
const SERVERURL='http://localhost:9000'

export const getProducts=()=>{  //for get All productData of database(json-server)
    const url = `${SERVERURL}/list`;
    return axios.get(url);
}

export const getProduct=(productId)=>{  //for get one productData of database(json-server) with id
    const url = `${SERVERURL}/list/${productId}`;
    return axios.get(url);
}

export const createProduct=(newProduct)=>{  //for create one productData in database(json-server)
    const url = `${SERVERURL}/list`;
    return axios.post(url,newProduct);
}

export const updateProduct=(updateData,productId)=>{  //for update one productData of database(json-server) with id
    const url = `${SERVERURL}/list/${productId}`;
    return axios.put(url,updateData);
}

export const deleteProduct=(productId)=>{  //for delete one productData of database(json-server) with id
    const url = `${SERVERURL}/list/${productId}`;
    return axios.delete(url);
}

export const createUser=(newUser)=>{ //for create one user in database(json-server)
    const url=`${SERVERURL}/users`;
    return axios.post(url,newUser)
}

export const getUser=(userId)=>{ //for get one user of database(json-server)
    const url=`${SERVERURL}/users/${userId}`;
    return axios.get(url)
}

export const getUsers=()=>{ //for get all users of database(json-server)
    const url=`${SERVERURL}/users`;
    return axios.get(url)
}

export const updateUser=(updateData,userId)=>{  //for update one user of database(json-server) with id
    const url = `${SERVERURL}/users/${userId}`;
    return axios.put(url,updateData);
}

// export const checkUser=async(email,password)=>{// two checkUser function is true,in this function we need two async await,at first we must waite for getUsers ,after that waite for find the user that is correct with condition if so we use then & catch
//     const urlUsers= `${SERVERURL}/users`
//     let newUrl="";
//     await getUsers().then(result=>{

//         const findUser=result?.data.find(user=>email === user.email && password === user.password)
//       newUrl=`${SERVERURL}/users/${findUser?.id}`
      
      
//      }).catch(err=>{
//         console.error("errror in cheackUser",err)
//      }
//      )
     
//      return   axios.get(newUrl)
// }

export const checkUser=async(email,password)=>{// two checkUser function is true,in this function we need one async await & two return,at first we must waite in then for return axios.get(newUrl) & after that we return this user in to getUsers and return it 
    let newUrl="";
   return getUsers().then(result=>{

        const findUser=result?.data.find(user=>email === user.email && password === user.password)
        newUrl=`${SERVERURL}/users/${findUser?.id}`
        return axios.get(newUrl)
      
     }).catch(err=>{
        console.error("errror in cheackUser",err)
     }
     )
 
}

