class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (
        lowerCaseMessage.includes("hi") ||
        lowerCaseMessage.includes("hey") ||
        lowerCaseMessage.includes("hello") ||
        lowerCaseMessage.includes("hello there") ||
        lowerCaseMessage.includes("hey there") ||
        lowerCaseMessage.includes("hi there")
      ) {
        this.actionProvider.greet();
      }  
      else if (
        lowerCaseMessage.includes("science") ||
        lowerCaseMessage.includes("commerce") ||
        lowerCaseMessage.includes("arts")
      ) {
        this.actionProvider.handleCareerList();
      } 
      else if (
        lowerCaseMessage.includes("i want to know options available after std 12.") ||
        lowerCaseMessage.includes("please tell me the options available after std-12th.") ||
        lowerCaseMessage.includes("which are the options available after std-12th science?")
      ){
        this.actionProvider.handleCareerOptions();
      }
      else if (
        lowerCaseMessage.includes("i want to know more about engineering field.") ||
        lowerCaseMessage.includes("please show me options for engineering field.") ||
        lowerCaseMessage.includes("tell me about engineering field.")
      ){
        this.actionProvider.handleEngineeringInquiry();
      }
      else if (
        lowerCaseMessage.includes("which are the engineering colleges?") ||
        lowerCaseMessage.includes("please can you tell me colleges available for engineering?") ||
        lowerCaseMessage.includes("i want list of engineering colleges.")
      ){
        this.actionProvider.handleEngineeringColleges();
      }
      else if (
        lowerCaseMessage.includes("i want to know more about medical field.") ||
        lowerCaseMessage.includes("please show me options for medical stream.") ||
        lowerCaseMessage.includes("can you tell me more about medical field?")
      ){
        this.actionProvider.handleMedicalInquiry();
      }
      else if (
        lowerCaseMessage.includes("please tell me colleges available for medcial in gujarat.") ||
        lowerCaseMessage.includes(" can you provide me with the list of medical colleges?")
      ){
        this.actionProvider.handleMedicalColleges();
      }
      else if (
        lowerCaseMessage.includes("i need information about bsc.") ||
        lowerCaseMessage.includes("i want to explore bsc.") ||
        lowerCaseMessage.includes("can you show me options for bsc?")
      ){
        this.actionProvider.handleBScInquiry();
      }
      else if (
        lowerCaseMessage.includes("which are the well known bsc colleges in gujarat?") ||
        lowerCaseMessage.includes("please tell me colleges available for bsc in gujarat.") ||
        lowerCaseMessage.includes("can you provide me list of bsc colleges in gujarat?")
      ){
        this.actionProvider.handleBScColleges();
      }
      else {
        this.actionProvider.handleDefault();
      }
    }
  }
  
export default MessageParser;
  