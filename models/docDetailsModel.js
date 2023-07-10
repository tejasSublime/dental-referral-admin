export function docDetatailsModel({ params, index }) {
    var docDetails = {
        "id": index,
        "docName": params.doctorName,
        "date": params.date,
        "pName": params.patientName,
        "status": params.status,
        "pic": params.profilepic
    }
    return docDetails
}