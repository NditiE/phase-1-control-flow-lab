function scuberGreetingForFeet(distanceinfeet) {
  if (distanceinfeet <= 400) {
    return "This one is on me";
  } else if (distanceinfeet > 2000 && distanceinfeet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distanceinfeet > 2500) {
    return "No can do.";
  }
}

console.log(scuberGreetingForFeet(199));

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('pittsburgh'));

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye";
  }
}

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));
