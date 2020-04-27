const express = require("express")
const app = express()
const body_parser = require("body-parser")
app.use(express.json())
app.use(body_parser.urlencoded({ extended: true }));

app.post("/api/predict",(request,response)=>{
//     request.body.transgender	
// request.body.female	
// request.body.male	
// request.body.smoker_no	
// request.body.smoker_yes	
// request.body.corona_test	
// request.body.age	
// request.body.none
// request.body.asthma_or_chronic_lung_disease	
// request.body.disease_or_conditions_that_make_it_harder_to_cough
// request.body.fever_chills_or_sweating	
// request.body.shortness_of_breath	
// request.body.loss_of_taste
// request.body.loss_of_smell
// request.body.new_or_worsening_cough,
// request.body.sore_throat
// request.body.body_aches
// request.body.nothing
// request.body.pregnancy
// request.body.diabetes_with_complications
// request.body.disease_or_conditions_that_make_it_harder_to_cough
// request.body.congestive_heart_failure
// request.body.extreme_obesity
    response.send(request.body.text)
})



app.listen(3000,()=>
console.log("I am up"))