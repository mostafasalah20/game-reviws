import { Dis } from "./ui.module.js";

export class Details {
    constructor(id) {
        document.getElementById("close").addEventListener('click', () => {
            document.getElementById("contain").classList.remove("d-none");
            document.getElementById("details").classList.remove("d-none")
        })
        this.detalis_cord(id)
    }

    async detalis_cord(id) {

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0d33464156mshcf266d88b6fc751p1a5d86jsn4a49a9460f2b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            this.lod=document.querySelector(".lodin").classList.replace('d-none', 'd-flex');
            const response = await fetch(url, options);
            const result = await response.json();
            this.lod=document.querySelector(".lodin").classList.replace('d-flex', 'd-none');
            console.log(result);
            new Dis().detalis_cord(result)
        } catch (error) {
            console.error(error);
        }
    }

}



