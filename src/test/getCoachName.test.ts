import app from "app";


const request= require('supertest');

const responseData={
    "AllTeamCoachNamesResult":
    {"tTeamCoachName":
    [{"sTeamName":"Austria","sCoachName":"Franco Foda"},
    {"sTeamName":"Belgium","sCoachName":"Roberto Martínez"},
    {"sTeamName":"Croatia","sCoachName":"Zlatko Dalic"},
    {"sTeamName":"Czech Republic","sCoachName":"Jaroslav Šilhavý"},
    {"sTeamName":"Denmark","sCoachName":"Kasper Hjulmand"},
    {"sTeamName":"England","sCoachName":"Gareth Southgate"},
    {"sTeamName":"Finland","sCoachName":"Markku Kanerva"},
    {"sTeamName":"France","sCoachName":"Didier Deschamps"},
    {"sTeamName":"Germany","sCoachName":"Joachim Löw"},
    {"sTeamName":"Hungary","sCoachName":"Marco Rossi"},
    {"sTeamName":"Italy","sCoachName":"Roberto Mancini"},
    {"sTeamName":"Netherlands","sCoachName":"Frank de Boer"},
    {"sTeamName":"North Macedonia","sCoachName":"Igor Angelovski"},
    {"sTeamName":"Poland","sCoachName":"Paulo Sousa"},
    {"sTeamName":"Portugal","sCoachName":"Fernando Santos"},
    {"sTeamName":"Russia","sCoachName":"Stanislav Cherchesov"},
    {"sTeamName":"Scotland","sCoachName":"Steve Clarke"},
    {"sTeamName":"Slovakia","sCoachName":"Štefan Tarkovič"},
    {"sTeamName":"Spain","sCoachName":"Luis Enrique"},
    {"sTeamName":"Sweden","sCoachName":"Janne Andersson"},
    {"sTeamName":"Switzerland","sCoachName":"Vladimir Petkovic"},
    {"sTeamName":"Turkey","sCoachName":"Şenol Güneş"},
    {"sTeamName":"Ukraine","sCoachName":"Andriy Shevchenko"},
    {"sTeamName":"Wales","sCoachName":"Ryan Giggs, Rob Page (caretaker)"}]}}


describe("GET / ", () => {
    test("It should respond all team chachs names", async () => {
        const response = await request(app).get('/api/v1.0/get-team-coach-name');
        expect(response.body).toEqual(responseData);
        expect(response.statusCode).toBe(200);
    });
    });
