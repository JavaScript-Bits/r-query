import React, { useState } from 'react'
import { usePosts } from '../hooks'

export default function Posts() {
  const [page, setPage] = useState(1)

  const {isLoading, data} = usePosts(page);
  console.log('data', data)


  //fn
  const handleNext = () => {
    setPage(page=> page + 1)
  }
   const handlePrev = () =>{
    setPage(page => page ? page -1 :0 )
  }
  if(isLoading){
    return (
      <div>Isloading</div>
    )
  }
  return (
    <div className='main-page' >
      {page}
      {
        data?.data?.map((singlePost)=>(
          <div className='single-post'  key={singlePost?.id} >
            <p className='post-id'>
              {singlePost?.id}
            </p>
            <p>
            {singlePost?.title}
            </p>
            
          </div>
        ))
      }
      <div>
        {
          page ? (
            <button onClick={()=> handlePrev()}>Prev</button>
          ): null
        }
              <button onClick={()=> handleNext()} >Next</button>
            </div>
    </div>
  )
}
