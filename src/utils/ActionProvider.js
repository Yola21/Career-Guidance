class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    // new method
    greet() {
      const greetingMessage = this.createChatBotMessage(
        <>
          Hi Folk!😁 <br/> How may I help you?
        </>
      );
      this.updateChatbotState(greetingMessage);
    }
  
    handleCareerOptions = () => {
      const message = this.createChatBotMessage(
        <>
          There are many options available after Std-12th. Here are the few in which you can make your career: <br />1. Engineering <br /> 2. Medical <br /> 3. BSc <br /> 4. BCA <br /> 5. BPharma <br /> <br /> Which field you want to explore?
        </>
      );
      this.updateChatbotState(message);
    }

    handleEngineeringInquiry = () => {
      const message = this.createChatBotMessage(
        <>
          Engineering is one of developing field in science. There are many fields in engineering, which are: <br />
            1. Mechanical Engineering <br />
            2. Chemical Engineering <br />
            3. Information Technology Engineering <br />
            4. Computer Engineering <br />
            5. Civil Engineering <br />
            6. Mechatronics Engineering <br />
            7. Electrical Engineering <br />
            8. Electronics {"&"} Communication Engineering etc. <br />
        </>
      );
      this.updateChatbotState(message)
    }

    handleEngineeringColleges = () => {
      const message = this.createChatBotMessage(
        <>
          Some well known Engineering colleges in Gujarat are listed below: <br />
            1. Nirma university, Ahmedabad <br />
            2. Dharamsinhji Desai University, Nadiad <br />
            3. Birla Viswakarma Mahavidyalaya, Vallabh Vidyangar <br />
            4. G H Patel College of Engineering {"&"} Technology, Vallabh Vidyanagar <br />
            5. A D Patel College of Engineering {"&"} Technology, Vallabh Vidyanagar <br />
            6. L D College of Engineering, Ahmedabad <br /> 
        </>
      );
      this.updateChatbotState(message);
    }

    handleMedicalInquiry = () => {
      const message = this.createChatBotMessage(
        <>
          Options for Medical fields after are: <br />
            1. Bachelor of Medicine {"&"} Bachelor of Surgery (MBBS) <br />
            2. Bachelor of Dental Science(BDS) <br />	
            3. Bachelor of Homeopathic Medicine {"&"} Surgery(BHMS)
        </>
      );
      this.updateChatbotState(message);
    }

    handleMedicalColleges = () => {
      const message = this.createChatBotMessage(
        <>
          Some well known Medical Colleges of Gujarat are as follows: <br />
            1. B J Medical College, Ahmedabad <br />
            2. Parul University, Baroda <br />
            3. Gujarat Adani Institute of Medical Science, Bhuj <br />
        </>
      );
      this.updateChatbotState(message);
    }

    handleBScInquiry = () => {
      const message = this.createChatBotMessage(
        <>
          BSc is one of the good field. There  are different fields in BSC in which you can make your career: <br />
            1. BSC Maths <br />
            2. BSC Chemistry <br />
            3. BSC Physics <br />
            4. BSC biology <br />
            5. BSC Zoology <br />
            6. BSC Agriculture <br />
        </>
      );
      this.updateChatbotState(message);
    }

    handleBScColleges = () => {
      const message = this.createChatBotMessage(
        <> 
          Some well known BSC colleges in Gujarat are: <br />
            1. St. Xavier College, Ahmedabad <br />
            2. Maharaja Sayajirav University(MSU), Baroda <br />
            3. Sardar Patel University(SPU), Vallabh Vidyanagar <br />
            4. Gujarat University, Ahmedabad <br />
            5. Saurashtra University, Rajkot <br />
        </>
      );
      this.updateChatbotState(message);
    }

    handleCareerList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, do you enjoy being Science Student?",
        {
          widget: "careerLinks"
        }
      );
      this.updateChatbotState(message);
    };
  
    handleDefault = () => {
      const message = this.createChatBotMessage(
        "Oops! I think you have not selected any option. Please select any option from below to proceed.",
        {
          widget: "highSchoolOptions"
        }
      );
      this.updateChatbotState(message);
    };
  
    updateChatbotState(message) {
      // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
  
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message]
      }));
    }
  }
  
  export default ActionProvider;
  