function scuberGreetingForFeet(rideDistance){
  let rideGreeting;

  if (rideDistance <= 400) {
    rideGreeting = `This one is on me!`;
  }
  else if ((rideDistance > 400) && (rideDistance <= 2000)) {
    rideGreeting = `That will be twenty bucks.`;
  }
  else if ((rideDistance > 2000) && (rideDistance <= 2500)) {
    rideGreeting = `I will gladly take your thirty bucks.`;
  }
  else {
    rideGreeting = `No can do.`;
  }
  return rideGreeting;
}

function ternaryCheckCity(city){
  return ((city === "NYC") || (city === "New York City")) ? ("Ok, sounds good.") : (`No go.`);
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
      break;
  }
}