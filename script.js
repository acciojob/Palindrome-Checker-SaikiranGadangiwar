// complete the given function

function palindrome(str){
// Remove non-alphanumeric characters and convert to lowercase
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Reverse the cleaned string and check if it is equal to the original
  return cleaned === cleaned.split('').reverse().join('');
}
module.exports = palindrome
