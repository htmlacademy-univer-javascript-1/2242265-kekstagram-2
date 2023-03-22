
function getRandomIntInclusive(min, max)
{
  if (min >= 0 &&  max>= 0 && min < max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (min>max)
  {
    return 'Incorrect order of values!';
  }
  {
    return 'Negative number!';
  }

}

const result = getRandomIntInclusive(0, -2);

