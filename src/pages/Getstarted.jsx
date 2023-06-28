import React, { useState,useEffect } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { db ,auth} from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { BiMessageSquareDetail, BiHomeCircle } from 'react-icons/bi'
import { FiHelpCircle } from 'react-icons/fi'
import { BsPlusSquare } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'
import Popup from '../components/Popup'

const menuItems = [
  { name: 'Home', path: '/', icon: <BiHomeCircle /> },
  { name: 'Get Started', path: '/getstarted', icon: <BiMessageSquareDetail /> },
  { name: 'Templates', path: '/template', icon: <BsPlusSquare /> },
  { name: 'Help & FAQs', path: '/help', icon: <FiHelpCircle /> },

];

const Getstarted = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [projectName, setProjectName] = useState('Untitled Project')
    const [buttonPopup, setButtonPopup] = useState(false)


  //console.log(newProject);

  const addProject = async () => {
    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        user: auth.currentUser.id,
        userEmail: auth.currentUser.email,
        projectName:projectName,
        date: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
      })
    } catch {
      ((error) => {
        alert(error.message)
      })
    }
  }

 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCurrentPath = (path) => {
    return pathname === path;
  };
  const faqData = [
    {
      question: 'Quick Start Guide',
      answer: "Create a new project: Once you're logged in, create a new project to organize your AI models. Give your project a meaningful name that reflects its purpose or the type of AI bot you're building.Access the drag and drop builder: Navigate to the drag and drop AI model builder interface within your project. This interface allows you to visually design and configure the conversational flow of your AI bot using drag and drop components.Browse the available AI models: Explore the library of pre-built AI models available in the drag and drop builder. These models can include natural language processing (NLP) models, sentiment analysis models, intent classifiers, and more.Drag and drop models into the canvas: Select the desired AI models from the library and drag them onto the builder canvas. Arrange the models in the desired sequence to define the flow of the conversation.Configure the models: Once the models are placed on the canvas, configure each model by setting up intents, responses, and any custom logic specific to your use case. Define the AI model's behavior, such as how it interprets user inputs, generates responses, and handles different scenarios.Connect models and create conversational flow: Establish connections between the models to create a conversational flow. Connect user inputs to appropriate AI models and map the model outputs to subsequent models or responses.Test and refine: Use the built-in testing capabilities of the drag and drop AI model builder to simulate user interactions and evaluate the bot's responses. Test different scenarios and refine the model configurations as needed to ensure the bot performs optimally.",
    },
    // {
    //   question: 'How do I contact customer support?',
    //   answer: 'You can contact our customer support team by email or phone. Please visit the Contact Us page for more information.',
    // },
    // {
    //   question: 'Can I upgrade my storage?',
    //   answer: 'Yes, you can upgrade your storage just by upgrading your current plan .',
    // },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [session, setSession] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if(!auth.currentUser){
      navigate('/')
    }

  }, [])

  
  const handleChange = (e) => {
    setProjectName(e.target.value)
  }
  const view=()=>{
    setButtonPopup(true)
  }
  const handleNewProject = async () => {
       
    await addProject()

    setButtonPopup(false)
    navigate('/dnd')

  }
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-row ">
        <Sidebar />
        <div className='flex w-screen flex-col h-[88vh] overflow-y-scroll  home'>
          <div className="flex md:hidden flex-col m-1 p-1 text-xl text-gray-600 font-semibold font-myfont">
            <div
              className=" hover:text-[#f43f5e] cursor-pointer flex items-center"
              onClick={toggleMenu}
            >
              <span className="m-2 text-xl">
                <AiOutlinePlus />
              </span>
              Menu
            </div>

            {isMenuOpen &&
              menuItems.map((item) => (
                <Link to={item.path} key={item.name}>
                  <div
                    className={`m-5 hover:bg-pink-50 text-sm cursor-pointer flex items-center ${isCurrentPath(item.path) ? 'text-[#f43f5e] rounded-xl bg-pink-100' : ''
                      }`}
                  >
                    <span className="m-2">{item.icon}</span>
                    {item.name}
                  </div>
                </Link>
              ))}
          </div>
          <h1 className='lg:text-3xl text-xl lg:text-start text-center font-myfont font-bold text-gray-600 m-2 mt-2 lg:mt-5 ' >Get Started</h1>
          <div className="lg:space-y-4 lg:mt-2 lg:p-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border m-3 border-gray-200 rounded lg:p-4 p-2">
                <button
                  className="flex justify-between items-center w-full focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="lg:text-lg text-sm font-medium text-gray-700">{faq.question}</span>
                  <svg
                    className={`h-6 w-6 text-gray-700 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 10l5 5 5-5z"
                    />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="mt-4 lg:text-lg text-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row  justify-between items-center lg:m-10 m-5 p-3 lg:p-5">
            <div className='border-2 lg:p-5 m-5 p-3 w-[300px] h-[150px] lg:h-[200px] border-solid border-gray-400 rounded-xl flex flex-col justify-between'>
              <h1 className='lg:text-2xl text-lg font-myfont font-bold text-gray-500 text-center ' >Create your model</h1>
              <div className="flex justify-center items-center mt-10 ">
                <button className='text-white justify-center h-8  bg-black p-5 text-sm rounded-full flex  items-center border-solid border-2 border-black  shadow-gray-400 shadow-md hover:shadow-md hover:shadow-gray-400 hover:bg-gray-800 ' onClick={view}><span>Get Started</span></button>
              </div>
            </div>
            <div className='border-2 lg:p-5 p-3 m-5 w-[300px] h-[150px] lg:h-[200px] border-solid border-gray-400 rounded-xl flex flex-col justify-between'>
              <h1 className='lg:text-xl text-lg font-myfont font-bold text-gray-500 text-center '>Explore Pre-existing Models</h1>
              <div className="flex justify-center items-center mt-10">
                <Link to='/template'><button className='text-white justify-center h-8  bg-black p-5 text-sm rounded-full flex  items-center border-solid border-2 border-black  shadow-gray-400 shadow-md hover:shadow-md hover:shadow-gray-400 hover:bg-gray-800'><span>Let's Go</span></button> </Link>
              </div>
            </div>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup} className="flex justify-center items-center  " >
      <div className="h-[300px]  w-[500px] rounded-xl  items-center ">
     
        <div className="flex  flex-col   p-2">
          <div className="intro m-5
          text-gray-600 font-myfont  text-[15px]
          ">
          Introducing the revolutionary way to create APIs: effortlessly build powerful interfaces by simply dragging and dropping models. Streamline your development process today!

          </div>
          <h2 className='text-gray-700  font-semibol font-myfont'>Project Name</h2>
          <input type="text" className="border-solid border-[black] border-[2px] rounded-md p-1"onChange={handleChange} value={projectName} />
        </div>
                  
         <div className="selectModel">
            {/* <h2 className=' text-gray-600 font-myfont  font-bold text-[15px] '>Select Model</h2>
            <div className="flex items-center cursor-pointer h-[200px] rounded-xl overflow-x-scroll border-black border-solid border-4 home">
            
              {modelsName.map((model) => (
                 <div className='flex items-center m-5 border-solid p-4 border-2 rounded-xl hover:bg-gray-200 bg-gray-100 border-black hover:shadow-xl shadow-white'>
                  <div className='text-[#db005b] text-4xl'>
                    {model.icon}
                  </div>
                  <h2 className='text-gray-700 m-5  font-semibol font-myfont'>{model.name}</h2>
                 
                 </div>
              ))}


              
              
            </div> */}
            
            <div className='w-full flex items-center justify-end'>
        <button
         className='text-white justify-center h-8 w-[80px] bg-black p-5 text-sm rounded-full flex  items-center border-solid border-2 border-black  shadow-gray-400 shadow-md hover:shadow-md hover:shadow-gray-400 hover:bg-gray-800 mt-5 '  onClick={handleNewProject}
         >Finish</button>
        </div>
            

         </div>
      </div>
      </Popup>
        </div>
      <Rightmenubar />
      </div>
    </div>
  )
}

export default Getstarted
