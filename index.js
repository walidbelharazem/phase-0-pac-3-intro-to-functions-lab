function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string){
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string){
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string){
    const testl=string.toLowerCase(); 
    const testu=string.toUpperCase(); 
    const test="Let's have dinner together!";
    if(string===testl){return"I can't hear you!";}
    if(string===testu){return"YES INDEED!";}
    if(string===test){return"I would love to!";}
  }