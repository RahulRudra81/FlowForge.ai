import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const RecentProject = () => {
    
    const [projects, setProjects] = useState([])
   // const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://bit-hackathon-1.onrender.com/api/v1/aiModel/getModels',{
                   method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }

                })
                const datafrombakend = await response.json()
                setProjects(datafrombakend.data)
              //  setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProjects()
    }, [])

    //console.log(projects)

  return (
    <div>
      {projects.map((project) => (
        <Link
        to={`/project/${project._id}`} 
        key={project._id}
         className="flex justify-between items-center text-white bg-gray-800 backdrop:border-2 border-solid border-orange-800 rounded-lg p-5 shadow-md hover:shadow-gray-700 m-3 cursor-pointer">
        <h1 className='lg:text-lg text-sm font-myfont '> {project.modelDescription}</h1>
        <h1 className='lg:text-lg text-sm font-myfont'><span className="font-bold "> Project Id-</span> {project._id}</h1>
      </Link>
      ))}
    </div>
  )
}

export default RecentProject
