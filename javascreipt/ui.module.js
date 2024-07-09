

export class Dis {
    constructor() { }

    display(result) {
        let cartona = ``;
        for (let i = 0; i < result.length; i++) {
            cartona += `

     <div class="col-sm-12 col-md-5 col-lg-3 ">
                <div  class="card_contact">
                    <div data-id="${result[i].id}"  class="card">
                        <img src="${result[i].thumbnail}" class="w-100" alt="">
                        <div class="card-body">
                            <div class="link_crad d-flex justify-content-between">
                                <span>${result[i].title}</span>
                                <span><a href="#" class="btn btn-primary btn-sm ">free</a></span>
                            </div>
                            <p class="card-text text-center">${result[i].short_description}</p>
                        </div>

                    </div>
                    <div class="bord"></div>
                    <div class="catog d-flex justify-content-between ">
                        <span class="btn btn-primary btn-sm ">${result[i].genre}</span>
                        <span class="btn btn-primary btn-sm ">${result[i].platform}</span>
                    </div>
                </div>


            </div>
    `
        }
        document.getElementById("row").innerHTML = cartona;
    }
    detalis_cord(result) {
        let cartona = ``;
        cartona += `
                <div class="col-sm-12 col-md-4">
                <img src="${result.thumbnail}" class="w-100" alt="">
                </div>
                <div class="col-sm-12 col-md-8">
                <h2>${result.title}</h2>
                <p>Category : <span class=" bt btn btn-info">${result.genre}</span> </p>
                <p>Platform : <span class=" bt btn btn-info">${result.platform}</span> </p>
                <p>Status : <span class="bt btn btn-info">${result.publisher}</span> </p>
                <div>  ${result.short_description} </div>
                <div>  ${result.minimum_system_requirements.graphics} </div>
                <div>  ${result.minimum_system_requirements.processor} </div>
                <div>  ${result.minimum_system_requirements.os} </div>
                <div>  ${result.minimum_system_requirements.storage} </div>
                <div>  ${result.minimum_system_requirements.memory} </div>
                
                <div><a target="_blank" class=" w-25 btn btn-info mt-4" href="${result.freetogame_profile_url}">show game</a></div>

             </div>
      
      `

        document.getElementById("row_detail").innerHTML = cartona;
    }



}