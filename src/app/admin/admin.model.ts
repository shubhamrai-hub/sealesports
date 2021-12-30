export class RegistrationModel{
    id: number = 0;
    teamName: string;
    leaderIGN: string;
    leaderId: number;
    whatappNo: number;
    Player02IGN: string;
    Player02Id: number;
    Player03IGN: string;
    Player03Id: number;
    Player04IGN: string;
    Player04Id: number;


    constructor(teamName, leaderIGN, leaderId, whatappNo, Player02IGN, Player02Id, Player03IGN, Player03Id, Player04IGN, Player04Id)
    {
        this.teamName = teamName;
        this.leaderIGN = leaderIGN;
        this.leaderId = leaderId;
        this.whatappNo = whatappNo;
        this.Player02IGN = Player02IGN;
        this.Player02Id = Player02Id;
        this.Player03IGN = Player03IGN;
        this.Player03Id = Player03Id;
        this.Player04IGN = Player04IGN;
        this.Player04Id = Player04Id;
    }
}