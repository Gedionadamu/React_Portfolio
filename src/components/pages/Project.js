import React from "react";

function projects(){
    const imageStyle = {
        width: "450px"
    }
    return <div className="Projects mt-5 justify-content-center d-flex flex-column " id="projects">
    <h2 className="col-md-8 offset-md-2">Projects</h2>
    <div className=" mt-5 row">
        <div className="col-md-4 offset-md-2">
        <img src="./homemade screenshot.png" alt="screen shot of home made website" className="shadow-lg p-3 mb-5 bg-body rounded " style={imageStyle}/>
        </div>
        <div className="text-container col-md-4 offset-md-0 align-self-center">
        <h3>HomeMade</h3>
        <p> A website to help you find a recipe based on ingrediants you have. The website creates both food recipe and drink recipe.
            HTML CSS JavaScript </p>
        <a href="https://github.com/SherrickM/homemade"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className="dark" className="bi bi-github ms-3" viewBox="0 0 20 20">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
           </svg>
        </a>
        <a href="https://sherrickm.github.io/homemade/"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-box-arrow-right" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
        </a>
        </div>
    </div>
    <div className=" mt-5 row">
        <div className="text-container col-md-4 offset-md-2 align-self-center">
            <h3>Weather Dashboard</h3>
            <p> A Dashboard to look up weather baseon city name, can provide daily forecast upto 5 days, shows temp, wind humidity and UV index.
                HTML CSS JavaScript
            </p>
            <a href="https://github.com/Gedionadamu/Weather_Dashboard"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-github ms-3" viewBox="0 0 20 20">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
               </svg>
            </a>
            <a href="https://gedionadamu.github.io/Weather_Dashboard/">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-box-arrow-right" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
            </a>
            </div>
            <div className="col-md-4 offset-md-0">   
        <img src="./Weather screenshot.png" alt="screen shot of home made website" className="shadow-lg p-3 mb-5 bg-body rounded " style={imageStyle}/>
            </div>
    </div>
    <div className=" mt-5 row">
        <div className="col-md-4 offset-md-2">
        <img src="./Workday Scheduler.png" alt="screen shot of home made website" className="shadow-lg p-3 mb-5 bg-body rounded " style={imageStyle}/>
        </div>
        <div className="text-container col-md-4 offset-md-0 align-self-center">
        <h3>Workday scheduler</h3>
        <p> A platform to save your daily work activities with ability to save and delete entries. Also has a color coded time slot to show pas, present and future for better layout.
            HTML CSS JavaScript</p>
        <a href="https://github.com/Gedionadamu/work_day_scheduler"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-github ms-3" viewBox="0 0 20 20">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
           </svg>
        </a>
        <a href="https://gedionadamu.github.io/work_day_scheduler/">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-box-arrow-right" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
        </a>
        </div>
    </div>
    <div className=" mt-5 row">
        <div className="text-container col-md-4 offset-md-2 align-self-center">
            <h3>Polite-Mail</h3>
            <p> An interactive website that can convert those rude emails to a professional email so you can say whats really on your mind without hesitation. 
            </p>
            <a href="https://github.com/SherrickM/polite-mail"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-github ms-3" viewBox="0 0 20 20">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
               </svg>
            </a>
            <a href="https://polite-mail.herokuapp.com/">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="dark" className="bi bi-box-arrow-right" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                  </svg>
            </a>
            </div>
            <div className="col-md-4 offset-md-0">   
        <img src="./Weather screenshot.png" alt="screen shot of home made website" className="shadow-lg p-3 mb-5 bg-body rounded "style={imageStyle}/>
            </div>
    </div>
</div>
}
 export default projects