import React from 'react'
import FirstYearCard from '../../components/FirstYearCard'

const FirstYearPage = () => {
        const firstYearSubjects = [
  {
    subject: "Physics",
    content: "Best notes for AKTU Physics 1st year exams with PYQs and important formulas.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Chemistry",
    content: "Comprehensive AKTU Chemistry notes for 1st-year students, including unit-wise summaries and PYQs.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Mathematics-I",
    content: "AKTU Maths-I notes covering Calculus, Differential Equations, and previous year questions.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Programming in C",
    content: "Detailed AKTU C Programming notes with examples, flowcharts, and solved exercises.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Electrical Engineering",
    content: "Important Electrical Engineering concepts, circuit theory notes, and numerical problems for AKTU 1st year.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Engineering Mechanics",
    content: "Complete AKTU Engineering Mechanics notes with derivations, diagrams, and practice problems.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Environmental Studies",
    content: "Concise AKTU EVS notes with unit-wise topics and short questions for quick revision.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  },
  {
    subject: "Workshop Practice",
    content: "Practical Workshop notes and guidelines for AKTU 1st year students including lab work and safety rules.",
    images: "https://examupdates.in/wp-content/uploads/2017/12/B.Tech-Books.png"
  }
];  
  return (
    <div className="min-h-screen bg-amber-100 px-6 py-10 lg:px-12">
      <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {
        firstYearSubjects.map((item,index)=>(
            <FirstYearCard key={index} data={item}  />
        ))
      }
     
      </div>
      </div>
  )
}

export default FirstYearPage