import { RiGroup2Fill, RiHotelBedFill, RiUser2Fill } from "react-icons/ri";
export const PatientData = [
    {
        id: 'HS8980',
        firstName: "John",
        lastName: "Doe",
        weight: 80,
        age: 32,
        gender: "Male",
        height: 180,
        bloodGroup: "O+",
        temp: 36.5,
        bloodPressure: "120/80",
        heartRate: 80,
        respiratoryRate: 20,
        assignedNurse: "Dr. Smith",
        dateCreated: "2022-01-01",
    },

    {
        id: 'HS8981',
        firstName: "Jane",
        lastName: "Doe",
        weight: 60,
        age: 28,
        gender: "Female",
        height: 160,
        bloodGroup: "A+",
        temp: 36.5,
        bloodPressure: "120/80",
        heartRate: 80,
        respiratoryRate: 20,
        assignedNurse: "Dr. Smith",
        dateCreated: "2022-01-01",
    },

    {
        id: 'HS8982',
        firstName: "Bob",
        lastName: "Doe",
        weight: 80,
        age: 32,
        gender: "Male",
        height: 180,
        bloodGroup: "O+",
        temp: 36.5,
        bloodPressure: "120/80",
        heartRate: 80,
        respiratoryRate: 20,
        assignedNurse: "Dr. Smith",
        dateCreated: "2022-01-01",
    }


]


export const stats = [
    {
        number: "2,890",
        title: "Assigned Patients",
        icon: <RiHotelBedFill className="icon" size={32} />,
    },
    {
        number: "10,000",
        title: "Administered Out-Patients",
        icon: <RiUser2Fill className="icon" size={32} />,
    },
    {
        number: "1,000",
        title: "Waiting Assigned Patients",
        icon: <RiGroup2Fill className="icon" size={32} />,
    },
    {
        number: "6,080",
        title: "Admitted Patients",
        icon: <RiHotelBedFill className="icon" size={32} />,
    },
    {
        number: "3,700",
        title: "Patients with HMO",
        icon: <RiGroup2Fill className="icon" size={32} />,
    },
]

export const patientBreakdown = [
    {
        name: "Cardiology",
        value: 189,
    },
    {
        name: "Orthopedics",
        value: 120,
    },
    {
        name: "Gastroenterology",
        value: 80,
    },
    {
        name: "Neurology",
        value: 60,
    },
]