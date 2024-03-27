//a-
db.Instructors.find().forEach(document => {
    print(document);
})


//b-
db.Instructors.find({salary: {$gt: 4000}},{
    firstName: 1,
    salary
})


//c-
db.Instructors.find({age: {$lte: 25}},{
    firstName: 1,
    age: 1
})


//d-
db.Instructors.find({"address.city": "mansoura", $or:[{"address.street": 10}, {"address.street": 14}]}
,{
    firstName: 1,
    address:1,
    salary:1
})


//e-
db.Instructors.find({$and:[{courses: "js"}, {courses: "jquery"}]}
,{
    firstName: 1,
    courses: 1
})


//f-
db.Instructors.find({
    courses: {$exists: true},
    firstName: {$exists: true},
}).forEach(document => {
    print("First Name: " + document.firstName + "\n\tNumber of courses " + document.courses.length);
})


//g-
db.Instructors.find({
    lastName: {$exists: true},
    firstName: {$exists: true},
}).sort({firstName: 1, lastName: -1}).forEach(document => {
    print(document.firstName + " " + document.lastName + " age: " + document.age)
})

//h-
db.Instructors.deleteOne({
    firstName: "ebtesam",
    courses: {$size: 5},
    
})


//i-
db.Instructors.updateMany({},{
    $addToSet: {"active": true}
})



//j-

db.Instructors.updateMany({
    courses:"EF",
    firstName: "mazen",
    lastName: "mohammed"
},{
    $set: {"courses.$": "jquery"}
})

//k-

db.Instructors.updateOne({
    firstName: "noha",
    lastName: "hesham"
},{
    $addToSet: {"courses": "jquery"}
})

//l-

db.Instructors.updateOne({
    firstName: "ahmed",
    lastName: "mohammed"
},{
    $unset: {"courses": ""}
})



//m-
db.Instructors.updateMany({
    courses: {$size: 3},
    courses: { $type: "array" }
},{
    $inc: {salary: -500}
})

//n-
db.Instructors.updateMany({},{
    $rename: {address: "fullAddress"}
})

//o-
db.Instructors.updateOne({
    firstName: "noha",
    lastName: "hesham"
},{
    $set: {"fullAddress.street": 20}
})

//For testing
db.Instructors.find().forEach(document => {
    print(document);
})