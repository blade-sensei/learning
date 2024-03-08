let message = "Global message"
function hello()
{
  if (true) {
    console.log('surprise:', message);
    const message = "Hi 👋";
  }
  console.log(message);
}

hello();
console.log(message);