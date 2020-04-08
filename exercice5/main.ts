class ConcertTicket {
    public artistName: string;
    public userName: string;
    public concertDate: string;
    public hourConcert: string;
    public userPlace: number;


    public constructor(artistName: string, userName: string, concertDate: string, hourConcert: string, userPlace?: number) {
        this.artistName = artistName;
        this.userName = userName;
        this.concertDate = concertDate;
        this.hourConcert = hourConcert;
        this.userPlace = userPlace;
    }
    public htmlDetails(): string {
        let htmlContent: string = `<p>Nom de l'artiste: ${this.artistName}</p>
        <p>Nom du client: ${this.userName}</p>
        <p>Date du concert: ${this.concertDate}</p>
        <p>Heure de l'évènement: ${this.hourConcert}</p>`;
        if (this.userPlace != undefined) {
            htmlContent = htmlContent + `<p>Place du client : ${this.userPlace}</p>`;
        }
        return htmlContent;

    }
}

let ticketWithoutPlace: ConcertTicket = new ConcertTicket("Children of Bodom", "Florian", "30/04", "23:00");
let ticketWithPlace: ConcertTicket = new ConcertTicket("Children of Bodom", "Florian", "30/04", "23:00", 666);
console.log(ticketWithPlace.htmlDetails());