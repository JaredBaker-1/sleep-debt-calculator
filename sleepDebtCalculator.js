const getSleepHours = day => {
  if(day === 'monday'){
    return 5;
  }
  else if(day === 'tuesday'){
    return 5;
  }
  else if(day === 'wednesday'){
    return 5;
  }
  else if(day === 'thursday'){
    return 5;
  }
  else if(day === 'friday'){
    return 5;
  }
  else if(day === 'saturday'){
    return 5;
  }
  else if(day === 'sunday'){
    return 5;
  }
};

const getActualSleepHours = () => getSleepHours('monday') +
getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('You got the perfect amount of sleep.');
  }
  else if(actualSleepHours > idealSleepHours){
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed.');
  }
  else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed.');
  }
};

calculateSleepDebt();
