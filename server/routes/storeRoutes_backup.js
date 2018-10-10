import  StoreCtrl  from "../ctrls/StoreCtrl";

let storeRoutes = function(routes){    
    let sCtrl = new StoreCtrl(); 
    routes.get("/", (req, res) => {    
        res.send("welcome Home!");
        res.end();
    });

    routes.get("/location", (req, res) => {    
        sCtrl.getAllLocations()
        .then(result => {
            res.json({"result": result});         
        })
        .catch( err => {
        //    console.log(err);
            res.end();
        })
    })
    routes.get("/location/:locationId/department", (req, res) =>{
        let { locationId } = req.params;
        sCtrl.getDepartment(locationId)
        .then(result => {
        //  console.log(result);
            res.json({"result": result});
            res.end()
        })
        .catch( err => {
    //     console.log(err);
            res.end();
        })
    })
    routes.get("/location/:locationId/department/:departmentId/category", (req, res) =>{
       // console.log("router", Object.values(req.params))
        sCtrl.getDataFromStore(req.params || {})
        .then(result => {
        //  console.log(result);
            res.json({"result": result});
            res.end()
        })
        .catch( err => {
    //     console.log(err);
            res.end();
        })
    })
    routes.get("/location/:locationId/department/:departmentId/category/:categoryId/subcategory", (req, res) =>{
        sCtrl.getDataFromStore(req.params || {})
        .then(result => {
        //  console.log(result);
            res.json({"result": result});
            res.end()
        })
        .catch( err => {
    //     console.log(err);
            res.end();
        })
    })
    routes.get("/location/:locationId/department/:departmentId/category/:categoryId/subcategory/:subcategoryId", (req, res) =>{
        sCtrl.getDataFromStore(req.params || {})
        .then(result => {
        //  console.log(result);
            res.json({"result": result});
            res.end()
        })
        .catch( err => {
    //     console.log(err);
            res.end();
        })
    })
    

    return routes;
}
module.exports = storeRoutes;
