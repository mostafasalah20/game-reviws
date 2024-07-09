import { Dis } from './ui.module.js';
import { Details } from "./details.odule.js";

export class Uil {
    constructor() {
        document.querySelectorAll(".nav-link").forEach(e => {
            e.addEventListener("click", () => {
                this.changeActiveLink(e)
            })
        })
        this.lodin = document.querySelector('.lodin')
        this.details = document.getElementById("details");
        this.contain = document.getElementById("contain")
        this.Dis = new Dis()
        this.gemasData("MMORPG")
    }
    async changeActiveLink(e) {
        document.querySelector(".navbar-nav .active").classList.remove("active");
        e.classList.add("active");
        const data = e.getAttribute("data-catogry")
        const resultData = await this.gemasData(data)
        this.Dis.display(resultData)
        this.details = new Details()
        console.log(resultData)
    }

    async gemasData(get_catogry) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${get_catogry}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0d33464156mshcf266d88b6fc751p1a5d86jsn4a49a9460f2b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            this.lodin.classList.replace('d-none', 'd-flex')
            const response = await fetch(url, options);
            const result = await response.json();
            this.lodin.classList.replace('d-flex', 'd-none')
            console.log(result);
            this.Dis.display(result)
            document.querySelectorAll(".card").forEach((card) => {
                card.addEventListener("click", () => {
                    this.details.classList.remove('d-none');
                    this.contain.classList.add('d-none');
                    new Details(card.dataset.id)
                    console.log(card.dataset.id);
                })
            })
        } catch (error) {
            console.error(error);
        }

    }


}
