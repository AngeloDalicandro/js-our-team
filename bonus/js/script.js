// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.

// BONUS
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: 
// cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


// Creo un array dove inserisco gli oggetti
const teamMembers = [
    // Popolo l'array creando gli oggetti inserendo le informazioni di ogni membro del team con 3 chiavi
    {
        fullName: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walter-gordon-office-manager.jpg'
    },
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        fullName: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    },
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    }
]

// Rispetto all'esercizio base ho spostato questa variabile fuori dal for per utilizzarne il global scope
const teamContainer = document.querySelector('.team-container');

// Imposto un ciclo for per stampare nel DOM gli oggetti
for(i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    teamContainer.innerHTML +=   `
                                <div class="team-card">
                                    <div class="card-image">
                                        <img
                                            src="${thisMember.img}"
                                            alt="${thisMember.fullName}"
                                        />
                                    </div>
                                    <div class="card-text">
                                        <h3>${thisMember.fullName}</h3>
                                        <p>${thisMember.role}</p>
                                    </div>
                                </div>
                                `;
}


// Creo la variabile per salvare il bottone
const addBtn = document.getElementById('addMemberButton');

// Creo un nuovo oggetto

// Imposto cosa accade al click
addBtn.addEventListener('click',
    function() {
        // Rilevo il nome inserito
        const newMemberName = document.getElementById('name').value;
        // Rilevo il ruolo inserito
        const newMemberRole = document.getElementById('role').value;
        // Rilevo l'immagine selezionata
        const newMemberImage = document.getElementById('image').value;
        
        // Creo il nuovo oggetto da pushare nell'array
        const newMember = {
            fullName: newMemberName,
            role: newMemberRole,
            img: newMemberImage
        }

        // Pusho nell'array
        teamMembers.push(newMember);

        // Seleziono l'oggetto
        const thisMember = teamMembers[teamMembers.length - 1];
        
        // Stampo nel DOM la card
        teamContainer.innerHTML +=  `
                                    <div class="team-card">
                                        <div class="card-image">
                                            <img
                                                src="${thisMember.img}"
                                                alt="${thisMember.fullName}"
                                            />
                                        </div>
                                        <div class="card-text">
                                            <h3>${thisMember.fullName}</h3>
                                            <p>${thisMember.role}</p>
                                        </div>
                                    </div>
                                    `;

    }
)



