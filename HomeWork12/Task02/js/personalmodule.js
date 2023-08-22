const getGreeting = (userName) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    let greeting = '';
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
  
    return `${greeting}, ${userName}!`;
  };
  
  module.exports = {
    getGreeting
  };


