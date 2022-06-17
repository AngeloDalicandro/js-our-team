// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.

// BONUS
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: 
// cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


// Creo un array dove inserisco gli oggetti
const teamMembers = [
    {
        fullName: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    };
    {
        fullName: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'
    };
    {
        fullName: 'Walter Gordon',
        role: 'Office Manager',
        img: 'img/walet-gordon-office-manager.jpg'
    };
    {
        fullName: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    };
    {
        fullName: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    };
    {
        fullName: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    };
]

// Popolo l'array creando gli oggetti inserendo le informazioni di ogni membro del team con 3 chiavi

// Imposto un ciclo for per stampare nel DOM gli oggetti