// State //
const freelancerInformation = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
  { name: "Marie", occupation: "Programmer", price: 65 },
  { name: "Jake", occupation: "Architect", price: 60 },
  { name: "John", occupation: "Teacher", price: 45 },
];

const maxList = 10;
const newFreelancer = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
];

function addFreelancer() {
  const freelancer =
    freelancerInformation[
      Math.floor(Math.random() * freelancerInformation.length)
    ];

  newFreelancer.push(freelancer);
}

function averagePrice() {
  const totalPrice =
    newFreelancer.reduce((total,freelancer) => { return total + freelancer.price; 
    }, 0);
    const averagePrice = totalPrice / newFreelancer.length;
    return averagePrice.toFixed(2);
}

function render() {
  const freelancerList = document.querySelector("#freelancers");
  freelancerList.innerHTML = '';
  newFreelancer.forEach((element) => {
    const freelancerElement = document.createElement("li");
    freelancerElement.textContent = `${element.name} - ${element.occupation} ($${element.price})`;
    freelancerList.appendChild(freelancerElement);
  });

  const averagePriceElement = document.querySelector("#averagePrice");
  averagePriceElement.textContent = `Average Price: $${averagePrice()}`;
}

const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
  render();
  if (newFreelancer.length >= maxList) {
    clearInterval(addFreelancerIntervalId);
  }
}, 1000);

render();
