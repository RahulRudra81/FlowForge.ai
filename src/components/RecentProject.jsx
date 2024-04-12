import { Button } from "@material-tailwind/react"
import { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"

const RecentProject = (props) => {
    
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
    }, [projects])

    //console.log(projects)

    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = async () => {
      const results = projects.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setProjects(results);
    }

  return (
    <>
    <div className='flex gap-4 mb-5'>
                <input
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 className='p-2 bg-[#212121] border-2 text-white focus:border-gray-700 focus:outline-none border-[#323232] rounded-lg' placeholder='Enter to search'/>
                <Button onClick={handleSearch} className='bg-black hover:bg-orange-800 hover:text-black'>
                  <BiSearch className='text-lg'/>
                </Button>
              
              </div>
              <span className='text-xl text-orange-800 font-bold '>Recent Projects </span>
              
    <div>
      {projects.map((project) => (
        <Link
        to={`/project/${project._id}`} 
        key={project._id}
         className="flex justify-between items-center text-white bg-gray-800 backdrop:border-2 border-solid border-orange-800 rounded-lg p-5 shadow-md hover:shadow-gray-700 m-3 cursor-pointer ">
        <h1 className='lg:text-lg text-sm font-myfont '> {project.modelDescription}</h1>
        <h1 className='lg:text-lg text-sm font-myfont'><span className="font-bold "> Project Id-</span> {project._id}</h1>
      </Link>
      ))}
    </div>
    </>
  )
}

export default RecentProject
