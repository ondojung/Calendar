//6331bbf23e9d69df3222aa973c1ff6ff

import axios from 'axios'

export const MovieApi= async()=>{
    const city = 'Seoul'
    const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzMxYmJmMjNlOWQ2OWRmMzIyMmFhOTczYzFmZjZmZiIsIm5iZiI6MTczMjM5MzgxMi45NjA1MDA3LCJzdWIiOiI2NzQyMzk1M2NmZDI0YzNhN2FhYjQ5ZDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-kq75W2TfdgNqxiC8384FHcmQ-ZpnMJDgX1GV6vfIZc'
    const query = '시민덕희'
    const result = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: { 
            query: query, 
            page:1,
          },
          headers: {
            Authorization: TOKEN,
          },
        })
    return result.data
}

     