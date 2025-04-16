import config from "@/src/config/envConfig"
import { delay } from "@/src/utils/delay"

export const getRecentPosts  = async () =>{
    const res = await fetch(`${config.baseApi}/items?sortBy=-createdAt&limit=9`)
    await delay(1000)
    return res.json()
}