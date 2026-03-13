const policyDetails = {
    policyNumber: 900000,
    name: "Naruto",
    age: 45,
    premium: 20333,
    priorClaim: null,
    renewal: true
}

policyDetails.renewalDate = "01/01/2025"
policyDetails.year1Premium = 900009
policyDetails['Nominee'] = "Keshav"

console.log(policyDetails.age > 18)
console.log(policyDetails.renewal === true)

console.log(
policyDetails.age > 18 && policyDetails.renewal === true
)

console.log(
policyDetails.age > 60 || policyDetails.renewal === true
)

console.table([policyDetails])