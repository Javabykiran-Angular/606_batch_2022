//json => javascript object Notation
// it is store in key & value format 
var obj = {
    fname: "Sumit",
    "lname": 'Raokhande',
    id: 9
};
//1 Using dot operator
//2 Using square operator
//1 Using dot operator
// console.log(`
//     First Name :: ${obj.fname}
//     last Name  :: ${obj.lname}
//     ID         :: ${obj.id}
// `)
//2 Using square operator
// console.log(`
// --------Using Square Operator--------------
//     First Name :: ${obj["fname"]}
//     last Name  :: ${obj['lname']}
//     ID         :: ${obj["id"]}
// `);
// Array of Object
var arrobj = [
    {
        fname: 'Sumit',
        lname: "Raokhande",
        id: 9,
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", 'May', 'June'],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 55
            }
        ]
    },
    {
        fname: 'Spruha',
        lname: "Raokhande",
        id: 3,
        country: {
            cid: 2,
            cname: "US"
        },
        month: ["Feb", 'Aug', 'Dec'],
        result: [
            {
                subj: 'M1',
                marks: 50
            },
            {
                subj: 'M2',
                marks: 60
            },
            {
                subj: 'M3',
                marks: 65
            }
        ]
    },
    {
        fname: 'Kiran',
        lname: "Raokhande",
        id: 6,
        country: {
            cid: 3,
            cname: "Japan"
        },
        month: ["Aug", 'Apr', 'March'],
        result: [
            {
                subj: 'M1',
                marks: 45
            },
            {
                subj: 'M2',
                marks: 55
            },
            {
                subj: 'M3',
                marks: 75
            }
        ]
    }
];
// console.log(`
//     First name :: ${arrobj[1].fname}
//     Last name  :: ${arrobj[1].lname}
//     ID         :: ${arrobj[1].id}
// `)
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    First name :: ".concat(arrobj[i].fname, "\n    Last name  :: ").concat(arrobj[i].lname, "\n    ID         :: ").concat(arrobj[i].id, "\n  Country Name :: ").concat(arrobj[i].country.cname, "\n    Month      :: ").concat(arrobj[i].month, "\n    ---------Result-------------\n  "));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n          Subject :: ".concat(arrobj[i].result[j].subj, "\n          marks   :: ").concat(arrobj[i].result[j].marks, "\n    "));
    }
}
