// Code your solutions in this file
function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver}
  delete newDriver[key];

  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}