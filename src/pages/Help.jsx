import { useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Rightmenubar from '../components/Rightmenubar'
import Sidebar from '../components/Sidebar'
import { auth } from '../firebase'
const Help = () => {
   
const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is the purpose of this website?',
      answer: 'The purpose of this website is to  empowers you to create intelligent conversational experiences without the need for extensive coding knowledge or expertise in AI algorithms..',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team by email or phone. Please visit the Contact Us page for more information.',
    },
    {
      question: 'Can I upgrade my storage?',
      answer: 'Yes, you can upgrade your storage just by upgrading your current plan .',
    },
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
  
  return (
    <div>
    <Navbar/>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="mx-auto lg:px-4 px-2 py-4 lg:py-8 w-full">
        <div className="title lg:text-4xl text-2xl mt-3 font-myfont border-b-2 border-solid border-gray rounded-lg text-gray-500 font-bold flex justify-center hidden lg:bock  ">How Can We Help?</div>
      <h1 className="lg:text-2xl text-lg text-gray-800 font-bold mb-4 mt-10">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded p-4 ">
            <button
              className="flex justify-between items-center w-full focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="lg:text-lg text-sm font-medium text-gray-700">{faq.question}</span>
              <svg
                className={`h-6 w-6 text-gray-700 transition-transform ${
                  activeIndex === index ? 'transform rotate-180' : ''
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
    </div>
    <Rightmenubar/>
    </div>
    </div>
  );
};


export default Help
