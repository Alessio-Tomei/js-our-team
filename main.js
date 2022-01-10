const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

for (let i = 0; i < team.length; i++) {
  generateTeamCard(i); 
}

const addMemberButton = document.getElementById('addMemberButton');

addMemberButton.addEventListener('click', newTeamMember);

function newTeamMember() {
  const newName = document.getElementById('name').value;
  const newRole = document.getElementById('role').value;
  const newImage = document.getElementById('image').value;
  const newMember = {
    name : newName,
    role : newRole,
    image : newImage
  };
  team.push(newMember);
  generateTeamCard(team.length-1);
  document.getElementById('name').value ='';
  document.getElementById('role').value = '';
  document.getElementById('image').value = '';
}

function generateTeamCard(index) {
  const teamContainer = document.querySelector('.team-container');
  let element = `
  <div class="team-card">
    <div class="card-image">
      <img src="img/${team[index].image}" alt="${team[index].name}">
  </div>
  <div class="card-text">
      <h3>${team[index].name}</h3>
      <p>${team[index].role}</p>
    </div>
  </div>`;
  teamContainer.insertAdjacentHTML('beforeend', element);
}