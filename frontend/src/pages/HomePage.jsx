import React from 'react'
import YearCard from '../components/YearCard'

const HomePage = () => {
  const year_data=[
    {"title":"1ST YEAR",
      "content":"You can see and download all 1st Year B.Tech notes here. All subjects are available in one place for your convenience.",
      "images":"https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
    },
    {"title":"2ND YEAR",
      "content":"You can see and download all 2nd Year B.Tech notes here. All subjects are available in one place for your convenience.",
      "images":"https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
    },
    {"title":"3RD YEAR",
      "content":"You can see and download all 3rd Year B.Tech notes here. All subjects are available in one place for your convenience.",
      "images":"https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
    },
    {"title":"4Th YEAR",
      "content":"You can see and download all 4th Year B.Tech notes here. All subjects are available in one place for your convenience.",
      "images":"https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
    },
    
    

]
  return (
    <div className="min-h-screen bg-amber-100 px-6 py-10 lg:px-12">
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4 '>
        {
        year_data.map((item,index)=>(
            <YearCard key={index} data={item}  />
        ))
      }
     
      </div>
      </div>
  )
}

export default HomePage